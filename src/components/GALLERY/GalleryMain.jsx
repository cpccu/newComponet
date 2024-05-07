import { useContext, useEffect } from "react";
import Data from "./../../../data/GallaryCard.json";
import GalleryCard from "./../Global/GalleryCard";
import GalleryScroll from "../../Context/GalleryScroll/GalleryScroll";

export default function GalleryMain() {
  const { setScrollTarget } = useContext(GalleryScroll);

  useEffect(() => {
    setScrollTarget("gallery");
  });

  return (
    <main id="gallery" className="lg:py-32 padding">
      <section>
        <GalleryCard Data={Data} />
      </section>
    </main>
  );
}
