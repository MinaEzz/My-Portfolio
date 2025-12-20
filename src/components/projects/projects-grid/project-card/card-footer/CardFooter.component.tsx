import Button from "@/ui/button/Button.component";
import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";
import ICardFooterProps from "./CardFooter.types";

export default function CardFooter({
  githubLink,
  liveDemoLink,
  isPrivate,
}: ICardFooterProps) {
  if (!githubLink && !liveDemoLink && isPrivate) {
    return (
      <p className="b4 capitalize text-primary-600">
        Company project — code & demo are private
      </p>
    );
  }

  return (
    <div className="w-full flex md:items-center max-md:flex-col gap-4">
      {githubLink && (
        <Button
          variant="outlined"
          size="sm"
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${githubLink} on GitHub`}
          className="w-[10rem]"
        >
          <FaGithub className="w-4 h-4" aria-hidden="true" />
          Github Repo
        </Button>
      )}
      {liveDemoLink && (
        <Button
          variant="outlined"
          size="sm"
          href={liveDemoLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View live demo of the project`}
          className="w-[10rem]"
        >
          <FaExternalLinkSquareAlt className="w-4 h-4" aria-hidden="true" />
          Live Demo
        </Button>
      )}
    </div>
  );
}
