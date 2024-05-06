import GalleryCard from "./../Global/GalleryCard/GalleryCard";
import UpComingEventCard from "./../HOME/eventUpcoming/UpComingEventCard";

export default function NoticeSection() {
  return (
    <main className="padding">
      <section className="bg-header text-white">
        <UpComingEventCard />
      </section>
    </main>
  );
}
