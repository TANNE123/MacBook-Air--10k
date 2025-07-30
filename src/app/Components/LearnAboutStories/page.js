"use client";

import Image from "next/image";
import ButtonCompoent from "../Button/page";

const SuccessStories = () => {
  return (
    <div className="relative w-full py-12 text-white">
      <Image
        src="/layerTwo/layerFourthgb.svg"
        alt="Background"
        layout="fill"
        className="absolute inset-0 object-cover z-[-1]"
        priority
      />

      <div className="flex flex-col md:flex-col sm:flex-col lg:flex-row 2xl:flex-row items-center justify-between gap-10 lg:gap-0 min-w-0">
        <div className="w-full lg:w-[400px] flex-shrink-0">
          <div className="w-[300px] lg:w-[400px] self-center">
            <Image
              src="/layerTwo/Student-group.svg"
              alt="Group of people"
              width={400}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="text-center lg:text-left flex-1 min-w-0 px-4 sm:px-8 lg:px-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug text-center">
            Learn more about the success stories of our professionals
          </h2>
          <p className="text-sm sm:text-base text-gray-200 mt-3 text-center">
            Impact of our platform through the achievements of our learners
          </p>
          <div className="mt-6 flex flex-col sm:flex-row md:flex-row lg:flex-row gap-4 justify-center">
            <ButtonCompoent
              text="Start Hiring"
              style="text-white font-semibold px-6 py-2 gradient-backeground-color"
            />
            <ButtonCompoent
              text=" Read success stories →"
              style="font-semibold px-6 py-2 gradient-border"
            />
          </div>
        </div>

        <div className="w-full lg:w-[400px] flex-shrink-0 flex justify-end">
          <div className="w-[300px] lg:w-[400px] self-center">
            <Image
              src="/layerTwo/company group.svg"
              alt="Company logos"
              width={400}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
