"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import { validate } from "@/utils/validate";
import { contactSchema } from "@/components/contact/contact-form/Contact.schema";
import type { IContactFormValues } from "@/components/contact/contact-form/Contact.types";
import { useMutation } from "@tanstack/react-query";

export function useContact() {
  const [formValues, setFormValues] = useState<IContactFormValues>({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ field: string; message: string }[]>(
    []
  );

  const mutation = useMutation({
    mutationFn: sendContact,
  });

  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function sendContact() {
    try {
      const { valid, errors: validationErrors } = validate(
        contactSchema,
        formValues
      );
      if (!valid) {
        setErrors(validationErrors);
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
      if (data.status !== "SUCCESS") {
        toast.error(data.message || "Error occured");
        console.error(data.message || "Error occured");
        throw new Error(data.message || "Error occured");
      }
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
        console.error(error.message || "Something went wrong");
        toast.error(error.message || "Something went wrong");
        throw new Error(error.message || "Something went wrong");
      }
      console.error("Unexpected error:", error);
      toast.error("Something went wrong");
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    mutation.mutate();
  }

  return {
    formValues,
    handleChange,
    handleSubmit,
    isLoading: mutation.isPending,
    errors,
  };
}
