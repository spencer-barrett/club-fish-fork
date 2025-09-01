import { Card, CardBody, CardFooter, CardHeader, Divider } from "@heroui/react";
import heroImg from "../../assets/hero-img.jpg"
export default function Home() {
  return (
    <div className="flex  w-full flex-col">
      {/* <h1>Home</h1>
      <p>Welcome to Guppylabs</p> */}
      <section className=" flex h-1/2 bg-amber-400">
        {/* <img src={heroImg} className="w-full"/> */}
        {/* <Card isBlurred className="flex">
          
          <CardHeader>
            Header
          </CardHeader>
          <Divider/>
          <CardBody>
            Body
          </CardBody>
          <CardFooter>
            Footer
          </CardFooter>
        </Card> */}
      </section>
      <section className="flec h-1/2 bg-red-400">

      </section>
    </div>
  );
}
