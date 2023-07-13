import { Quoute } from "@components/quote/Quote";
import { RiArrowRightUpLine } from "react-icons/ri";
import { RevealAnimation } from "../utils/RevealAnimation";

export default function Hero() {
  return (
    <>
      <main
        id="home"
        className="container mx-auto px-5 lg:grid lg:grid-cols-2 lg:gap-8 lg:mb-[200px]"
      >
        <section className="container mx-auto lg:mr-24">
          <RevealAnimation>
            <h1 className="text-center text-7xl text-slate-900 font-main font-extrabold mb-12 md:text-7xl md:mb-8 lg:text-8xl">
              Hi! I Am{" "}
              <span className="hidden md:inline-block md:text-sm md:align-middle md:bg-blue-500 md:rounded-3xl md:p-3 md:text-white lg:text-2xl lg:p-4">
                FE Developer
              </span>
              <br />
              <span className="text-red-400">
                Kevin Barreto <span className="text-5xl lg:hidden">🚀</span>
              </span>
            </h1>
          </RevealAnimation>
          <RevealAnimation>
            <p className="font-main font-light text-center text-xl text-slate-600 tracking-wide leading-7 whitespace-normal mb-12 md:text-xl md:mb-8">
              As a dedicated web developer, I am skilled in delivering
              exceptional user experiences and driving digital innovation. With
              a results-oriented approach and a passion for staying current with
              emerging technologies, I strive to exceed expectations in every
              project. Let's connect and explore how my skills and enthusiasm
              can positively impact your team and contribute to the success of
              your projects.
            </p>
          </RevealAnimation>
          <RevealAnimation>
            <div className="font-main flex justify-evenly center items-center mb-20 md:mb-20">
              <button className="bg-red-400 py-3 px-6 text-white font-bold border-2 border-transparent hover:border-2 hover:border-red-600 transition duration-300 hover:ease-in rounded md:text-base lg:text-xl">
                Hire Me
              </button>
              <button className="py-3 px-6 text-slate-900 font-bold text-base rounded-xl flex items-center gap-2 md:text-base lg:text-xl">
                Projects <RiArrowRightUpLine size={30} color="rgb(15 23 42)" />
              </button>
            </div>
            <Quoute />
          </RevealAnimation>
        </section>
        <RevealAnimation>
          <section className="hidden lg:block lg:h-full lg:object-cover lg:rounded-xl">
            <img src="/assets/me.jpg" alt="Me!" />
          </section>
        </RevealAnimation>
      </main>
    </>
  );
}
