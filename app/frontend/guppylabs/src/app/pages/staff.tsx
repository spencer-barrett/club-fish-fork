import { Avatar, Card, CardBody, CardHeader, Divider } from "@heroui/react";
import spencerAvatar from "../../assets/spencer_avatar.jpg";

export default function Staff() {
  const staff = [
    { role: "Developer/TBD", name: "Spencer", avatar: spencerAvatar },
    { role: "Developer/TBD", name: "Tony" },
    { role: "Developer/TBD", name: "Joshua" },
    { role: "Developer/TBD", name: "Ethan" },
  ];

  return (
    <main className="w-full flex border-t-1 border-foreground-200 mb-6 min-h-svh">
      <div className="flex flex-col items-center w-full mt-6">
        <span className="text-xl">
          Meet our <span className="font-bold">Team</span>
        </span>

          <div className="mt-8 flex justify-center">
          <Card className="aspect-square w-36 sm:w-40 md:w-48 p-4 flex flex-col items-center">
            <CardHeader className="justify-center p-0">
              <Avatar className="h-14 w-14 sm:h-16 sm:w-16" name="Michael" />
            </CardHeader>
            <Divider className="my-3" />
            <CardBody className="p-0 text-center text-sm">CEO</CardBody>
          </Card>
        </div>

            <div className="mt-8 grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
              {staff.map((s) => (
                <div className="flex items-center justify-center">
                  <Card className="aspect-square w-[44vw] sm:w-40 md:w-48 lg:w-56 p-4 flex flex-col items-center">
                    <CardHeader className="justify-center p-0">
                      <Avatar
                        className="h-14 w-14 sm:h-16 sm:w-16"
                        name={s.name}
                        src={s.avatar}
                      />
                    </CardHeader>
                    <Divider className="my-3 sm:my-2" />
                    <CardBody className="p-0 text-center text-sm sm:text-xs">{s.role}</CardBody>
                  </Card>
                </div>
              ))}

          </div>
        </div>
    </main>
  );
}
