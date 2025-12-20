import React from "react";
import IFormFieldProps from "./FormField.types";

export default function FormField({ error, children }: IFormFieldProps) {
  const child = React.Children.only(children);

  return (
    <div className="w-full flex flex-col gap-2">
      {React.cloneElement(child, {
        variant: error ? "error" : child.props.variant,
      })}
      {error && <p className="b3 text-red-500">{error}</p>}
    </div>
  );
}
