import { CONTACT_INFO } from "@/data";
import ContactCard from "./contact-card/ContactCard.component";

export default function ContactCards() {
  return (
    <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-4">
      {CONTACT_INFO.map((item, index) => {
        return <ContactCard key={index} {...item} />;
      })}
    </div>
  );
}
