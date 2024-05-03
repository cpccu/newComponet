import React from "react";
import cn from "./../../../../lib/cn.js";

const UpComingEventCard = ({ data, clName }) => {
  return (
    <main
      className={cn(
        "grid lg:grid-cols-7 gap-7 lg:gap-5 cursor-default",
        clName
      )}
    >
      <section className="lg:col-span-3 lg:h-full">
        <div className="h-[82%]">
          <img
            className="h-full w-full object-cover"
            src={data?.img}
            alt={data?.alt}
          />
        </div>
        <div className="h-[14%] bg-white text-gray-600 text-2xl font-bold flex items-center justify-center">
          It's
        </div>
        <div className="h-[4%] bg-black/50"></div>
      </section>
      <section className="h-full lg:col-span-4 flex flex-col items-start gap-4">
        <TimeBox />
        <h1 className="text-2xl font-semibold">{data?.headLine}</h1>
        <p className="font-[450]">{data?.textContext}</p>

        <button
          className="bg-black/30 text-white font-bold uppercase px-5 py-2 
        hover:text-gray-600 hover:bg-white border-[3px] border-white trans"
        >
          {data?.btnText}
        </button>
      </section>
    </main>
  );
};

export default UpComingEventCard;

function TimeBox() {
  return (
    <main className="flex gap-5">
      <section className="flex flex-col items-center font-bold gap-1">
        <div>Days</div>
        <div className="border text-center px-3 py-1 font-bold text-xl bg-black/70 trans">
          01
        </div>
      </section>

      <section className="flex flex-col items-center font-bold gap-1">
        <div>Hr</div>
        <div className="border text-center px-3 py-1 font-bold text-xl bg-black/70">
          00
        </div>
      </section>

      <section className="flex flex-col items-center font-bold gap-1">
        <div>Min</div>
        <div className="border text-center px-3 py-1 font-bold text-xl bg-black/70">
          00
        </div>
      </section>

      <section className="flex flex-col items-center font-bold gap-1">
        <div>Sec</div>
        <div className="border text-center px-3 py-1 font-bold text-xl bg-black/70">
          00
        </div>
      </section>

      <p className="self-end font-bold text-xl hidden lg:block">Remaining</p>
    </main>
  );
}
