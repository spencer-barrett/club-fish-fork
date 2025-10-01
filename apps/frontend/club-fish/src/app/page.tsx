"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { db } from "../lib/firebase/clientApp";
import { collection, getDocs, type CollectionReference } from "firebase/firestore";
import { Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";
import { azurePublicUrl } from "@/lib/azure/getBlob";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  type Person = {id: string, firstName: string, lastName: string, profileImg: string, UID: string};
  type ResultMap = Record<string, Person[]>;
  const names = ["peopleTemp"] as const;
  const [result, setResult] = useState<ResultMap>({});
  const [display, setDisplay] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const getTypedCol = (name: typeof names[number]) =>
  collection(db, name) as CollectionReference<Omit<Person, "id">>;

  
  async function handleClick() {
    // const names = ["rooms", "users", "friendRequests"] as const;
    setDisplay(true);
    setLoading(true);

    try {
          const snaps = await Promise.all(names.map((name) => getDocs(getTypedCol(name))));
      const merged: ResultMap = Object.fromEntries(
      snaps.map((snap, i) => [
        names[i],
        snap.docs.map((d) => ({ id: d.id, ...d.data() } as Person)),
      ])
    );
      setResult(merged);
    } finally {
      setLoading(false);
    }
  }
  //bg-[#29cfb4]
  return (
    <div className="h-svh w-svw bg-[#29cfb4] bg-cover bg-center">
      {/* <div className="absolute top-0 left-0 z-10 bg-background/40 h-svh w-svw backdrop-blur-sm" /> */}

      <div className="w-full h-full flex flex-col items-center justify-center gap-6 z-11  overflow-auto">

        <div>
          <Button onClick={handleClick} className="shadow-lg/30">
            Click Me!
          </Button>
        </div>
        <div className="flex gap-6 flex-col md:flex-row w-full items-center justify-center">
          <Card className="md:w-[40vw] md:h-[50vh] w-[75svw] h-[40svh] shadow-xl/30 backdrop-blur-xl flex flex-col">
            <CardHeader className="text-center font-[800] text-2xl">
              Raw JSON
            </CardHeader>
            <div className="px-6">
              <Separator color="foreground/60" className="h-[1px] bg-foreground/60" />
            </div>
            <CardContent className="flex-col flex w-full flex-1 p-0 overflow-auto">
              <ScrollArea
                className="p-3 rounded h-full w-full overflow-auto"
                type="always"
              >
                <pre className="text-sm">
                  <div
                    className={`w-full h-full flex ${loading ? "items-center justify-center" : " "
                      }`}
                  >
                    {display &&
                      (loading ? (
                        <Loader2 className="animate-spin w-6 h-6 text-gray-700" />
                      ) : (
                        <span>{JSON.stringify(result, null, 2)}</span>
                      ))}
                  </div>
                </pre>
              </ScrollArea>

            </CardContent>
          </Card>
          <Card className="md:w-[40vw] md:h-[50vh] w-[75svw] h-[40svh] shadow-xl/30 backdrop-blur-xl flex flex-col">
            <CardHeader className="text-center font-[800] text-2xl">
              Formatted
            </CardHeader>
            <div className="px-6">
              <Separator color="foreground/60" className="h-[1px] bg-foreground/60" />
            </div>
            <CardContent className="flex-col flex w-full flex-1 p-0 overflow-auto">
              <ScrollArea
                className="p-3 rounded h-full w-full overflow-auto"
                type="always"
              >
                <div className="flex flex-col w-full">
                  <ul>
                    {result.peopleTemp && result.peopleTemp.map((person) =>
                      <>
                        <li key={person.id} className="my-4">
                          <div className="flex">
                            <Avatar className="h-20 w-20">
                              <AvatarImage src={azurePublicUrl(person.profileImg)} alt={person.profileImg} />
                            </Avatar>
                            <div className="px-4">
                              <p className="text-foreground/60">UID: {person.UID}</p>
                              <p className="font-[800] text-xl">{person.firstName}</p>
                              <p>{person.lastName}</p>
                            </div>
                          </div>
                        </li>
                        <Separator color="foreground/60" className="h-[1px] bg-foreground/60" />
                      </>

                    )}
                  </ul>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

        </div>

      </div>

    </div>
  );
}
