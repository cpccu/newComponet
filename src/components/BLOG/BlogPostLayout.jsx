import React, { useContext, useEffect, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import BlogMainCard from "./BlogMainCard";
import BlogScroll from "../../Context/BlogScroll/BlogScroll";
import FilterBtn from "./../../../data/blog/blogFilter.json";
import res from "./../../../data/BlogPost.json";

export default function BlogPostLayout() {
  const { setBlogTarget } = useContext(BlogScroll);
  const [Tag, setTag] = useState("all");
  const [Data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const filterData = useCallback(() => {
    const filteredData = res.filter((item) =>
      item.tag.split(" ").includes(Tag)
    );
    setData(filteredData);
  }, [Tag]);

  useEffect(() => {
    filterData();
  }, [filterData, Tag]);

  useEffect(() => {
    setBlogTarget("blogMainLayout");
  }, [setBlogTarget]);

  const pageItem = 9;
  const pageNmber = Math.ceil(Data.length / pageItem);
  const rows = Data.slice(currentPage * pageItem, (currentPage + 1) * pageItem);

  // Calculate page numbers for pagination
  let pageIndex = [];
  if (pageNmber <= 4) {
    pageIndex = Array.from({ length: pageNmber }, (_, idx) => idx + 1);
  } else if (currentPage < 2) {
    pageIndex = [1, 2, 3, pageNmber];
  } else if (currentPage >= pageNmber - 2) {
    pageIndex = [1, pageNmber - 2, pageNmber - 1, pageNmber];
  } else {
    pageIndex = [1, currentPage + 1, currentPage + 2, pageNmber];
  }

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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

      {/* card start */}
      <main className="py-5 md:py-10 px-[.5em] md:px-[1.5em] lg:px-[2.9em] xl:px-[7em] grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-7">
        {rows.map((item, index) => (
          <BlogMainCard key={index} Data={item} />
        ))}
      </main>
      {/* card end */}

      {/* start pagination  */}
      <section className="flex items-center justify-center gap-5 py-8 md:py-10">
        <button
          onClick={() => handlePaginationClick(Math.max(0, currentPage - 1))}
          disabled={currentPage === 0}
        >
          <FontAwesomeIcon
            className={`${currentPage < 1 && "text-gray-400"}`}
            icon={faChevronLeft}
          />
        </button>
        {pageIndex.map((pageNumber, index) => (
          <button
            key={index}
            onClick={() => handlePaginationClick(pageNumber - 1)}
            className={`${
              pageNumber - 1 === currentPage
                ? "bg-header text-white"
                : "bg-header/20 font-semibold"
            } px-5 py-2 border `}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={() =>
            handlePaginationClick(Math.min(pageNmber - 1, currentPage + 1))
          }
          disabled={currentPage === pageNmber - 1}
        >
          <FontAwesomeIcon
            className={`${
              currentPage > pageNmber - 2 && "text-gray-400"
            } transform rotate-180`}
            icon={faChevronLeft}
          />
        </button>
      </section>
      {/* end pagination */}
    </section>
  );
}
