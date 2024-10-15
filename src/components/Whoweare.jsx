import React from "react";

const Whoweare = () => {
  return (
    <section className="max-w-[95%]  w-full md:px-[80px] mx-4 relative mt-10 lg:mt-[180px] gap-10 flex flex-row">
      <div className="w-1/2">
        <img
          src="/IMG_2857 1.png"
          alt=""
          className="md:w-[700px] md:h-[564px]"
        />
      </div>
      <div className="w-1/2">
        <h2 className="font-bold text-[45px] text-black leading-[56px] mb-[50px]">
          Who Are We?
        </h2>
        <p className="text-[#8E8E93] text-[24px] font-normal leading-[29px]">
          Born from the vibrant startup ecosystem of Abuja, we recognized the
          need for a consistent, high-quality networking platform where
          founders, innovators, and tech enthusiasts could connect, share ideas,
          and foster collaboration.
        </p>
        <div className="w-full flex gap-[36px] mt-[70px] mb-[160px] flex-row">
          <button className="w-1/2 bg-[#A649FF] text-white px-[70px] py-[20px] rounded-[40px] flex items-center justify-center gap-5 text-[24px] font-bold ">
            Register <img src="/ArrowRightwhite.png" alt="" />
          </button>
          <button className="w-1/2 bg-white text-[#A649FF] border border-[#A649FF] px-[70px] py-[20px] rounded-[40px] flex items-center justify-center gap-5 text-[24px] font-bold ">
            Register <img src="/Money Bag.png" alt="" />
          </button>
        </div>
        <p className="text-[22px] leading-[29px] font-bold">
          Founder's Friday is more than just a meetup — it's a movement.
        </p>
        <img
          src="/Line 1.png"
          alt="line"
          className="absolute top-[20.76px] left-[820px] hidden md:block"
          h
        />
      </div>
    </section>
  );
};

export default Whoweare;
