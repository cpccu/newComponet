import UpComingEventCard from "../Global/UpComingEventCard";
import Data from "./../../../data/upcomingEvent.json";

export default function NoticeSection() {
  return (
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
  );
}
