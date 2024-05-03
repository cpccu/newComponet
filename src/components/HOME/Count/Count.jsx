import useIMG from "./../../../assets/icons/user.svg";
import pictureIMG from "./../../../assets/icons/picture.svg";
import eventIMG from "./../../../assets/icons/event.svg";
import medalIMG from "./../../../assets/icons/medal.svg";
import Data from "./../../../../data/Count.json";

export default function Count() {
  return (
    <main className="bg-count text-white grid  md:grid-cols-2 lg:grid-cols-4 md:gap-x-5 gap-y-14 md:gap-y-14 lg:gap-5 py-12 md:py-14 lg:py-20 padding">
      {/* users section start */}
      <section className="flex items-center justify-center gap-5">
        <img className="h-16" src={useIMG} alt="user" />
        <div className="flex flex-col items-start justify-center">
          <h3 className="text-5xl font-custom font-thin text-white/90">
            {Data?.member / 1000 > 1
              ? Math.floor(Data?.member / 1000) + "K+"
              : Data.member}
          </h3>
          <p className="text-xl">Members</p>
        </div>
      </section>
      {/* users section end */}

      {/* picture section start */}
      <section className="flex items-center justify-center gap-5">
        <img className="h-16" src={pictureIMG} alt="picture" />
        <div className="flex flex-col items-start justify-center">
          <h3 className="text-5xl font-custom font-thin text-white/90">
            {Data?.photo / 1000 > 1
              ? Math.floor(Data?.photo / 1000) + "K+"
              : Data.photo}
          </h3>
          <p className="text-xl">Photos</p>
        </div>
      </section>
      {/* picture section end */}

      {/* event section start */}
      <section className="flex items-center justify-center gap-5">
        <img className="h-16" src={eventIMG} alt="event" />
        <div className="flex flex-col items-start justify-center">
          <h3 className="text-5xl font-custom font-thin text-white/90">
            {Data?.event / 1000 > 1
              ? Math.floor(Data?.event / 1000) + "K+"
              : Data.event}
          </h3>
          <p className="text-xl">Events</p>
        </div>
      </section>
      {/* event section end */}

      {/* medal section start */}
      <section className="flex items-center justify-center gap-5">
        <img className="h-16" src={medalIMG} alt="medal" />
        <div className="flex flex-col items-start justify-center">
          <h3 className="text-5xl font-custom font-thin text-white/90">
            {Data?.award / 1000 > 1
              ? Math.floor(Data?.award / 1000) + "K+"
              : Data.award}
          </h3>
          <p className="text-xl">Awards</p>
        </div>
      </section>
      {/* medal section end */}
    </main>
  );
}
