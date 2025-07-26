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
      <div className="px-[20px] bg-white overflow-hidden relative rounded-[16px] py-[30px] flex flex-col gap-y-[20px] ">
        <div className="relative self-center">
          <Image
            src={imagePrefixHandler("/profile-strip-top.svg", "/svg")}
            alt="Profile Strip Top"
            width={194}
            height={66}
            className="absolute top-0 left-0 -translate-y-[26px] -translate-x-[52px] "
          />
          <Image
            src={imagePrefixHandler("/profile.png", "/png")}
            alt="Profile Picture"
            width={240}
            height={284}
            className="rounded-[16px]  "
          />
        </div>
        <Image
          src={imagePrefixHandler("/profile-strip-bottom.svg", "/svg")}
          alt="Profile Strip Bottom"
          width={250}
          height={101}
          className="absolute top-1/2 -translate-x-[60%] translate-y-[10%] left-0 "
        />
        <div className="flex text-center flex-col gap-y-[80px]">
          <h2 className="text-secondary-text-on-light font-bold text-[36px] tracking-[-1.44px] ">
            {content?.name}
          </h2>
          <div className="flex flex-col gap-y-[20px]">
            <p className="font-medium text-primary-text-on-light text-[18px] ">
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
                    className="p-[6px] rounded-[6px] hover:bg-[#15131214] transition-colors duration-300 ease-in-out text-primary-accent "
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
