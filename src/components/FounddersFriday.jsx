import React from "react";

const FounddersFriday = () => {
  return (
    <section className="max-w-[95%] w-full md:px-[80px] mx-4 relative mt-10 lg:mt-[180px] gap-10 flex flex-col justify-between lg:flex-row">
      <div className="flex flex-col items-start w-1/2">
        <h3 className="text-[#5c00b3] text-[30px] leading-[38px] font-bold mb-2">
          Founders Friday
        </h3>
        <h2 className="text-[55px] leading-[69px] font-bold mb-[45px]">
          {" "}
          What Happens At Founders Friday
        </h2>
        <p className=" W-1/2 text-[24px] leading-[29px] font-normal text-[#4C4452] mb-[45px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
          rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
          dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
          suscipit id. Maecenas ut ante quis quam lobortis consequat eu id
          turpis. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas.
        </p>
        <button className="w-full md:w-1/2 bg-[#A649FF] text-white px-6 md:px-[70px] py-[12px] md:py-[20px] rounded-[30px] md:rounded-[40px] flex items-center justify-center gap-5 text-[18px] md:text-[24px] font-bold">
          Learn more
          <img src="/ArrowRightwhite.png" alt="" />
        </button>
      </div>
      <div>
        <img src="/Frame 714.png" alt="" />
      </div>
      <img
        src="/Vector 3.png"
        alt="vector"
        className="absolute -top-[480px] right-[1px] -z-10"
      />
    </section>
  );
};

export default FounddersFriday;
