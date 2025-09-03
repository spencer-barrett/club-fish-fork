import { Card, CardBody, CardHeader, Divider, Skeleton } from "@heroui/react";

export default function Projects() {
  return (
    <div className="border-t-1 border-foreground-100 w-full items-center flex flex-col mx-12 md:mx-24 mb-6 md:mb-12">
      <div className="text-center mt-6 sm:mt-12 font-[800] text-lg sm:text-3xl border-b-1 border-foreground-100 pb-6">
        Projects we are currently building
      </div>
      <div className="flex mt-6 sm:mt-12">
        <Card>
          <CardHeader className="text-sm px-6 md:px-12">
            Undisclosed Social Media Application
          </CardHeader>
          <div className="px-3">
            <Divider />
          </div>
          <CardBody>
            <Skeleton className="rounded-lg">
              <div className="h-32 rounded-lg" />
            </Skeleton>
            <div className="pt-6 w-1/2">
              <Skeleton className="rounded-lg">
                <div className="w-1/2 h-3 rounded-lg" />
              </Skeleton>
            </div>
            <div className="pt-6 w-3/5">
              <Skeleton className="rounded-lg">
                <div className="w-1/2 h-3 rounded-lg" />
              </Skeleton>
            </div>
            <div className="pt-6">
              <Skeleton className="rounded-lg">
                <div className="w-1/2 h-3 rounded-lg" />
              </Skeleton>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
