import React from "react";

const Vid = () => {
  return (
    <section className="max-w-[95%] w-full px-4 md:px-[80px] mx-auto mt-10 lg:mt-[180px] gap-10 flex flex-col lg:flex-row justify-between items-center">
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="/Frame 26.png"
          alt="vid"
          className="w-full max-w-[400px] lg:max-w-[795px] md:h-[564px]"
        />
      </div>
      <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
        <h2 className="text-[20px] sm:text-[24px] leading-[28px] font-semibold text-black">
          At Founder&apos;s Friday, Every Friday Is a Learning Experience!
        </h2>
        <h3 className="text-[16px] sm:text-[18px] leading-[20px] sm:leading-[22px] font-semibold text-black py-6 sm:py-[43px]">
          Join us in our mission to transform ideas into impact and shape the
          future of Nigeria&apos;s startup landscape.
        </h3>
        <button className="w-full sm:w-3/4 md:w-1/2 bg-[#A649FF] text-white px-4 sm:px-[50px] py-3 md:py-[20px] rounded-[30px] md:rounded-[40px] flex items-center justify-center gap-5 text-[16px] sm:text-[18px] md:text-[24px] font-bold">
          Register
          <img src="/ArrowRightwhite.png" alt="Arrow" />
        </button>
      </div>
    </section>
  );
};

export default Vid;
