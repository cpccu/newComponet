import { useContext } from "react";
import { Link } from "react-scroll";

import EventScroll from "../../Context/EventScroll/EventScroll";

export default function EventHeader() {
  const { scrollTarget } = useContext(EventScroll);

  return (
    <header
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url("https://i.ibb.co/gSVbzcZ/event-BGimg.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="bg-red-900 padding flex flex-col items-center justify-center py-20 md:py-24 lg:py-28 gap-4 text-white"
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold shrink-0 capitalize">
        Event Header
      </h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, totam.
      </p>

      <Link
        to={scrollTarget}
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        animate={{ duration: 500, easing: "easeInOutCubic" }}
      >
        <button className="py-3 px-12 font-bold uppercase bg-header hover:bg-white hover:text-gray-700 trans mt-5">
          Let's see
        </button>{" "}
        {/* target to scroll */}
      </Link>
    </header>
  );
}