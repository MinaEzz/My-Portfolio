type TBadgeVariant = "blue" | "green";
type TBadgeSize = "sm" | "md" | "lg";

export default interface IBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
  children: React.ReactNode;
  variant?: TBadgeVariant;
  size?: TBadgeSize;
}
