import IconProvider from "@/components/UtilityComponents/IconProvider";
import { imagePrefixHandler } from "@/utilities/commonFunctions";
import staticRoutes from "@/utilities/staticRoutes";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function CardOne({ cardDetail }) {
  return (
    <Link
      href={staticRoutes[cardDetail?.link]}
      className="bg-primary-accent group relative flex w-full max-w-[350px] flex-col gap-y-[24px] overflow-hidden rounded-[10px] px-[20px] pt-[40px] pb-[22px] text-white"
    >
      <img
        src={imagePrefixHandler("/card-one-line.svg", "/svg")}
        alt="card one line"
        className="absolute top-[1%] left-0 w-full"
      />
      <img
        src={imagePrefixHandler("/card-one-line.svg", "/svg")}
        alt="card one line"
        className="absolute top-[35%] left-0 w-full"
      />
      <IconProvider
        icon={cardDetail?.icon}
        size={38}
        className="relative z-10"
      />
      <div className="relative z-10 flex flex-col gap-y-0 md:gap-y-[28px]">
        <p
          className="text-[24px] leading-[26.4px] font-medium uppercase"
          dangerouslySetInnerHTML={{ __html: cardDetail?.title || "" }}
        ></p>
        <div className="group-hover:text-primary-accent self-end rounded-[6px] border border-white p-[6px] transition-all duration-500 ease-in-out group-hover:bg-white">
          <ArrowRight size={20} color="currentColor" />
        </div>
      </div>
    </Link>
  );
}

export default CardOne;
