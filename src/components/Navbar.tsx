import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav className="fixed left-0 right-0 top-4 z-50 ">
        <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-black-200 bg-black-20 py-3 backdrop-blur-lg lg:flex">
          <div className="flex items-center justify-between gap-6">
            <div>
              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-sm hover:text-grey"
                      onClick={(e) => handleClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          {/* mobile */}
          <div className="rounded-lg backdrop-blur-md lg:hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center ">
                <button
                  className="focus:outline-none lg:hidden "
                  onClick={toggleMobileMenu}
                >
                  {isMenuOpen ? (
                    <FaTimes className="h-6 w-5 m-2" />
                  ) : (
                    <FaBars className="m-2 h-6 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
          {isMenuOpen && (
            <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block w-full text-lg"
                    onClick={(e) => handleClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
}

const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
