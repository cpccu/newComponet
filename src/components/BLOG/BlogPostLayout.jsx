import { useContext, useEffect } from "react";
import Data from "./../../../data/GallaryCard.json";
import BlogMainCard from "./BlogMainCard";
import BlogScroll from "../../Context/BlogScroll/BlogScroll";
import FilterBtn from "./../../../data/blog/blogFilter.json";

export default function BlogPostLayout() {
  const { setBlogTarget } = useContext(BlogScroll);

  useEffect(() => {
    setBlogTarget("blogMainLayout");
  }, []);

  return (
    <section id="blogMainLayout" className="bg-responsibility py-12">
      <div className="font-semibold text-sm md:text-lg flex flex-wrap items-center justify-center gap-3 md:gap-5 lg:gap-7 py-7 md:py-14">
        {FilterBtn.map((item, index) => (
          <button
            key={index}
            className={`bg-header text-white shrink-0 md:block px-2 md:px-6 lg:px-8 py-2  hover:bg-header hover:text-white trans capitalize`}
          >
            {item.btnText}
          </button>
        ))}
      </div>
      <main className="py-10 px-[.5em] md:px-[1.5em] lg:px-[2.9em] xl:px-[7em] grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-7">
        {Data.map((item, index) => (
          <BlogMainCard Data={item} />
        ))}
      </main>
    </section>
  );
}
