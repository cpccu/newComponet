import HeroSection from "../HeroSection/HeroSection";
import EventLayout from "./../eventUpcoming/EventLayout";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section className="lg:h-32 h-full relative bg-white">
        <EventLayout
          clName={
            " mx-2 my-14 md:mx-4 md:my-16 lg:mt-0 lg:absolute lg:left-[4rem] lg:right-[4rem]  lg:-top-[11rem] xl:left-[11rem] xl:right-[11rem] xl:-top-[11rem]"
          }
        />
      </section>

      <section className=" h-screen bg-white"></section>
      <section className=" h-screen bg-red-300"></section>
      <section className=" h-screen bg-green-300"></section>
      <section className=" h-screen bg-red-300"></section>
      <section className=" h-screen bg-green-300"></section>
    </main>
  );
}
