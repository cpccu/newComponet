import "./Hero.css";
import Hero from "./../../../data/Hero.json";

export default function HeroSection() {
  return (
    <main className=" bgIMG padding text-white flex flex-col justify-center items-center md:items-start py-[3rem] md:pb-[10rem] gap-8 h-[calc(100vh-60px)] lg:h-[calc(100vh-120px)] cursor-default">
      <section className="flex flex-col items-center md:items-start">
        <h1 className="font-extrabold capitalize text-[2.3rem] md:text-[3.8rem] lg:text-[5rem]">
          {Hero?.header}
        </h1>
        <h3 className="text-[1.7rem] md:text-[1.7rem] lg:text-[2rem] text-amber-300">
          {Hero?.secondheader}
        </h3>
      </section>
      <p className="text-md md:text-xl lg:text-[1.2rem] text-center md:text-left  leading-7">
        {Hero?.context}
      </p>
      <div className="flex gap-5">
        <button className="uppercase lg:text-[1.3rem] font-semibold px-6 py-3 bg-header hover:bg-white hover:text-black trans">
          {Hero?.btn1Text}
        </button>
        <button className="uppercase lg:text-[1.3rem] font-semibold px-6 py-3 bg-white text-black hover:bg-header hover:text-white trans">
          {Hero?.btn2Text}
        </button>
      </div>
    </main>
  );
}
