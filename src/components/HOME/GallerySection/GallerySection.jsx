import GalleryCard from "../../Global/GalleryCard/GalleryCard";
import tabBtn from "../../../../data/home/GallerySection.json";
import Data from "../../../../data/GallaryCard.json";
import { useEffect, useState } from "react";

export default function GallerySection() {
  const [Tag, setTag] = useState("all");

  return (
    <section className="bg-responsibility padding py-14 md:py-20 lg:py-24">
      {/* Gallery section header */}
      <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-800 capitalize">
        {tabBtn?.header}
      </h1>

      {/* Filter buttons */}
      <div className="font-semibold text-sm md:text-lg flex flex-wrap items-center justify-center gap-3 md:gap-5 lg:gap-7 py-7 md:py-14">
        {tabBtn?.element.map((item, index) => (
          <button
            onClick={() => setTag(item?.tag)}
            key={index}
            className={`${index === tabBtn.element.length - 1 ? "hidden" : ""}
            ${
              item?.tag == Tag ? "bg-header text-white" : "bg-header/15"
            } shrink-0 md:block px-2 md:px-6 lg:px-8 py-2  hover:bg-header hover:text-white trans`}
          >
            {item.btnText}
          </button>
        ))}
      </div>

      {/* Gallery cards */}
      <GalleryCard Data={Data} />
    </section>
  );
}
