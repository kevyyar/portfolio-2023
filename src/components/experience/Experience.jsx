import { RevealAnimation } from "@components/utils/RevealAnimation.jsx";

export default function Experience() {
  return (
    <section
      id="experience"
      className="container mx-auto px-5 mb-[300px] text-center lg:text-left"
    >
      <RevealAnimation>
        <h2 className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-400 relative inline-block text-5xl text-slate-900 font-main font-extrabold mb-12 md:p-8 md:text-5xl md:mb-8 lg:text-8xl">
          <span className="z-20 relative text-white">Experience</span>
        </h2>
      </RevealAnimation>
      <RevealAnimation>
        <div className="font-main text-slate-600 tracking-wide leading-7 md:container md:mx-auto md:w-[600px] lg:w-[unset]">
          <>
            <div className="md:flex justify-between">
              <div>
                <h4 className="text-3xl text-slate-900 font-bold">Softtek</h4>
                <p className="text-slate-600 md:text-xl">Software Developer</p>
              </div>
              <div>
                <p className="text-slate-600 md:text-xl">2021 - Present</p>
                <p className="text-slate-600 md:text-xl">
                  Guadalajara, Mexico (remote)
                </p>
              </div>
            </div>
            <div className="my-8">
              <p className="text-slate-600 font-light md:text-xl">
                As a web developer with a specialization in front-end
                development, I have gained extensive experience working on
                various projects involving different technologies. My primary
                focus has been on creating engaging and user-friendly interfaces
                for websites and web applications. Throughout my career, I have
                collaborated effectively with teams to ensure the successful
                delivery of client projects and meet stakeholder expectations.
                By leveraging my skills in front-end development, I have
                consistently contributed to creating seamless and visually
                appealing user experiences. One notable accomplishment in my
                career involves successfully working on projects where I helped
                migrate content from one CMS to another. This experience
                showcased my ability to adapt quickly and learn new technologies
                as needed to achieve project goals.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-evenly gap-2 mt-2">
              <p className="bg-slate-600 text-white text-sm rounded-full inline-block py-1 px-4 md:text-xs lg:text-base">
                JavaScript
              </p>
              <p className="bg-slate-600 text-white text-sm rounded-full inline-block py-1 px-4 md:text-xs lg:text-base">
                React
              </p>
              <p className="bg-slate-600 text-white text-sm rounded-full inline-block py-1 px-4 md:text-xs lg:text-base">
                SCSS
              </p>
              <p className="bg-slate-600 text-white text-sm rounded-full inline-block py-1 px-4 md:text-xs lg:text-base">
                Drupal
              </p>
              <p className="bg-slate-600 text-white text-sm rounded-full inline-block py-1 px-4 md:text-xs lg:text-base">
                PHP
              </p>
              <p className="bg-slate-600 text-white text-sm rounded-full inline-block py-1 px-4 md:text-xs lg:text-base">
                Git
              </p>
              <p className="bg-slate-600 text-white text-sm rounded-full inline-block py-1 px-4 md:text-xs lg:text-base">
                Jira/Azure
              </p>
              <p className="bg-slate-600 text-white text-sm rounded-full inline-block py-1 px-4 md:text-xs lg:text-base">
                Scrum/Kanban
              </p>
            </div>
          </>
          <hr className="m-10 h-0.5 bg-slate-900" />
          <>
            <div className="md:flex items-center justify-between">
              <div>
                <h4 className="text-3xl text-slate-900 font-bold">
                  Freelancer
                </h4>
                <p className="text-slate-600 md:text-xl">Web Developer</p>
              </div>
              <div>
                <p className="text-slate-600 md:text-xl">2019 - 2021</p>
                <p className="text-slate-600 md:text-xl">
                  Autlan de Navarro, Mexico
                </p>
              </div>
            </div>
            <div className="my-8">
              <p className="text-slate-600 font-light md:text-xl">
                Motivated by my strong drive for continuous learning and
                personal growth, I ventured into freelancing as a web developer
                to expand my knowledge and skillset. Taking a self-taught route,
                I utilized my expertise to help local businesses build their
                websites, accelerating my learning process and gaining
                invaluable hands-on experience. Through this dynamic combination
                of learning and doing, I not only honed my technical abilities
                but also developed a comprehensive understanding of industry
                best practices. This practical experience became a pivotal
                factor in securing my first job in the web development industry,
                as it showcased my dedication, determination, and ability to
                thrive in a fast-paced and constantly evolving field. Having
                tasted the thrill of acquiring new knowledge and skills, I
                remain incredibly driven and curious to continue my learning
                journey. I strive to stay up-to-date with the latest
                advancements in web development, always seeking out new
                challenges and opportunities to expand my expertise.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-evenly gap-2 mt-2">
              <p className="bg-slate-600 text-white text-sm rounded-full inline-block py-1 px-4 md:text-xs lg:text-base">
                JavaScript
              </p>
              <p className="bg-slate-600 text-white text-sm rounded-full inline-block py-1 px-4 md:text-xs lg:text-base">
                WordPress
              </p>
              <p className="bg-slate-600 text-white text-sm rounded-full inline-block py-1 px-4 md:text-xs lg:text-base">
                TailwindCSS
              </p>
              <p className="bg-slate-600 text-white text-sm rounded-full inline-block py-1 px-4 md:text-xs lg:text-base">
                HTML/CSS
              </p>
            </div>
          </>
          <hr className="m-10 h-0.5 bg-slate-900" />
        </div>
      </RevealAnimation>
    </section>
  );
}
