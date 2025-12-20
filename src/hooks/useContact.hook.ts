"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { validate } from "@/utils/validate";
import { contactSchema } from "@/components/contact/contact-form/Contact.schema";
import { IContactFormValues } from "@/components/contact/contact-form/Contact.types";

export function useContact() {
  const [formValues, setFormValues] = useState<IContactFormValues>({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ field: string; message: string }[]>(
    []
  );

  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function sendContact() {
    setIsLoading(true);
    try {
      const { valid, errors: validationErrors } = validate(
        contactSchema,
        formValues
      );
      if (!valid) {
        setErrors(validationErrors);
        setIsLoading(false);
        return;
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          fullName: formValues.fullName?.trim(),
          email: formValues.email?.trim().toLowerCase(),
          phoneNumber: formValues.phoneNumber?.trim(),
          subject: formValues.subject?.trim(),
          message: formValues.message?.trim(),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.status !== "SUCCESS")
        throw new Error(data.message || "Error occured");
      toast.success(data.message || "Message sent successfully");

      setFormValues({
        fullName: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: "",
      });
      setErrors([]);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return toast.error(error.message);
      }
      return toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    sendContact();
  }

  return {
    formValues,
    handleChange,
    handleSubmit,
    isLoading,
    errors,
  };
}
