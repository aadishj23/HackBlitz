import React from "react";

const PrizesSection = () => {
  return (
    <div className="relative w-full min-h-screen bg-black flex justify-center items-center">
      <div className="flex flex-col items-center w-full px-4 py-20">
        {/* PRIZES Heading */}
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-10">PRIZES</h2>

        {/* Prize Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {["1", "2", "3"].map((num, index) => (
            <div
              key={index}
              className="relative w-[265px] h-[370px] border border-white rounded-[10px] flex flex-col items-center justify-center bg-black"
            >
              {/* Large Number with Gradient Effect */}
              <h3
                className="absolute top-4 font-black text-[250px] leading-[240px]"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontStyle: "normal",
                  fontWeight: 900,
                  background: "linear-gradient(0deg, #0D0D0D 0%, #4F4F4F 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                {num}
              </h3>
              {/* Details Text */}
              <p className="absolute bottom-10 text-white text-[43px] font-light">Details</p>

              {/* Decorative Bottom Rectangles */}
              <div className="absolute top-full w-[230px] h-[26px] border border-white rounded-b-[10px]"></div>
              <div className="absolute top-[calc(100%+26px)] w-[200px] h-[26px] border border-white rounded-b-[10px]"></div>
            </div>
          ))}
        </div>

        {/* Track Prizes Card */}
        <div className="mt-12 pt-14">
          <div className="relative w-[265px] h-[370px] border border-white rounded-[10px] flex flex-col items-center justify-center bg-black">
            {/* Track Prizes Text */}
            <p className="text-white text-[43px] font-light">Track Prizes</p>

            {/* Decorative Bottom Rectangles (Fixed Positioning) */}
            <div className="absolute top-full w-[230px] h-[26px] border border-white rounded-b-[10px]"></div>
            <div className="absolute top-[calc(100%+26px)] w-[200px] h-[26px] border border-white rounded-b-[10px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrizesSection;
