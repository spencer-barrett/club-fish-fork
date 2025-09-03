import { Accordion, AccordionItem, Link } from "@heroui/react";
import GuppyIcon from "../assets/guppy.svg?react";
import { Link as RouterLink } from "react-router";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="max-w-svw w-full border-t-1 border-foreground-200 px-6 sm:px-2 ">
        <div className="flex w-full">
          <section className="grid sm:grid-cols-4 grid-rows-3 sm:grid-rows-2 w-full">
            <div className="flex my-6 flex-col items-center justify-center sm:col-span-2 sm:row-span-2">
              <div className="flex justify-center flex-col sm:pr-hidden">
                <span className="inline-flex items-center justify-center gap-2 tracking-widest mb-2">
                  <GuppyIcon height={20} width={20} /> GuppyLabs
                </span>
                <span className="inline-flex text-[0.5rem]">
                  © {currentYear} GuppyLabs LLC - All Rights Reserved
                </span>
              </div>
            </div>
            <div className="sm:flex sm:my-6 hidden">
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
            <div className="sm:flex sm:my-6 hidden">
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
            <Accordion selectionMode="multiple" className="sm:hidden">
              <AccordionItem key="1" aria-label="About Us" title="About Us">
                <div className="">
                <Link
                  as={RouterLink}
                  to={"#"}
                  className="text-xs mt-2"
                  color="foreground"
                >
                  Contact Us
                </Link>
                </div>
              </AccordionItem>
              <AccordionItem key="2" aria-label="Resources" title="Resources">
                <div className="flex flex-col">
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
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </footer>
    </>
  );
}
