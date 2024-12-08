import type { NextPage } from "next";
import Image from "next/image";

export type GroupComponent1Type = {
  className?: string;
};

const GroupComponent1: NextPage<GroupComponent1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[316px] relative text-left text-29xl text-black font-poppins ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] w-full h-full flex items-center justify-center">
        <Image
          className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.038)]"
          width={1440}
          height={316}
          alt=""
          src="/blogMainImage.png"
        />
      </div>
      <Image
        className="absolute top-[61px] left-[682px] w-[77px] h-[77px]  z-[1]"
        width={77}
        height={77}
        alt=""
        src="/logo1.png"
      />
      <div className="absolute top-[122px] left-[660px] flex flex-col items-start justify-start gap-px">
        <div className="flex flex-row items-start justify-start py-0 pl-[7px] pr-0">
          <h1 className="m-0 text-[48px] relative text-inherit font-medium font-[inherit] inline-block min-w-[108px] z-[1] mq800:text-19xl mq450:text-10xl">
            Blog
          </h1>
        </div>
        <div className="flex flex-row items-start justify-start gap-1.5 text-base">
          <a className="[text-decoration:none] relative font-medium text-[inherit] z-[1]">
            Home
          </a>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <Image
              className="w-5 h-5 relative overflow-hidden shrink-0 object-contain z-[1]"
              loading="lazy"
              width={20}
              height={20}
              alt=""
              src="/rightA.png"
            />
          </div>
          <a className="[text-decoration:none] relative font-light text-[inherit] inline-block min-w-[36px] z-[1]">
            Blog
          </a>
        </div>
      </div>
    </section>
  );
};

export default GroupComponent1;
