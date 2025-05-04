import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export const TiltChipLinkExample = () => {
  return <TiltChipLink />;
};

const TiltChipLink = () => {
  return (
    <div className="mb-1.5 w-fit rounded-full bg-zinc-600">
      <a
        href="https://www.linkedin.com/in/fudailzafar"
        rel="nofollow"
        className="flex origin-top-left items-center rounded-full border border-zinc-900 bg-white p-0.5 text-sm transition-transform hover:-rotate-2"
      >
        <span className="rounded-full bg-[#FF6154] px-2 py-0.5 font-medium text-white">
          NEW!
        </span>
        <span className="ml-1.5 mr-1 inline-block text-black font-normal">
          Introducing CalEasy 🎊
        </span>
        <FiArrowUpRight className="mr-2 inline-block text-black" />
      </a>
    </div>
  );
};
