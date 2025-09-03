import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import hero from "../../assets/about-banner.jpg"
import { FaReact, FaNode } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

export default function About() {
  return (
    <div className="w-full flex mb-12">
      <div className="flex w-full">
        <article className="flex flex-col w-full">
          <div className="relative w-full pb-12 bg-cover bg-center" style={{ backgroundImage: `url(${hero})` }}>
            <div className="absolute inset-0 bg-background/25 backdrop-blur-[1px] z-10" />
            <div className="relative md:mx-24 mx-12 z-20">
              <header className="text-2xl md:text-3xl md:mt-12 mt-6 z-20">
                About
              </header>
              <p className="md:mt-12 mt-6 text-3xl md:text-4xl font-[800] tracking-wider z-20">
                Building a new social <br className="hidden md:block" />platform
              </p>
            </div>
          </div>
          <div className="md:mx-24 mx-12 md:mt-12 mt-6 flex flex-col">
            <p className="md:text-4xl text-lg">
              Founded in 2025, GuppyLabs is a young ambitous company. We are working on creating an innovative social media platform.


            </p>
            <p className="md:text-4xl text-lg mt-6 md:mt-12">
              We're in the early stages of development, and while our vision is still evolving, our goal is to build something fresh, useful, and enjoyable
              for the online community.
            </p>
            <Divider className="md:mt-12 mt-6" />
            <div className="w-full flex items-center justify-center">


              <Card className="md:mt-12 mt-6 w-fit p-6">
                <CardHeader className=" flex items-center justify-center">
                  <p className="md:text-2xl text-2xl border-b-1 border-foreground/20 pb-2 font-[800]">Our <span className=" ">current </span>stack</p>

                </CardHeader>
                <CardBody className="flex flex-row gap-8 flex items-center justify-center">
                  <FaReact size={30} color="#29cfb4ff" /><SiTypescript size={30} color="#29cfb4ff" /><FaNode size={30} color="#29cfb4ff" />
                </CardBody>
              </Card>
            </div>


          </div>
        </article>
      </div>
    </div>
  );
}
