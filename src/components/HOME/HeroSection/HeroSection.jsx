import Hero from "../../../../data/home/Hero.json";

export default function HeroSection() {
  return (
    <main
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://i.ibb.co/nnt0RRZ/pexels-buro-millennial-636760-1438072.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="padding text-white flex flex-col justify-center items-center md:items-start py-[3rem] gap-11 lg:gap-10 md:pb-[7rem] lg:pb-[16rem] cursor-default h-[calc(100svh-50px)] md:h-full"
    >
      <section className="flex flex-col items-center md:items-start">
        <h1 className="font-extrabold capitalize text-[2.3rem] md:text-[4rem] lg:text-[4.5rem]">
          {Hero?.header}
        </h1>
        <h3 className="text-[1.7rem] md:text-[1.9rem] lg:text-[2rem] text-amber-300">
          {Hero?.secondheader}
        </h3>
      </section>
      <p className="conText text-md text-center md:text-left text-white/75">
        {Hero?.context}
      </p>
      <div className="flex gap-5">
        <button className="uppercase md:text-[1.2rem] lg:text-[1.3rem] font-semibold px-6 py-3 bg-header hover:bg-white hover:text-black trans">
          {Hero?.btn1Text}
        </button>

        <button className="uppercase md:text-[1.2rem] lg:text-[1.3rem] font-semibold px-6 py-3 bg-white text-black hover:bg-header hover:text-white trans">
          {Hero?.btn2Text}
        </button>
      </div>
    </main>
  );
}
