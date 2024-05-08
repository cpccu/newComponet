import React, { useContext, useEffect, useState, useCallback } from "react";
import BlogMainCard from "./BlogMainCard";
import BlogScroll from "../../Context/BlogScroll/BlogScroll";
import FilterBtn from "./../../../data/blog/blogFilter.json";
import res from "./../../../data/BlogPost.json";

export default function BlogPostLayout() {
  const { setBlogTarget } = useContext(BlogScroll);

  const [Tag, setTag] = useState("all");
  const [Data, setData] = useState([]);

  const filterData = useCallback(() => {
    const filteredData = res.filter((item) =>
      item.tag.split(" ").includes(Tag)
    );
    setData(filteredData);
  }, [Tag]);

  useEffect(() => {
    filterData();
  }, [filterData]); // Call filterData when the component mounts or when filterData changes

  useEffect(() => {
    setBlogTarget("blogMainLayout");
  }, [setBlogTarget]);

  return (
    <section id="blogMainLayout" className="bg-responsibility py-7 md:py-12">
      {/* filter data start */}
      <div className="font-semibold text-sm md:text-lg flex flex-wrap items-center justify-center gap-3 md:gap-5 lg:gap-7 py-7 md:py-14">
        {FilterBtn.map((item, index) => (
          <button
            onClick={() => setTag(item?.tag)}
            key={index}
            className={`
            ${
              item?.tag.toLowerCase() === Tag.toLowerCase()
                ? "bg-header text-white"
                : "bg-header/15"
            } shrink-0 md:block px-2 md:px-6 lg:px-8 py-2  hover:bg-header hover:text-white trans capitalize`}
          >
            {item.btnText}
          </button>
        ))}
      </div>
      {/* filter data end */}
      <main className="py-5 md:py-10 px-[.5em] md:px-[1.5em] lg:px-[2.9em] xl:px-[7em] grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-7">
        {Data &&
          Data.map((item, index) => <BlogMainCard key={index} Data={item} />)}
      </main>
    </section>
  );
}
