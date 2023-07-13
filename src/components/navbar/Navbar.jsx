import { useState } from "react";
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-scroll";
import { animated, useSpring } from "react-spring";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenuToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  const menuAnimation = useSpring({
    transform: toggleMenu ? "translateX(0%)" : "translateX(100%)",
  });

  return (
    <>
      <nav className="container mx-auto mb-12 flex justify-between items-center p-8 relative md:mb-8">
        <Link
          to="/"
          className="font-main text-4xl font-extrabold text-slate-900"
        >
          KevTheDev<span className="text-red-600 ">.</span>
        </Link>
        <div className="hidden md:block">
          <ul className="flex font-main gap-10 text-slate-900 md:text-base lg:text-2xl">
            <li>
              <Link
                activeClass="active"
                to="home"
                spy
                smooth
                duration={500}
                offset={-145}
                className="hover:cursor-pointer hover:text-slate-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy
                smooth
                duration={500}
                offset={-145}
                className="hover:cursor-pointer hover:text-slate-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="experience"
                spy
                smooth
                duration={500}
                offset={-145}
                className="hover:cursor-pointer hover:text-slate-700"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy
                smooth
                duration={500}
                offset={-145}
                className="hover:cursor-pointer hover:text-slate-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <button className="hidden transition duration-300 hover:ease-in md:block md:font-main md:text-slate-900 md:text-base md:border-2 md:border-red-600 md:py-3 md:px-6 hover:bg-red-400 md:hover:text-white md:transition-all lg:text-2xl">
          Let's Chat
        </button>
        <RiMenu3Fill
          onClick={handleMenuToggle}
          size={36}
          className="md:hidden hover:cursor-pointer"
        />
      </nav>
      {/* Mobile Menu */}
      {toggleMenu && (
        <animated.div
          className="p-3 bg-red-400 absolute z-50 right-0 bottom-0 h-full w-64 md:hidden"
          style={menuAnimation}
        >
          <div className="flex justify-end">
            <RiCloseFill
              onClick={handleMenuToggle}
              size={36}
              className="hover:cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-2 font-main text-2xl p-6">
            <Link
              className="text-white font-bold tracking-wider"
              onClick={handleMenuToggle}
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-white font-bold tracking-wider"
              onClick={handleMenuToggle}
              to="/about"
            >
              About
            </Link>
            <Link
              className="text-white font-bold tracking-wider"
              onClick={handleMenuToggle}
              to="/projects"
            >
              Projects
            </Link>
            <Link
              className="text-white font-bold tracking-wider"
              onClick={handleMenuToggle}
              to="/contact"
            >
              Contact
            </Link>
          </div>
        </animated.div>
      )}
    </>
  );
}
