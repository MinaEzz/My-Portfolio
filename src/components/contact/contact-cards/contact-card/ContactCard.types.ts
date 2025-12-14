import React from "react";

export default interface IContactCardProps {
  icon: React.ReactElement<{ className?: string; title?: string }>;
  title: string;
  value: string;
  href?: string;
}
