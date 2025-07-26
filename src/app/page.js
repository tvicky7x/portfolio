import MainLayout from "@/components/Layouts/MainLayout";
import HeroSection from "@/components/SectionComponents/HeroSection/HeroSection";
import ProfileCard from "@/components/SectionComponents/ProfileCard/ProfileCard";
import React from "react";

function page() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-x-0 lg:flex-row lg:gap-x-[100px]">
        <div className="w-full max-w-none lg:max-w-[344px]">
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
