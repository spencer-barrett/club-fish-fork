import { Button } from "@heroui/react";
import hero from "../../assets/hero.jpg";
import { useNavigate } from "react-router";

export default function Home() {

  const navigate = useNavigate();

  return (
    <div className="flex  w-full flex-col">
      <section className=" relative h-svh sm:h-svh">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] z-200" />
        <img
          src={hero}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 h-full w-full z-[300] flex flex-col justify-center items-center">
          <p className="px-4 text-3xl sm:text-[4rem] text-center font-[800]">Born in the lab, <br className="sm:hidden" />raised in the current.</p>
          <p className="pb-4 pt-2 px-4 text-xs">Building tomorrow’s connections today.</p>
          <Button className="p-4 text-foreground font-bold" radius="full" color="primary" onClick={() => navigate('/about')}>Learn More</Button>
        </div>
      </section>
    </div>
  );
}
