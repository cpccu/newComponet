import UpComingEventCard from "./../HOME/eventUpcoming/UpComingEventCard";
import Data from "./../../../data/upcomingEvent.json";

export default function NoticeSection() {
  return (
    <main className="bg-responsibility padding py-12">
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
