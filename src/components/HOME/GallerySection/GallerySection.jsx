import GalleryCard from "../../Global/GalleryCard/GalleryCard";
import Data from "./../../../../data/home/GallerySection.json";

export default function GallerySection() {
  return (
    <section className="bg-responsibility padding py-14 md:py-20 lg:py-24">
      {/* gallery section start */}
      <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-800 capitalize">
        {Data?.header}
      </h1>
      {/* gallery section end */}
      <div className="font-semibold text-sm md:text-lg flex flex-wrap items-center justify-center gap-3 md:gap-5 lg:gap-7 py-7 md:py-14">
        {Data?.element.map((item, index) => (
          <button
            key={index}
            className={`${
              index == Data?.element.length - 1 && "hidden"
            } shrink-0 md:block px-2 md:px-6 lg:px-8 py-2 bg-header/15 hover:bg-header hover:text-white trans`}
          >
            {item?.btnText}
          </button>
        ))}
      </div>
      <section className="padding">
        <GalleryCard />
      </section>
    </section>
  );
}
