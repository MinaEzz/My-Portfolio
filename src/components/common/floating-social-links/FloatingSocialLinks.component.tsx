"use client";
import useScreenSize from "@/hooks/useScreenSize.hook";
import DesktopSocialLinks from "../desktop/desktop-social-links/DesktopSocialLinks.component";
import MobileSocialLinks from "../mobile/mobile-social-links/MobileSocialLinks.component";

export default function FloatingSocialLinks() {
  const screenWidth = useScreenSize();
  return (
    <>
      {screenWidth > 1024 && <DesktopSocialLinks />}
      {screenWidth < 1024 && <MobileSocialLinks />}
    </>
  );
}
