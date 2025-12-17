import Button from "@/ui/button/Button.component";
import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";

export default function CardFooter({ githubLink, liveDemoLink }) {
  return (
    <div className="w-full flex items-center gap-4 mt-auto">
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
