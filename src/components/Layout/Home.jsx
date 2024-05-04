import HeroSection from "./../HOME/HeroSection/HeroSection";
import EventLayout from "./../HOME/eventUpcoming/EventLayout";
import OurMission from "./../HOME/OurMission.jsx/OurMission";
import OurResponsibility from "./../HOME/OurResponsibility/OurResponsibility";
import Count from "../HOME/Count/Count";
import GallerySection from "../HOME/GallerySection/GallerySection";

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
      <Count />
      <GallerySection />
    </main>
  );
}
