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
    <main className="w-full flex border-t-1 border-foreground-200 mb-6">
      <div className="flex flex-col items-center w-full mt-6">
        <span className="text-xl">
          Meet our <span className="font-bold">Team</span>
        </span>
        <div className="sm:grid sm:grid-rows-2 flex flex-col w-full h-full mt-12 ">
          <div className="flex justify-center ">
            <Card className="sm:w-[20svw] w-[55svw] h-[25vh] sm:h-auto flex justify-center px-4">
              <CardHeader className="flex justify-center">
                <Avatar className="h-24 w-24" name="Michael" />
              </CardHeader>
              <Divider className="my-4" />
              <CardBody className="text-center">CEO</CardBody>
            </Card>
          </div>
          <div className="flex justify-center items-start sm:mt-6 mt-2">
            <div className="sm:grid sm:grid-cols-4  flex flex-col sm:gap-1 gap-2 w-full h-full">
              {staff.map((s) => (
                <div className="flex justify-center">
                  <Card className="sm:w-[20svw] w-[55svw] h-[25vh] sm:h-auto flex justify-center px-4">
                    <CardHeader className="flex justify-center">
                      <Avatar
                        className="h-24 w-24"
                        name={s.name}
                        src={s.avatar}
                      />
                    </CardHeader>
                    <Divider className="my-4" />
                    <CardBody className="text-center">{s.role}</CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
