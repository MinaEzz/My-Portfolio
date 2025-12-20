import Button from "@/ui/button/Button.component";
import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";

export default function CardFooter({ githubLink, liveDemoLink, isPrivate }) {
  if (!githubLink && !liveDemoLink && isPrivate) {
    return (
      <p className="b4 capitalize text-primary-600">
        Company project — code & demo are private
      </p>
    );
  }

  return (
    <div className="w-full flex items-center gap-4">
      {githubLink && (
        <Button
          variant="outlined"
          size="sm"
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${githubLink} on GitHub`}
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
        >
          <FaExternalLinkSquareAlt className="w-4 h-4" aria-hidden="true" />
          Live Demo
        </Button>
      )}
    </div>
  );
}
