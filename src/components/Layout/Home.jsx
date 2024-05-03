import HeroSection from "../HeroSection/HeroSection";
import OurMission from "../OurMission.jsx/OurMission";
import OurResponsibility from "../OurResponsibility/OurResponsibility";
import EventLayout from "./../eventUpcoming/EventLayout";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section className=" lg:h-48 h-full relative bg-white">
        <EventLayout
          clName={
            " mx-2 my-14 md:mx-4 md:my-16 lg:mt-0 lg:absolute lg:left-[2rem] lg:right-[2rem]  lg:-top-[11rem] xl:left-[9rem] xl:right-[9rem] xl:-top-[11rem]"
          }
        />
      </section>
      <OurMission />
      <OurResponsibility />
      <section className=" h-screen bg-red-300"></section>
      <section className=" h-screen bg-green-300"></section>
      <section className=" h-screen bg-red-300"></section>
      <section className=" h-screen bg-green-300"></section>
    </main>
  );
}
