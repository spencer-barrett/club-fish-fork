"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { db } from "../lib/firebase/clientApp";
import { collection, getDocs } from "firebase/firestore";
import { Loader2 } from "lucide-react";

export default function Home() {
  const [result, setResult] = useState<Record<string, any[]>>({});
  const [display, setDisplay] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  async function handleClick() {
    const names = ["rooms", "users", "friendRequests"] as const;
    setDisplay(true);
    setLoading(true);

    try {
      const snaps = await Promise.all(
        names.map((name) => getDocs(collection(db, name)))
      );
      const merged = Object.fromEntries(
        snaps.map((snap, i) => [
          names[i],
          snap.docs.map((d) => ({ id: d.id, ...d.data() })),
        ])
      );
      setResult(merged);
    } finally {
      setLoading(false);
    }
  }
  //bg-[#29cfb4]
  return (
    <div className="h-svh w-svw bg-[#29cfb4]">
      <div className="w-full h-full flex items-center justify-center flex-col gap-6">
        <Button
          variant="default"
          className="shadow-lg/30"
          onClick={handleClick}
        >
          Click me!
        </Button>
        <ScrollArea
          className="overflow-auto bg-black/10 p-3 rounded flex"
          type="always"
        >
          <pre className="text-xs h-[60vh] w-[50vw]  ">
            <div
              className={`w-full h-full flex ${
                loading ? "items-center justify-center" : " "
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
      </div>
    </div>
  );
}
