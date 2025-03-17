import { motion } from "framer-motion";
export default function Projects() {
  return (
    <section className="pt-20" id="projects">
      <motion.h2
        className="mb-8 text-center text-3xl lg:text-4xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>
      <div className="flex items-center justify-center flex-col">
        {PROJECTS.map((project) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1 }}
            key={project.id}
            className="relative flex flex-col lg:flex-row lg:items-center gap-4 lg:px-24 mb-8"
          >
            <div className="relative group">
              <div className=" flex items-center justify-center ">
                <motion.img
                  whileHover={{ scale: 1 }}
                  src={project.image}
                  alt={project.name}
                  className="w-full h-auto object-cover rounded-3xl  transition duration-500 group-hover:blur-sm"
                  style={{ width: "300px", height: "200px" }}
                />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center  gap-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              >
                <a
                  href={project.liveCodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-6 py-2 text-black hover:bg-gray-300"
                >
                  Live
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-6 py-2 text-black hover:bg-gray-300"
                >
                  GitHub
                </a>
              </motion.div>
            </div>
            <div className="w-full lg:w-2/3 flex flex-col justify-center lg:pl-8">
              <h3 className="mb-2 text-2xl font-semibold">{project.name}</h3>
              <p className="mb-4">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    id: 1,
    name: "Gift Ginnie",
    liveCodeLink: "https://giftginnie.com",
    description:
      "This is a ecommerce application which is being used in the real world. You can buy the products from here according to the need. It is build using react so it leverages the single page application features of react and with the help or react query the features of caching is also present in this.",
    image: "giftginnie.png",
    githubLink: "https://github.com/shivPratap007",
  },
  {
    id: 2,
    name: "Personal Finance",
    liveCodeLink: "https://personal-finance-2yqk.vercel.app/transactions",
    description:
      "The personal finance application leverages Next.js server-side rendering capabilities to ensure fast initial page loads and improved SEO performance. The application features intuitive and responsive user interfaces, providing users with a seamless browsing experience across various devices. This architecture enhances performance and security by centralizing backend operations.",
    image: "personalFinance.png",
    githubLink: "https://github.com/shivPratap007/Personal_Finance/",
  },
  {
    id: 3,
    name: "Dashboard for management",
    liveCodeLink: "https://assignment-01-git-main-shivpratap007s-projects.vercel.app/",
    description:
      "The Dashboard Application is designed to help users efficiently manage and track their daily tasks with ease. It allows you to quickly add tasks. You can put different categories and tasks under them you can even customize it as you need.",
    image:
      "dashboard.png",
    githubLink: "https://github.com/shivPratap007/assignment-01/tree/main",
  },
];
