import React from "react";

function MainLayout({
  children,
  outerClassName,
  innerClassName,
  outerStyle,
  innerStyle,
}) {
  return (
    <div className={` ${outerClassName}`} style={outerStyle}>
      <div
        className={`1080:max-w-[1140px] 810:px-[40px] mx-auto max-w-[810px] px-[20px] ${innerClassName}`}
        style={innerStyle}
      >
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
