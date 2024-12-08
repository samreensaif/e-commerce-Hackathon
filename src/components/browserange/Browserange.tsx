import React from 'react';
import Image from 'next/image';
import { browseRange } from '@/constant/browseRange';

function Browserange() {
  return (
    <section className=" px-4 md:px-10 lg:px-[131px] mx-auto mb-20 font-poppins max-w-screen-xl">
      {/* Top Heading */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-2xl md:text-3xl lg:text-[32px] leading-[48px] font-bold text-black">
          Browse The Range
        </h1>
        <p className="text-base md:text-lg lg:text-[20px] leading-[30px] text-black mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      {/* Card Body */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {browseRange.map((item, index) => {
          return (
            <div className="flex flex-col items-center" key={index}>
              {/* Top Image */}
              <div className="w-full h-[300px] md:h-[400px] lg:h-[480px] relative">
                <Image
                  src={item.src}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>

              {/* Card Text */}
              <div className="mt-4">
                <h1 className="text-lg md:text-xl lg:text-[24px] leading-[36px] font-semibold text-black text-center">
                  {item.name}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Browserange;
