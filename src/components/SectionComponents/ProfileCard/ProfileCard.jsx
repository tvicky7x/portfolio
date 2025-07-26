import SectionAnimationWrapper from "@/components/Layouts/SectionAnimationWrapper";
import IconProvider from "@/components/UtilityComponents/IconProvider";
import {
  getComponentTexts,
  imagePrefixHandler,
} from "@/utilities/commonFunctions";
import staticRoutes from "@/utilities/staticRoutes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProfileCard() {
  const content = getComponentTexts("profileCard");

  return (
    <SectionAnimationWrapper id={"profile-card"}>
      <div className="relative flex flex-col gap-y-[20px] overflow-hidden rounded-[16px] bg-white px-[20px] py-[30px]">
        <div className="relative self-center">
          <Image
            src={imagePrefixHandler("/profile-strip-top.svg", "/svg")}
            alt="Profile Strip Top"
            width={194}
            height={66}
            className="absolute top-0 left-0 -translate-x-[52px] -translate-y-[26px]"
          />
          <div
            style={{
              backgroundImage: `url(${imagePrefixHandler("/profile.png", "/png")})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="h-[210px] w-[260px] rounded-[16px] md:h-[284px] md:w-[240px]"
          />
        </div>
        <Image
          src={imagePrefixHandler("/profile-strip-bottom.svg", "/svg")}
          alt="Profile Strip Bottom"
          width={250}
          height={101}
          className="absolute top-1/2 left-0 -translate-x-[60%] translate-y-[-60%] md:translate-y-[10%]"
        />
        <div className="flex flex-col gap-y-[10px] text-center lg:gap-y-[80px]">
          <h2 className="text-secondary-text-on-light text-[36px] font-bold tracking-[-1.44px]">
            {content?.name}
          </h2>
          <div className="flex flex-col gap-y-[16px] md:gap-y-[20px]">
            <p className="text-primary-text-on-light max-w-[300px] self-center text-[18px] font-medium">
              {content?.description}
            </p>
            <div className="flex justify-center gap-x-[16px]">
              {content?.socialLinks?.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={staticRoutes[item?.link]}
                    target="_blank"
                    title={item?.plateForm}
                    className="text-primary-accent rounded-[6px] p-[6px] transition-colors duration-300 ease-in-out hover:bg-[#15131214]"
                  >
                    <IconProvider icon={item?.icon} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </SectionAnimationWrapper>
  );
}

export default ProfileCard;
