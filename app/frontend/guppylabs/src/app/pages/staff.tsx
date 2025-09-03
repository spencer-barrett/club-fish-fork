import { Avatar, Card, CardBody, CardHeader, Divider } from "@heroui/react";
import spencerAvatar from "../../assets/spencer_avatar.jpg";

export default function Staff() {
  const staff = [
    { role: "Developer/TBD", name: "Spencer Barrett", avatar: spencerAvatar },
    { role: "Developer/TBD", name: "Tony Mazich" },
    { role: "Developer/TBD", name: "Joshua Chia" },
    { role: "Developer/TBD", name: "Ethan Juniper" },
  ];

  return (
    <main className="w-full flex border-t-1 border-foreground-200 mb-6">
      <div className="flex flex-col items-center w-full mt-6">
        <span className="text-xl md:mt-12">
          Meet our <span className="font-bold">Team</span>
        </span>
        <div className="flex flex-col items-center justify-center md:h-3/4">


          <div className="mt-8 md:mt-1 flex justify-center ">
            <Card className="aspect-square w-[44vw] sm:w-40 md:w-48 lg:w-56 p-4 flex flex-col items-center">
              <CardHeader className="justify-center p-0">
                <Avatar className="h-16 w-16 sm:h-25 sm:w-25" name="Michael" />
              </CardHeader>
              <Divider className="mt-6" />
              <CardBody className="p-0 text-center text-sm sm:text-xs flex justify-center items-center">
                <p className="md:text-lg text-md font-bold">Michael</p>
                <p className="md:text-xs text-xs text-foreground/80 mt-2">CEO</p>
              </CardBody>
            </Card>
          </div>

          <div className="mt-3 md:mt-8 grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
            {staff.map((s) => (
              <div className="flex items-center justify-center">
                <Card className="aspect-square w-[44vw] sm:w-40 md:w-48 lg:w-56 p-4 flex flex-col items-center">
                  <CardHeader className="justify-center p-0">
                    <Avatar
                      className="h-16 w-16 sm:h-25 sm:w-25"
                      name={s.name}
                      src={s.avatar}
                    />
                  </CardHeader>
                  <Divider className="mt-6" />
                  <CardBody className="p-0 text-center text-sm sm:text-xs flex justify-center items-center">

                    <p className="md:text-lg text-md font-bold">{s.name}</p>
                    <p className="md:text-xs text-xs text-foreground/80 mt-2">{s.role}</p>
                  </CardBody>
                </Card>
              </div>
            ))}

          </div>
        </div>
      </div>
    </main>
  );
}
