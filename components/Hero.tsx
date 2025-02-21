import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36" id="home">
      {/* the opening div for the whole Hero section */}
      <div>
        {/* this div contains the spotlight feature on the hero section */}
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* this div is for the importing the grid component for the hero section, producing the background lines */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hello! This is Nanda Kumar Balaji, an UnderGraduate in NIT Trichy!
          </p>
          {/* below is for the magic button */}
          <a href="#about">
            {/* aceternity component imported for the show my works tab, will direct to about section */}
            <MagicButton
              title="Show my works"
              icon={<FaLocationArrow />}
              // instead of using a png/jpg we used the react-icons package which is much better way for uploading the icons
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
