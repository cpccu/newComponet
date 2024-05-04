import useIMG from "./../../../assets/icons/user.svg";
import pictureIMG from "./../../../assets/icons/picture.svg";
import eventIMG from "./../../../assets/icons/event.svg";
import medalIMG from "./../../../assets/icons/medal.svg";
import Data from "./../../../../data/Count.json";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { useState } from "react";

export default function Count() {
  const [countState, setCountState] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => {
        setCountState(true);
      }}
      onExit={() => {
        setCountState(false);
      }}
    >
      <main className="bg-count text-white grid items-center md:justify-between  md:grid-cols-2 lg:grid-cols-4 md:gap-x-5 gap-y-14 md:gap-y-14 lg:gap-5 py-12 md:py-14 lg:py-20 padding">
        {/* users section start */}
        <section className="flex items-center justify-center gap-x-12 md:gap-5">
          <img className="h-12 md:h-14" src={useIMG} alt="user" />
          <div className="flex flex-col items-start justify-center">
            <h3 className="text-3xl md:text-4xl font-custom font-thin text-white/90">
              <CountUp
                start={0}
                end={Data?.member}
                duration={0.51}
                formattingFn={(value) => {
                  if (value >= 1000) {
                    return Math.floor(value / 1000) + "K+";
                  }
                  return value;
                }}
              />
            </h3>
            <p className="text-xl">Members</p>
          </div>
        </section>
        {/* users section end */}

        {/* picture section start */}
        <section className="flex items-center justify-center gap-x-12 md:gap-5">
          <img className="h-12 md:h-14" src={pictureIMG} alt="picture" />
          <div className="flex flex-col items-start justify-center">
            <h3 className="text-3xl md:text-4xl font-custom font-thin text-white/90">
              <CountUp
                start={0}
                end={Data?.photo}
                duration={1.5}
                formattingFn={(value) => {
                  if (value >= 1000) {
                    return Math.floor(value / 1000) + "K+";
                  }
                  return value;
                }}
              />
            </h3>
            <p className="text-xl">Photos</p>
          </div>
        </section>
        {/* picture section end */}

        {/* event section start */}
        <section className="flex items-center justify-center gap-x-12 md:gap-5">
          <img className="h-12 md:h-14" src={eventIMG} alt="event" />
          <div className="flex flex-col items-start justify-center">
            <h3 className="text-3xl md:text-4xl font-custom font-thin text-white/90">
              <CountUp
                start={0}
                end={Data?.event}
                duration={1.5}
                formattingFn={(value) => {
                  if (value >= 1000) {
                    return Math.floor(value / 1000) + "K+";
                  }
                  return value;
                }}
              />
            </h3>
            <p className="text-xl">Events</p>
          </div>
        </section>
        {/* event section end */}

        {/* medal section start */}
        <section className="flex items-center justify-center gap-x-12 md:gap-5">
          <img className="h-12 md:h-14" src={medalIMG} alt="medal" />
          <div className="flex flex-col items-start justify-center">
            <h3 className="text-3xl md:text-4xl font-custom font-thin text-white/90">
              <CountUp
                start={0}
                end={Data?.award}
                duration={1.5}
                formattingFn={(value) => {
                  if (value >= 1000) {
                    return Math.floor(value / 1000) + "K+";
                  }
                  return value;
                }}
              />
            </h3>
            <p className="text-xl">Awards</p>
          </div>
        </section>
        {/* medal section end */}
      </main>
    </ScrollTrigger>
  );
}
