import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import BlogMainCard from "./BlogMainCard";
import BlogScroll from "../../Context/BlogScroll/BlogScroll";
import FilterBtn from "./../../../data/blog/blogFilter.json";
import res from "./../../../data/BlogPost.json";

export default function BlogPostLayout() {
  const { setBlogTarget } = useContext(BlogScroll);
  const [tag, setTag] = useState("all");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [rows, setRows] = useState([]);

  const filterData = useCallback(() => {
    const filteredData = res.filter((item) =>
      item.tag.split(" ").includes(tag.toLowerCase())
    );
    setData(filteredData);
  }, [tag]);

  useEffect(() => {
    filterData();
  }, [filterData, tag]);

  useEffect(() => {
    setBlogTarget("blogMainLayout");
  }, [setBlogTarget]);

  const pageItem = 9;
  const pageNumber = useMemo(() => {
    return Math.ceil(data.length / pageItem);
  }, [data, pageItem]);

  useEffect(() => {
    const startIdx = currentPage * pageItem;
    const endIdx = startIdx + pageItem;
    const rows = data.slice(startIdx, endIdx);
    setRows(rows);
  }, [data, currentPage, pageItem]);

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  let pageIndex = [];
  if (pageNumber <= 4) {
    pageIndex = Array.from({ length: pageNumber }, (_, idx) => idx + 1);
  } else if (currentPage < 2) {
    pageIndex = [1, 2, 3, pageNumber];
  } else if (currentPage >= pageNumber - 2) {
    pageIndex = [1, pageNumber - 2, pageNumber - 1, pageNumber];
  } else {
    pageIndex = [1, currentPage + 1, currentPage + 2, pageNumber];
  }

  return (
    <section id="blogMainLayout" className="bg-responsibility py-7 md:py-12">
      <div className="font-semibold text-sm md:text-lg flex flex-wrap items-center justify-center gap-3 md:gap-5 lg:gap-7 py-7 md:py-14">
        {FilterBtn.map((item, index) => (
          <button
            onClick={() => setTag(item?.tag)}
            key={index}
            className={`
            ${
              item?.tag.toLowerCase() === tag.toLowerCase()
                ? "bg-header text-white"
                : "bg-header/15"
            } shrink-0 md:block px-2 md:px-6 lg:px-8 py-2  hover:bg-header hover:text-white trans capitalize`}
          >
            {item.btnText}
          </button>
        ))}
      </div>

      <main className="py-5 md:py-10 px-[.5em] md:px-[1.5em] lg:px-[2.9em] xl:px-[7em] grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-7">
        {rows.map((item, index) => (
          <BlogMainCard key={index} Data={item} />
        ))}
      </main>

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
            handlePaginationClick(Math.min(pageNumber - 1, currentPage + 1))
          }
          disabled={currentPage === pageNumber - 1}
        >
          <FontAwesomeIcon
            className={`${
              currentPage > pageNumber - 2 && "text-gray-400"
            } transform rotate-180`}
            icon={faChevronLeft}
          />
        </button>
      </section>
    </section>
  );
}
