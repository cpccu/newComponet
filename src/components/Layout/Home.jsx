import HeroSection from "../HeroSection/HeroSection";
import EventLayout from "./../eventUpcoming/EventLayout";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <section className=" h-screen bg-green-300"></section>
      <section className=" h-screen bg-red-300"></section>
      <section className=" h-screen bg-green-300"></section>
      <section className=" h-screen bg-red-300"></section>
      <section className=" h-screen bg-green-300"></section>
    </main>
  );
}
