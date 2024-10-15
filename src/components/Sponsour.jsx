import React from "react";

const Sponsour = () => {
  return (
    <section className="max-w-[95%] w-full px-4 md:px-[80px] mx-auto relative mt-10 lg:mt-[150px] gap-10 flex flex-col justify-between">
      <div className="flex flex-col justify-between w-full items-start">
        <h3 className="text-[#5c00b3] text-[24px] md:text-[30px] leading-[30px] md:leading-[38px] font-bold mb-2">
          Sponsor The Next Friday
        </h3>
        <div className="flex flex-col md:flex-row justify-between w-full items-start gap-6">
          <h2 className="text-[32px] md:text-[55px] leading-[42px] md:leading-[69px] font-bold mb-[25px] md:mb-[45px] md:w-2/5 w-full">
            Why Sponsor Founders Friday?
          </h2>
          <p className="w-full md:w-2/5 text-[16px] leading-[19px] font-normal text-[#4C4452] mb-[25px] md:mb-[45px] md:text-end">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
            rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
            dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
            suscipit id. Maecenas ut ante quis quam lobortis consequat eu id
            turpis. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-start gap-10">
        <div className="w-full md:w-1/2 justify-center md:justify-end flex">
          <img src="/Frame 682.png" alt="" className="w-full md:w-auto" />
        </div>
        <div className="rounded-lg w-full md:w-1/2 mx-auto">
          <h3 className="text-[#050505] font-bold text-[24px] md:text-[28px] leading-[30px] md:leading-[34px]">
            How To Sponsor
          </h3>
          <p className="italic text-[#605668] font-bold text-[24px] md:text-[28px] leading-[30px] md:leading-[34px] py-4">
            Ready to Make an Impact?
          </p>
          <p className="text-[#2C2830] font-normal text-[16px] md:text-[18px] leading-[20px] pb-6">
            Fill out the form below or contact us at [contact email/phone
            number] to learn more about how you can sponsor the next Founders
            Friday.
          </p>

          <form className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Name Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-[16px] leading-[18px] text-black font-semibold"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="text-black/50 p-3 rounded-lg border border-[#333]"
              />
            </div>

            {/* Company Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="company"
                className="text-[16px] leading-[18px] text-black font-semibold"
              >
                Company{" "}
                <span className="text-[16px] leading-[18px] text-black font-normal">
                  (optional)
                </span>
              </label>
              <input
                type="text"
                id="company"
                placeholder="Your Company"
                className="text-black/50 p-3 rounded-lg border border-[#333]"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-[16px] leading-[18px] text-black font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="text-black/50 p-3 rounded-lg border border-[#333]"
              />
            </div>

            {/* Phone Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="text-[16px] leading-[18px] text-black font-semibold"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                placeholder="Your Phone"
                className="text-black/50 p-3 rounded-lg border border-[#333]"
              />
            </div>
          </form>

          <button className="w-full md:w-1/2 bg-[#A649FF] text-white px-6 md:px-[70px] py-[12px] md:py-[20px] rounded-[30px] md:rounded-[10px] flex items-center justify-center gap-5 text-[18px] md:text-[24px] mt-6">
            Sponsor
            <img
              src="/ArrowRightwhite.png"
              alt=""
              className="w-[25px] h-[25px]"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sponsour;
