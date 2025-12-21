import PageHeader from "../common/page-header/PageHeader.component";
import ContactCards from "./contact-cards/ContactCards.component";
import ContactForm from "./contact-form/ContactForm.component";

export default function Contact() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="w-full min-h-screen pd-y-s lg:px-16"
    >
      <div className="container">
        <div className="w-full flex flex-col gap-8">
          <PageHeader
            id="contact-heading"
            title="Contact Me"
            desc="Get in touch with me for any inquiries or collaborations. I'd love to connect with you!"
          />
          <ContactCards />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
