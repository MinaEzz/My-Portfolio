import Button from "@/ui/button/Button.component";
import { FaLinkedin } from "react-icons/fa";
import ICardFooterProps from "./CardFooter.types";

export default function CardFooter({ linkedInLink }: ICardFooterProps) {
  return (
    <div className="w-full pt-4 border-t border-white/5">
      <Button
        variant="outlined"
        size="md"
        href={linkedInLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Read Full Insight`}
        className="w-full"
      >
        <FaLinkedin className="w-4 h-4" aria-hidden="true" />
        Read Full Insight
      </Button>
    </div>
  );
}
