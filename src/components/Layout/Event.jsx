import NoticeSection from "../EVENT/NoticeSection";
import EventScrollProvider from "../../Context/EventScroll/EventScrollProvider";

export default function Event() {
  return (
    <EventScrollProvider>
      <NoticeSection />
    </EventScrollProvider>
  );
}
