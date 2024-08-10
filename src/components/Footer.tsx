import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="mb-8 mt-20">
      <div className="flex items-center justify-center">
        <img src={logo} alt="logo" width={100} className="my-20" />
      </div>
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a href={link.href} key={index} target="_blank">
            {link.icon}
          </a>
        ))}
      </div>
      <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
        Made with ❤️ by Shiv Pratap
      </p>
    </div>
  );
}

const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/ShivPra11774746",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/shivPratap007",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/shiv-pratap-singh-waghel-23b925289/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
