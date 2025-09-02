import hero from "../../assets/hero.jpg";
export default function Home() {
  return (
    <div className="flex  w-full flex-col">
      {/* <h1>Home</h1>
      <p>Welcome to Guppylabs</p> */}
      <section className=" relative h-[50svh] sm:h-svh">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] z-200" />
        <img src={hero} className="absolute inset-0 h-full w-full object-cover" />
      </section>
      <section className="flex sm:h-svh h-[50svh] bg-red-400"></section>
    </div>
  );
}
