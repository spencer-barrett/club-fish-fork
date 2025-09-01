import { Avatar, Card, CardBody, CardHeader } from "@heroui/react";

export default function Staff() {
  return (
    <main className="w-full flex border-t-1 border-foreground-200 mb-6">
      <div className="flex flex-col items-center w-full mt-6">
        <span>
          Meet our <span className="font-bold">Team</span>
        </span>
        <div className="grid grid-rows-2 w-full h-full mt-12">
          <div className="flex justify-center">
            <Card className="w-[25svw] flex justify-center">
              <CardHeader className="flex justify-center">
                <Avatar className="h-24 w-24" name="Michael" />
              </CardHeader>
              <CardBody></CardBody>
            </Card>
          </div>
          <div className="flex justify-center items-start mt-6">
            <div className="grid grid-cols-3 gap-1 w-full h-full">
              <div className="flex justify-center">
                <Card className="w-[25svw] flex justify-center">
                  <CardHeader className="flex justify-center">
                    <Avatar className="h-24 w-24" name="Spencer" />
                  </CardHeader>
                  <CardBody></CardBody>
                </Card>
              </div>
              <div className="flex justify-center">
              <Card className="w-[25svw] flex justify-center">
                  <CardHeader className="flex justify-center">
                  <Avatar className="h-24 w-24" name="Tony" />
                  </CardHeader>
                  <CardBody></CardBody>
                </Card>
                
              </div>
              <div className="flex justify-center">
              <Card className="w-[25svw] flex justify-center">
                  <CardHeader className="flex justify-center">
                  <Avatar className="h-24 w-24" name="Josh" />
                  </CardHeader>
                  <CardBody></CardBody>
                </Card>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
