import SectionAnimationWrapper from "@/components/Layouts/SectionAnimationWrapper";
import MainHeading from "@/components/UtilityComponents/MainHeading";
import Para from "@/components/UtilityComponents/Para";
import { getComponentTexts } from "@/utilities/commonFunctions";
import React from "react";
import IndividualMatrix from "./IndividualMatrix";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import matrixesJson from "@/data/matrixes.json";

function HeroSection() {
  const content = getComponentTexts("heroSection");

  return (
    <SectionAnimationWrapper id={"hero-section"}>
      <div className="flex flex-col gap-y-[70px] md:gap-y-[60px]">
        <div className="flex flex-col items-center gap-y-[10px] lg:items-start">
          <MainHeading heading={content?.heading} />
          <Para para={content?.para} className={"max-w-[480px]"} />
        </div>
        <div className="flex flex-wrap justify-center gap-[26px] md:gap-[40px] lg:justify-start">
          {matrixesJson?.matrixes?.map((matrix, index) => {
            return <IndividualMatrix key={index} matrix={matrix} />;
          })}
        </div>
        <div className="grid grid-flow-row justify-items-center gap-[30px] lg:grid-cols-2 lg:justify-items-stretch">
          <CardOne cardDetail={content?.cardList[0]} />
          <CardTwo cardDetail={content?.cardList[1]} />
        </div>
      </div>
    </SectionAnimationWrapper>
  );
}

export default HeroSection;
