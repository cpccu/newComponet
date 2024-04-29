import HeroSection from "../HeroSection/HeroSection";
import EventLayout from "./../eventUpcoming/EventLayout";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section className="lg:h-0 relative h-[calc(100vh-60px)]">
        <EventLayout
          clName={
            "my-52 mb-52 md:mx-4 lg:mt-0 lg:absolute lg:left-[11rem] lg:right-[11rem] -top-[8rem]"
          }
        />
      </section>

      <section className=" h-screen bg-green-300"></section>
      <section className=" h-screen bg-red-300"></section>
      <section className=" h-screen bg-green-300"></section>
      <section className=" h-screen bg-red-300"></section>
      <section className=" h-screen bg-green-300"></section>
    </main>
  );
}
