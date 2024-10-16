import React from "react";

const Whoweare = () => {
  return (
    <section className="max-w-[95%] w-full md:pl-[50px] 2xl:pl-[80px] mx-4 relative mt-10 lg:mt-[180px] gap-16 flex flex-col lg:flex-row">
      <div className="lg:w-1/2 w-full flex justify-center">
        <img
          src="/IMG_2857 1.png"
          alt=""
          className="w-full min-w-[400px] h-auto md:w-[700px] md:h-[564px]"
        />
      </div>
      <div className="lg:w-1/2 w-full">
        <h2 className="font-bold text-[28px] md:text-[35px] lg:text-[45px] text-black leading-[36px] md:leading-[46px] lg:leading-[56px] mb-[30px] md:mb-[50px]">
          Who Are We?
        </h2>
        <p className="text-[#8E8E93] text-[18px] md:text-[20px] lg:text-[24px] font-normal leading-[24px] md:leading-[26px] lg:leading-[29px]">
          Born from the vibrant startup ecosystem of Abuja, we recognized the
          need for a consistent, high-quality networking platform where
          founders, innovators, and tech enthusiasts could connect, share ideas,
          and foster collaboration.
        </p>
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-[36px] mt-[40px] md:mt-[70px] mb-[70px] lg:mb-[135px] 2xl:mb-[160px]">
          <button className="w-full md:w-1/2 bg-[#A649FF] text-white px-6 md:px-[70px] py-[12px] md:py-[20px] rounded-[30px] md:rounded-[40px] flex items-center justify-center gap-5 text-[18px] md:text-[24px] font-bold">
            Register <img src="/ArrowRightwhite.png" alt="" />
          </button>
          <button className="w-full md:w-1/2 bg-white text-[#A649FF] border border-[#A649FF] px-6 md:px-[70px] py-[12px] md:py-[20px] rounded-[30px] md:rounded-[40px] flex items-center justify-center gap-5 text-[18px] md:text-[24px] font-bold">
            Donate <img src="/Money Bag.png" alt="" />
          </button>
        </div>
        <p className="text-[16px] lg:text-[17px] 2xl:text-[22px] leading-[20px] md:leading-[25px] 2xl:leading-[29px] font-semibold">
          Founder's Friday is more than just a meetup — it's a movement.
        </p>
      </div>
      <img
        src="/Line 1.png"
        alt="line"
        className="absolute top-[22.76px]  lg:left-[51%] 2xl:left-[51%] hidden md:block"
      />
    </section>
  );
};

export default Whoweare;
