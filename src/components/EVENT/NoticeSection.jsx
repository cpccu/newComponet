import UpComingEventCard from "./../HOME/eventUpcoming/UpComingEventCard";
import Data from "./../../../data/upcomingEvent.json";

export default function NoticeSection() {
  return (
    <>
      <header
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="bg-red-900 padding flex flex-col items-center justify-center py-20 md:py-24 lg:py-28 gap-4 text-white"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold shrink-0 capitalize">
          Event Header
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
          totam.
        </p>

        <button className="py-3 px-12 font-bold uppercase bg-header hover:bg-white hover:text-gray-700 trans mt-5">
          Let's See
        </button>
      </header>
      <main className="bg-responsibility py-12 px-[.5em] md:px-[1.5em] lg:px-[2.9em] xl:px-[7em]">
        {Data.map((item, index) => (
          <section
            key={index}
            className="bg-header text-white p-5 md:p-8 lg:p-12 my-5 md:my-8 lg:my-12"
          >
            <UpComingEventCard data={item} />
          </section>
        ))}
      </main>
    </>
  );
}
