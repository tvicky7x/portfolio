import MainLayout from "@/components/Layouts/MainLayout";
import HeroSection from "@/components/SectionComponents/HeroSection/HeroSection";
import ProfileCard from "@/components/SectionComponents/ProfileCard/ProfileCard";
import RecentProjectsSection from "@/components/SectionComponents/RecentProjectsSection/RecentProjectsSection";
import React from "react";

function page() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-[40px] lg:flex-row lg:gap-[50px] 2xl:gap-[100px]">
        <div className="w-full max-w-none lg:max-w-[344px]">
          <div className="sticky top-[40px]">
            <ProfileCard />
          </div>
        </div>
        <div className="flex grow flex-col gap-y-[80px] md:gap-y-[90px] lg:gap-y-[120px]">
          <HeroSection />
          <RecentProjectsSection />
        </div>
      </div>
    </MainLayout>
  );
}

export default page;
