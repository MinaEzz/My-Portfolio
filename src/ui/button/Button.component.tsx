import { TButtonProps } from "./Button.types";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";

const buttonStyles = cva(
  "w-fit inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md transition-colors cursor-pointer select-none transition-colors ease-linear",
  {
    variants: {
      variant: {
        default:
          "bg-primary-500 border border-primary-500 text-black hover:bg-primary-600 active:bg-primary-700 hover:border-primary-700",
        outlined:
          "border border-white/20 bg-transparent backdrop-blur-sm text-white hover:bg-white/10 active:bg-white/20",
      },
      size: {
        sm: "h-8 px-6 button-small",
        md: "h-10 px-8 button-medium",
        lg: "h-12 px-10 button-large",
      },
      defaultVariants: {
        variant: "default",
        size: "md",
      },
    },
  }
);

export default function Button({
  children,
  size = "md",
  variant = "default",
  className = "",
  ...props
}: TButtonProps) {
  if (props.href && typeof props.href === "string") {
    return (
      <a
        href={props.href}
        className={cn(buttonStyles({ variant, size }), className)}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={cn(buttonStyles({ variant, size }), className)}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
