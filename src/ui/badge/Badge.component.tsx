import IBadgeProps from "./Badge.types";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";

const badgeStyles = cva("w-fit rounded-full c2 uppercase backdrop-blur-md", {
  variants: {
    variant: {
      green: "bg-primary-500/15 text-primary-400 border border-primary-500/30",
      blue: "bg-blue-500/15 text-blue-400 border border-blue-500/30",
    },
    size: {
      sm: " px-4 py-2 button-small",
      md: "px-6 py-4 button-medium",
      lg: "px-8 py-6 button-large",
    },
    defaultVariants: {
      variant: "green",
      size: "md",
    },
  },
});

export default function Badge({
  children,
  size = "md",
  variant = "green",
  className = "",
  ...props
}: IBadgeProps) {
  return (
    <span className={cn(badgeStyles({ variant, size }), className)} {...props}>
      {children}
    </span>
  );
}
