import { Link } from "@heroui/react";
import GuppyIcon from "../assets/guppy.svg?react";
import { Link as RouterLink } from "react-router";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="w-svw h-48 border-t-1 border-foreground-200">
        <div className="flex h-full w-full">
          <section className=" mx-6 grid grid-cols-3 w-full  divide-x divide-default
    [&>*:nth-child(3)]:border-l-0">
            <div className="flex my-6 pr-4 flex-col items-center justify-center">
              <div className="flex justify-center flex-col">
                <span className="inline-flex items-center justify-center gap-2 tracking-widest mb-2">
                  <GuppyIcon height={20} width={20} /> GuppyLabs
                </span>
                <span className="inline-flex text-[0.5rem]">
                  © {currentYear} GuppyLabs LLC - All Rights Reserved
                </span>
              </div>
            </div>
            <div className="flex my-6 justify-center">
              <div className="flex flex-col">
                <span className="font-bold">About Us</span>
                <Link
                  as={RouterLink}
                  to={"#"}
                  className="text-xs mt-2"
                  color="foreground"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="flex justify-center my-6">
              <div className="flex flex-col">
                <span className="font-bold">Resources</span>
                <Link
                  as={RouterLink}
                  to={"#"}
                  className="text-xs mt-2"
                  color="foreground"
                >
                  Our Logs
                </Link>
                <Link
                  as={RouterLink}
                  to={"https://github.com/tonemazz/CS-4800-Web-Project"}
                  className="text-xs mt-2"
                  color="foreground"
                >
                  Our Documentation
                </Link>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
}
