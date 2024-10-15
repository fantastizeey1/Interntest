import React from "react";

const Hero = () => {
  return (
    <section className="w-full md:px-[80px] mx-4">
      <div className="w-4/6 flex flex-col mt-[100px] justify-between">
        <div className="flex flex-col ">
          <p className="text-black font-bold text-[16px] leading-[24px]">
            Join our premier monthly meetup for startup founders and tech
            visionaries
          </p>
          <h2
            className="text-[#5C00B3]  font-bold text-[45px] leading-[50px] 
          pb-[30px]"
          >
            Connect, Collaborate, Innovate!
          </h2>
          <p className="text-[#0a0a0a] font-normal text-[24px] leading-[36px]">
            Every last Friday of the month, we bring together the brightest
            minds in our local tech ecosystem. Whether you're a seasoned
            entrepreneur or just starting your journey, Founder's Friday is your
            launchpad for new ideas, valuable connections, and game-changing
            opportunities.
          </p>
        </div>
        <div className="flex flex-col mt-[40px]">
          <div className="flex items-start flex-col ">
            <button className="flex items-center border-2 border-[#9524FF] rounded-[40px] px-[20px] py-[20px] text-[#9524FF] text-[28px] leading-[33px] gap-[10px]">
              Register For Our Next Event
              <img
                src="/Right arrow.png"
                alt="right arrow"
                className="w-[40px] h-[40px]"
              />
            </button>
            <p className="text-[#6750A4] font-medium text-[16px] leading-[20px] mt-[15px]">
              Join Us for our next meetup on the 26th of July 2024
            </p>
          </div>
          <div className="">
            <div>
              <img src="/Ellipse 1.png" alt="company logo" />
              <img src="/Ellipse 2.png" alt="company logo" />
              <img src="/Ellipse 3.png" alt="company logo" />
              <img src="/Ellipse 4.png" alt="company logo" />
              <img src="/Ellipse 5.png" alt="company logo" />
            </div>
            <div>
              <p>Become a collaborator today </p>
              <img src="/BoxArrowUpRight.png" alt="arrow" />
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </section>
  );
};

export default Hero;
