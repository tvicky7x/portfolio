import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function LinkListContainer({ children, link = "", target = "_self" }) {
  return (
    <Link
      href={link}
      target={target}
      className="group relative block rounded-[16px] px-[8px] py-[20px] transition-all duration-300 ease-in-out hover:bg-white/[0.03] md:px-[16px]"
    >
      {children}
      <ArrowRight
        size={20}
        className="text-primary-accent absolute top-[30px] right-[10px] hidden -rotate-45 transition-all duration-500 ease-in-out group-hover:top-[20px] group-hover:right-[6px] md:block"
      />
    </Link>
  );
}

export default LinkListContainer;
