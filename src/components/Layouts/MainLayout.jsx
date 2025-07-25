import React from "react";

function MainLayout({ children }) {
  return (
    <div className="px-[20px]">
      <div className="max-w-[1140px] mx-auto">{children}</div>
    </div>
  );
}

export default MainLayout;
