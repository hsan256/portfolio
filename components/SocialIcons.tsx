import Link from "next/link";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillMediumCircle,
} from "react-icons/ai";

interface Props {
  type: string;
  url: string;
}

const SocialIcons: React.FC<Props> = ({ type, url }) => {
  let icon, className;

  switch (type) {
    case "linkedin":
      icon = <AiFillLinkedin />;
      className = "text-twitter hover:text-[#0072b1] text-3xl";
      break;
    case "github":
      icon = <AiFillGithub />;
      className = "text-github hover:text-gray-400 text-3xl";
      break;
    case "medium":
      icon = <AiFillMediumCircle />;
      className = "text-medium hover:text-gray-400 text-3xl";
      break;
    default:
      return null; // If type is not one of the expected values, don't render anything
  }

  return (
    <Link href={url} target="_blank">
      <span className={className}>{icon}</span>
    </Link>
  );
};

export default SocialIcons;
