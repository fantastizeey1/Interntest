import React from "react";

const FounddersFriday = () => {
  return (
    <section className="max-w-[95%] w-full md:px-[80px] mx-4 relative mt-20 lg:mt-[180px] gap-10 flex flex-col lg:flex-row justify-between">
      <div className="w-full lg:w-1/2 flex flex-col items-start">
        <h3 className="text-[#5c00b3] text-[24px] md:text-[30px] leading-[28px] md:leading-[38px] font-bold mb-2">
          Founders Friday
        </h3>
        <h2 className="text-[32px] md:text-[45px] lg:text-[55px] leading-[40px] md:leading-[56px] lg:leading-[69px] font-bold mb-[25px] md:mb-[45px]">
          What Happens At Founders Friday
        </h2>
        <p className="text-[16px] md:text-[20px] lg:text-[24px] leading-[22px] md:leading-[26px] lg:leading-[29px] font-normal text-[#4C4452] mb-[30px] md:mb-[45px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
          rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
          dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
          suscipit id. Maecenas ut ante quis quam lobortis consequat eu id
          turpis. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas.
        </p>
        <button className="w-full md:w-1/2 bg-[#A649FF] text-white px-6 md:px-[70px] py-[12px] md:py-[20px] rounded-[30px] md:rounded-[40px] flex items-center justify-center gap-5 text-[16px] md:text-[18px] lg:text-[24px] font-bold">
          Learn more
          <img src="/ArrowRightwhite.png" alt="" />
        </button>
      </div>
      <div className="w-2/5 lg:w-1/2 flex justify-center mx-auto md:mx-0 md:justify-end mt-8 lg:-mt-[30px] ">
        <img
          src="/Frame 714.png"
          alt=""
          className=" max-w-[400px] lg:max-w-[533px] h-[678px]"
        />
      </div>
      <img
        src="/Vector 3.png"
        alt="vector"
        className="absolute hidden lg:block md:-top-[380px] lg:-top-[480px] right-0 -z-10"
      />
    </section>
  );
};

export default FounddersFriday;
