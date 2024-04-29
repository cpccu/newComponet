import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import NavItem from "./../../../data/navBar.json";
import NavOpen from "./../../assets/icons/navOpen.svg";
import NavClose from "./../../assets/icons/navClose.svg";
import InstitudeInfo from "./../../../data/institude.json";

export default function NavBar() {
  const navigate = useNavigate();
  const [fixed, setFixed] = useState(false);
  const [open, setOpen] = useState(false);

  const navHandler = () => {
    setOpen((prev) => !prev);
  };

  const goHome = () => {
    goTop();
    return navigate("/");
  };

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const scrollBar = () => {
      if (Math.ceil(window.scrollY) > 180) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    window.addEventListener("scroll", scrollBar);

    return () => {
      window.removeEventListener("scroll", scrollBar);
    };
  }, []);

  return (
    <main
      className={` ${
        fixed && "md:sticky shadow-xl"
      } sticky top-0 md:static transition-all duration-1000 z-50 bg-white flex items-center justify-between padding`}
    >
      {/* logo and name start */}
      <section
        onClick={goHome}
        className="flex items-center justify-center gap-2 py-2 lg:py-4 cursor-default"
      >
        <img
          className="h-12"
          src={InstitudeInfo?.img}
          alt={InstitudeInfo?.alt}
        />
        <div>
          <h1 className="text-xl md:text-2xl text-header font-bold font-custom">
            {InstitudeInfo?.name}
          </h1>
          <p className="text-sm">{InstitudeInfo?.shortName}</p>
        </div>
      </section>
      {/* logo and name end */}

      <section>
        {/* nav link start */}
        <button onClick={navHandler} className="lg:hidden">
          <img className="h-8 md:h-9" src={open ? NavClose : NavOpen} alt="" />
        </button>
        <nav
          className={`${
            open ? "left-0" : "-left-[70%] md:-left-[40%]"
          } fixed top-0 bottom-0 w-[70%] md:w-[40%] border bg-white lg:w-full lg:bg-transparent lg:border-none lg:static trans`}
        >
          <section className="flex py-2 items-center justify-between px-5 md:px-7 lg:py-4 border-b border-gray-600/30 lg:hidden">
            <section className="flex items-center gap-2">
              <img
                className="h-12"
                src={InstitudeInfo?.img}
                alt={InstitudeInfo?.alt}
              />
              <div>
                <h1 className="text-xl md:text-2xl text-header font-bold font-custom">
                  {InstitudeInfo?.name}
                </h1>
                <p className="text-sm">{InstitudeInfo?.shortName}</p>
              </div>
            </section>

            <button onClick={navHandler}>
              <img className="h-6" src={NavClose} alt="close" />
            </button>
          </section>
          {/* nav link */}
          <ul className="flex flex-col lg:flex-row z-50 mt-10 lg:mt-0">
            {NavItem &&
              NavItem.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item?.path}
                    className={({ isActive }) =>
                      ` ${
                        isActive
                          ? "bg-header text-white lg:border-b-4 lg:border-header lg:text-black lg:bg-header/20 lg:hover:bg-header/20"
                          : "hover:text-header trans hover:bg-header/20 lg:hover:bg-transparent"
                      } block px-5 md:px-7 py-2 lg:py-7 cursor-pointer font-semibold`
                    }
                    onClick={goTop}
                  >
                    {item?.page}
                  </NavLink>
                </li>
              ))}
          </ul>
        </nav>
        {/* nav link end */}
      </section>
    </main>
  );
}
