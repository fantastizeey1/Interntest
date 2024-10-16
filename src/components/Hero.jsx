import React from "react";

const Hero = () => {
  return (
    <section className="max-w-[95%]  w-full md:px-[50px] 2xl:px-[80px] mx-4 relative mt-10 md:mt-[134px]">
      <div className="w-full md:w-1/2 flex flex-col justify-between">
        <div className="flex flex-col">
          <p className="text-black font-bold text-[14px] lg:text-[14px] 2xl:text-[18px] leading-[24px] mb-4 md:mb-1">
            Join our premier monthly meetup for startup founders and tech
            visionaries
          </p>
          <h2 className="text-[#5C00B3] font-extrabold md:font-bold text-[55px] leading-[50px] lg:text-[35px] 2xl:text-[45px] md:leading-[65px] mt-2">
            Connect, Collaborate, Innovate!
          </h2>
          <p className="text-[#0a0a0a] font-normal text-20px md:text-[17px] 2xl:text-[24px] leading-[36px] mt-[39px]">
            Every last Friday of the month, we bring together the brightest
            minds in our local tech ecosystem. Whether you're a seasoned
            entrepreneur or just starting your journey, Founder's Friday is your
            launchpad for new ideas, valuable connections, and game-changing
            opportunities.
          </p>
        </div>
        <div className="flex flex-col mt-[40px]">
          <div className="flex flex-col items-start">
            <button className="flex  w-3/4items-center border-2 border-[#9524FF] rounded-[40px] px-[20px] py-[20px] text-[#9524FF] md:text-[28px] leading-[33px] gap-[10px]">
              Register For Our Next Event
              <img
                src="/Right arrow.png"
                alt="Right arrow icon"
                className="w-[40px] h-[40px]"
              />
            </button>
            <p className="text-[#6750A4] font-medium text-[14px] md:text-[16px] leading-[20px] mt-[15px]">
              Join Us for our next meetup on the 26th of July 2024
            </p>
          </div>

          {/* Collaborator section */}
          <div className="flex flex-col  mt-[40px] md:mt-[88px]">
            <div className="flex gap-7 md:gap-[32px] mb-[30px]">
              <img
                src="/Ellipse 1.png"
                alt="Collaborator logo 1"
                className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]"
              />
              <img
                src="/Ellipse 2.png"
                alt="Collaborator logo 2"
                className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]"
              />
              <img
                src="/Ellipse 3.png"
                alt="Collaborator logo 3"
                className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]"
              />
              <img
                src="/Ellipse 4.png"
                alt="Collaborator logo 4"
                className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]"
              />
              <img
                src="/Ellipse 5.png"
                alt="Collaborator logo 5"
                className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]"
              />
            </div>
            <div className="flex items-center gap-[15px]">
              <p className="font-bold text-[14px] leading-[17px] text-black">
                Become a collaborator today
              </p>
              <img
                src="/BoxArrowUpRight.png"
                alt="Arrow icon"
                className="w-[20px] h-[20px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Images */}
      <img
        src="/Frame 20.png"
        alt="Founders Friday graphics"
        className="absolute top-[430px] lg:left-[650.68px] 2xl:left-[950.68px] hidden md:block"
      />
      <img
        src="/Frame 17.png"
        alt="Founders Friday graphics"
        className="absolute top-[100px] left-[900.15px] 2xl:left-[1200.15px] z-[1] hidden md:block"
      />
      <img
        src="/Frame 16.png"
        alt="Founders Friday graphics"
        className="absolute -top-[20px] left-[646.3px] 2xl:left-[946.3px] hidden md:block"
      />
      <img
        src="/Frame 22.png"
        alt="Founders Friday graphics"
        className="absolute top-[561.76px] left-[1000px] 2xl:left-[1300px] hidden md:block"
      />
      <img
        src="/Vector 1.png"
        alt="Background vector"
        className="absolute -top-[150px] left-[220px] 2xl:left-[550px] -z-10 hidden md:block"
      />
    </section>
  );
};

export default Hero;
