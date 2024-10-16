import React from "react";

const Whatweoffer = () => {
  return (
    <section className="max-w-[95%]  w-full md:px-[80px] mx-4 relative mt-10 lg:mt-[180px] gap-10 flex flex-col">
      <h2 className="font-bold text-[45px] leading-[56.25px] text-black text-center">
        What We Offer{" "}
      </h2>
      <div className="flex justify-between flex-col gap-[25px]">
        <div className=" w-full flex justify-evenly flex-col items-start md:flex-row md:items-center border-b border-[#3C3641] py-[15px] lg:py-[55px] lg:max-h-[130px] 2xl:max-h-[160px]">
          <img
            src="/Ellipse 308.png"
            alt=""
            className="w-[25px] h-[25px] -ml-[50px] mr-[40px] hidden md:block"
          />
          <h3 className="font-semibold text-[30px] lg:text-[30px] 2xl:text-[40px] leading-[50px] text-black text-start mb-3">
            Monthly Meetups
          </h3>
          <p className="font-semibold text-[16px] lg:text-[14px] 2xl:text-[16px] leading-[25px] text-[#75687E] text-start md:ml-[100px] lg:w-3/6">
            Our cornerstone event, held on the last Friday of every month,
            featuring keynote speakers, panel discussions, and ample networking
            opportunities.
          </p>
          <img
            src="/plus.png"
            alt="plus icon"
            className="w-[40px] h-[40px] -mr-[40px] hidden md:block"
          />
        </div>
        <div className=" w-full flex justify-evenly flex-col items-start md:flex-row md:items-center border-b border-[#3C3641] py-[15px] lg:py-[55px] lg:max-h-[130px] 2xl:max-h-[160px]">
          <img
            src="/Ellipse 308.png"
            alt=""
            className="w-[25px] h-[25px] -ml-[55px] mr-[40px] hidden md:block"
          />
          <h3 className="font-semibold text-[30px] lg:text-[30px] 2xl:text-[40px] leading-[50px] text-black text-start mb-3">
            Diverse Network
          </h3>
          <p className="font-semibold text-[16px] lg:text-[14px] 2xl:text-[16px] leading-[25px] text-[#75687E] text-start md:ml-[100px] lg:w-3/6">
            Connect with a wide range of professionals, from early-stage
            founders to seasoned entrepreneurs, investors, and industry experts.
          </p>
          <img
            src="/plus.png"
            alt="plus icon"
            className="w-[40px] h-[40px] -mr-[40px] hidden md:block"
          />
        </div>
        <div className=" w-full flex justify-evenly flex-col items-start md:flex-row md:items-center border-b border-[#3C3641] py-[15px] lg:py-[55px] lg:max-h-[130px] 2xl:max-h-[160px]">
          <img
            src="/Ellipse 308.png"
            alt=""
            className="w-[25px] h-[25px] -ml-[50px] mr-[40px] hidden md:block"
          />
          <h3 className="font-semibold text-[30px] lg:text-[30px] 2xl:text-[40px] leading-[50px] text-black text-start mb-3">
            Knowledge Sharing
          </h3>
          <p className="font-semibold text-[16px] lg:text-[14px] 2xl:text-[16px] leading-[25px] text-[#75687E] text-start md:ml-[100px] lg:w-3/6 ">
            Connect with a wide range of professionals, from early-stage
            founders to seasoned entrepreneurs, investors, and industry experts.
          </p>
          <img
            src="/plus.png"
            alt="plus icon"
            className="w-[40px] h-[40px] -mr-[40px] hidden md:block"
          />
        </div>
        <div className=" w-full flex justify-evenly flex-col items-start md:flex-row md:items-center border-b border-[#3C3641] py-[15px] lg:py-[15px] lg:max-h-[130px] 2xl:max-h-[160px]">
          <div className="flex justify-between items-center w-2/6">
            <img
              src="/Ellipse 308.png"
              alt=""
              className="w-[25px] h-[25px] -ml-[40px] mr-[40px] hidden md:block"
            />
            <h3
              className="font-semibold text-[30px] lg:text-[30px] 2xl:text-[40px] w-3/4 leading-[50px] text-black text-start
             -pl-40 mb-3"
            >
              Collaboration Opportunities
            </h3>
          </div>

          <p className="font-semibold text-[16px] lg:text-[14px] 2xl:text-[16px]  leading-[25px] text-[#75687E] text-start md:ml-[100px] lg:w-3/6">
            Find potential co-founders, mentors, or partners for your next big
            venture.
          </p>
          <img
            src="/plus.png"
            alt="plus icon"
            className="w-[40px] h-[40px] -mr-[40px] hidden md:block"
          />
        </div>
        <div className=" w-full flex justify-evenly flex-col items-start md:flex-row md:items-center border-b border-[#3C3641] py-[15px] lg:py-[55px] lg:max-h-[130px] 2xl:max-h-[160px]">
          <img
            src="/Ellipse 308.png"
            alt=""
            className="w-[25px] h-[25px] -ml-[50px] mr-[40px] hidden md:block"
          />
          <h3 className="font-semibold text-[30px] lg:text-[30px] 2xl:text-[40px] leading-[50px] text-black text-start mb-3">
            Community Support
          </h3>
          <p className="font-semibold text-[16px] lg:text-[14px] 2xl:text-[16px] leading-[25px] text-[#75687E] text-start md:ml-[100px] lg:w-3/6">
            Be part of a supportive ecosystem that celebrates successes and
            provides guidance through challenges.
          </p>
          <img
            src="/plus.png"
            alt="plus icon"
            className="w-[40px] h-[40px] -mr-[40px] hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Whatweoffer;
