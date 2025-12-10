import { FLOAT_SOCIAL_MEDIA_LINKS } from "@/data";
import SocialLink from "./social-link/SocialLink.component";

export default function FloatingSocialLinks() {
  return (
    <ul className="hidden lg:flex fixed right-0 top-1/2 transform -translate-y-1/2 flex-col gap-4 z-50 pr-2">
      {FLOAT_SOCIAL_MEDIA_LINKS.map((link, index) => {
        return (
          <li key={index}>
            <SocialLink {...link} />
          </li>
        );
      })}
    </ul>
  );
}
