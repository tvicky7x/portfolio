import {
  House,
  Folder,
  Briefcase,
  MessageSquare,
  SquarePen,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Rocket,
  ArrowUpRight,
  Wrench,
} from "lucide-react";
import React from "react";

function IconProvider({
  icon,
  size = 20,
  color = "currentColor",
  strokeWidth = 1.6,
  className = "",
  ...props
}) {
  if (!icon) return null;

  switch (icon) {
    case "home":
      return (
        <House
          size={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
          {...props}
        />
      );
    case "projects":
      return (
        <Folder
          size={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
          {...props}
        />
      );
    case "experience":
      return (
        <Briefcase
          size={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
          {...props}
        />
      );
    case "tools":
      return (
        <Wrench
          size={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
          {...props}
        />
      );
    case "contact":
      return (
        <MessageSquare
          size={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
          {...props}
        />
      );
    case "blog":
      return (
        <SquarePen
          size={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
          {...props}
        />
      );
    case "github":
      return (
        <Github
          size={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
          {...props}
        />
      );
    case "twitter":
      return (
        <Twitter
          size={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
          {...props}
        />
      );
    case "linkedin":
      return (
        <Linkedin
          size={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
          {...props}
        />
      );
    case "mail":
      return (
        <Mail
          size={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
          {...props}
        />
      );
    case "rocket":
      return (
        <Rocket
          size={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
          {...props}
        />
      );
    default:
      return null;
  }
}

export default IconProvider;
