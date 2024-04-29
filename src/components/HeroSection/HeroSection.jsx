import "./Hero.css";

export default function HeroSection() {
  return (
    <main className=" bgIMG padding text-white flex flex-col justify-center items-center md:items-start py-[3rem] md:pb-[10rem] gap-6 md:gap-8 lg:h-[calc(100vh-120px)]">
      <section className="flex flex-col items-center md:items-start">
        <h1 className="font-extrabold capitalize text-[2rem] md:text-[3.8rem] lg:text-[5rem]">
          We are Proud
        </h1>
        <h3 className="text-[1.5rem] md:text-[1.7rem] lg:text-[2rem] text-amber-500">
          Students of City University
        </h3>
      </section>
      <p className="text-md md:text-xl lg:text-[1.2rem] text-center md:text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        laborum deleniti laboriosam dolorum doloribus consequuntur quo amet
        nulla nemo explicabo, doloremque, distinctio minus. Soluta eum hic quasi
        quae accusamus! Inventore repellendus, velit rem quam nostrum nobis,
        sequi iure illum unde, dignissimos veniam temporibus eaque! Labore atque
        praesentium a numquam alias!
      </p>
      <div className="flex gap-5">
        <button className="uppercase lg:text-[1.3rem] font-semibold px-6 py-3 bg-header hover:bg-white hover:text-black trans">
          Our Mission
        </button>
        <button className="uppercase lg:text-[1.3rem] font-semibold px-6 py-3 bg-white text-black hover:bg-header hover:text-white trans">
          Our Story
        </button>
      </div>
    </main>
  );
}
