import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";
import ITextareaProps from "./Textarea.types";

const inputStyles = cva(
  "w-full rounded-xl px-4 py-2 bg-white/5 backdrop-blur-sm text-white placeholder:text-white/40 placeholder:font-normal outline-none border border-white/10 transition-all duration-300  focus:border-primary-500/60 focus:ring-2 focus:ring-primary-500/20 focus:bg-white/8 hover:border-white/20 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "",
        outlined: "bg-transparent border-white/20 focus:bg-white/5",
        ghost: "bg-transparent border-transparent focus:border-primary-500/40",
        error: "border-red-500/60 focus:border-red-500 focus:ring-red-500/20",
      },
      inputSize: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
      defaultVariants: {
        variant: "default",
        inputSize: "md",
      },
    },
  }
);

export default function Textarea({
  variant = "default",
  className = "",
  inputSize = "md",
  rows = 40,
  label,
  ...props
}: ITextareaProps) {
  return (
    <label className="w-full flex flex-col gap-2">
      {label && <span className="b4 text-white capitalize">{label}</span>}
      <textarea
        className={cn(inputStyles({ variant, inputSize }), className)}
        rows={rows}
        {...props}
      />
    </label>
  );
}
