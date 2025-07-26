import MainLayout from "@/components/Layouts/MainLayout";
import HeroSection from "@/components/SectionComponents/HeroSection/HeroSection";
import ProfileCard from "@/components/SectionComponents/ProfileCard/ProfileCard";
import React from "react";

function page() {
  return (
    <MainLayout>
      <div className="1080:flex-row 1440:gap-[100px] 1080:gap-[50px] flex flex-col gap-[40px]">
        <div className="1080:max-w-[344px] w-full max-w-none">
          <div className="sticky top-[40px]">
            <ProfileCard />
          </div>
        </div>
        <div className="grow">
          <HeroSection />
          {/* Add other sections here as needed */}
        </div>
      </div>
    </MainLayout>
  );
}

export default page;
