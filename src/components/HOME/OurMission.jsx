import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OurMissionScroll from "../../Context/OurMessionScroll/OurMessionScroll";
import Data from "./../../../data/home/OurMission.json";

export default function OurMission() {
  const { setTarget } = useContext(OurMissionScroll);
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");
  };

  useEffect(() => {
    setTarget("ourMission");
  }, []);

  return (
    <section
      id="ourMission"
      class="relative lg:h-screen flex items-center justify-end px-[0.2em] lg:px-[2.9em] xl:px-[7em]"
    >
      <main
        class=" px-3 py-5 md:px-10 md:py-12 bg-header/10 ring-header/35 flex flex-col  items-start justify-center gap-10 ring-1 
      my-2 mx-1  md:mx-4  cursor-default lg:ring-8 lg:pl-[30%] lg:w-[85%]"
      >
        <h1 class="text-gray-800 font-bold text-4xl md:text-4xl lg:text-5xl capitalize">
          {Data?.header}
        </h1>
        <img
          class="h-full w-full object-cover lg:absolute lg:left-0 lg:w-[42%] lg:h-[25em]"
          src={Data?.img}
          alt={Data?.alt}
        />
        <section class="flex flex-col gap-4">
          <p class="text-gray-800">{Data?.context1}</p>
          <p class="text-gray-800">{Data?.context2}</p>
        </section>
        <button
          onClick={goToAbout}
          class=" px-5 py-3 bg-header hover:bg-gray-900 text-white font-bold uppercase transition"
        >
          {Data?.btntext}
        </button>
      </main>
    </section>
  );
}
