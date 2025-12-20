"use client";
import Input from "@/ui/input/Input.component";
import Textarea from "@/ui/textarea/Textarea.component";
import Button from "@/ui/button/Button.component";
import FormField from "./form-field/FormField.component";
import { useContact } from "@/hooks/useContact.hook";
import { ClipLoader } from "react-spinners";

export default function ContactForm() {
  const { formValues, handleChange, handleSubmit, isLoading, errors } =
    useContact();
  return (
    <form
      className="w-full flex flex-col items-center gap-4 mt-6"
      method="post"
      onSubmit={handleSubmit}
    >
      <h3 className="h4 uppercase text-white">Get in Touch</h3>
      <FormField
        error={errors.find((err) => err.field === "fullName")?.message}
      >
        <Input
          variant="default"
          placeholder="Full Name"
          type="text"
          inputSize="lg"
          name="fullName"
          label="Full Name"
          onChange={handleChange}
          value={formValues.fullName}
        />
      </FormField>
      <div className="w-full flex flex-col gap-2">
        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-4">
          <FormField
            error={errors.find((err) => err.field === "email")?.message}
          >
            <Input
              variant="default"
              placeholder="Email Address"
              type="email"
              inputSize="lg"
              name="email"
              label="Email Address"
              onChange={handleChange}
              value={formValues.email}
            />
          </FormField>
          <FormField
            error={errors.find((err) => err.field === "phoneNumber")?.message}
          >
            <Input
              variant="default"
              placeholder="Phone Number"
              type="tel"
              inputSize="lg"
              name="phoneNumber"
              label="Phone Number"
              onChange={handleChange}
              value={formValues.phoneNumber}
            />
          </FormField>
        </div>
        <p className="c2 text-white/50 capitalize">
          Your email or phone number will only be used to contact you regarding
          your message.
        </p>
      </div>
      <FormField error={errors.find((err) => err.field === "subject")?.message}>
        <Input
          variant="default"
          placeholder="Subject"
          type="text"
          inputSize="lg"
          name="subject"
          label="Subject"
          onChange={handleChange}
          value={formValues.subject}
        />
      </FormField>
      <FormField error={errors.find((err) => err.field === "message")?.message}>
        <Textarea
          variant="default"
          placeholder="Message..."
          inputSize="lg"
          name="message"
          label="Message"
          rows={5}
          onChange={handleChange}
          value={formValues.message}
        />
      </FormField>
      <Button
        variant="default"
        size="lg"
        type="submit"
        className="w-[12rem]"
        disabled={isLoading}
      >
        {isLoading ? <ClipLoader size={24} /> : "Submit"}
      </Button>
    </form>
  );
}
