import { SOCIAL_MEDIA_LINKS } from "@/data";
import SocialLink from "../../social-link/SocialLink.component";

export default function DesktopSocialLinks() {
  return (
    <ul className="hidden xl:flex fixed right-2 top-1/2 transform -translate-y-1/2 flex-col gap-4 z-50">
      {SOCIAL_MEDIA_LINKS.map((link, index) => {
        return (
          <li key={index}>
            <SocialLink {...link} />
          </li>
        );
      })}
    </ul>
  );
}
