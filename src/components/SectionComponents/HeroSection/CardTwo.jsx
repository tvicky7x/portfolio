import IconProvider from "@/components/UtilityComponents/IconProvider";
import { imagePrefixHandler } from "@/utilities/commonFunctions";
import staticRoutes from "@/utilities/staticRoutes";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function CardTwo({ cardDetail }) {
  return (
    <Link
      href={staticRoutes[cardDetail?.link]}
      className="bg-secondary-accent text-background group relative flex w-full max-w-[350px] flex-col gap-y-[24px] overflow-hidden rounded-[10px] px-[20px] pt-[40px] pb-[22px]"
    >
      <img
        src={imagePrefixHandler("/card-two-line.svg", "/svg")}
        alt="card two line"
        className="absolute top-[-5%] left-0 w-full"
      />
      <img
        src={imagePrefixHandler("/card-two-line.svg", "/svg")}
        alt="card two line"
        className="absolute top-[45%] left-[-8%] w-full"
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
        <div className="group-hover:text-secondary-accent border-background group-hover:bg-background self-end rounded-[6px] border p-[6px] transition-all duration-500 ease-in-out">
          <ArrowRight size={20} color="currentColor" />
        </div>
      </div>
    </Link>
  );
}

export default CardTwo;
