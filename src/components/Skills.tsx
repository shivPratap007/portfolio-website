import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export default function Skills() {
  return (
    <div className="container mx-auto" id="skills">
      <h2 className="mb-12 mt-20 text-center text-4xl font-semibold">Skills</h2>
      <div className="mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border border-black-100">
        {SKILLS.map((skills, index) => (
          <div
            key={index}
            className={`py-6 flex items-center justify-between ${
              index !== SKILLS.length - 1 ? "border-b border-black-100" : ""
            }`}
          >
            <div className="flex items-center">
              {skills.icon}
              <h3 className="px-6 text-lg lg:text-2xl">{skills.name}</h3>
            </div>
            <div className="text-md font-semibold lg:text-xl">
              <span>{skills.experience}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "2 years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-black lg:text-5xl" />,
    name: "Next.js",
    experience: "1 year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "2 years",
  },

  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2 years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "1 year",
  },
];
