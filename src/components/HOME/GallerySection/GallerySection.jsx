import GalleryCard from "../../Global/GalleryCard/GalleryCard";
import tabBtn from "../../../../data/home/GallerySection.json";
import { useCallback, useEffect, useState } from "react";

export default function GallerySection() {
  const [Tag, setTag] = useState("all");
  const [Data, setData] = useState(null);

  const filterData = useCallback(() => {
    const url = "../../../../data/GallaryCard.json";
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((res) => {
        // Filter data based on the tag
        const filteredData = res.filter((item) =>
          item.tag.split(" ").includes(Tag)
        );
        // Set the filtered data to state
        setData(filteredData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [Tag]); // Depend on 'tag' to trigger when the tag changes

  useEffect(() => {
    filterData();
  }, [filterData]); // Call filterData when the component mounts or when filterData changes

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
              item?.tag.toLowerCase() == Tag.toLowerCase()
                ? "bg-header text-white"
                : "bg-header/15"
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
