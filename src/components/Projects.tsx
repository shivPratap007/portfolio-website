export default function Projects() {
  return (
    <section className="pt-20" id="projects">
      <h2 className="mb-8 text-center text-3xl lg:text-4xl">Projects</h2>
      <div className="flex items-center justify-center flex-col">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="relative flex flex-col lg:flex-row lg:items-center gap-4 lg:px-24"
          >
            <div className="relative group">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-auto object-cover rounded-3xl transition duration-500 group-hover:blur-sm"
                style={{ width: "300px", height: "200px" }}
              />
              <div className="absolute inset-0 flex items-center justify-center  gap-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <a
                  href={project.liveCodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-6 py-2 text-black hover:bg-gray-300"
                >
                  Live Code
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-6 py-2 text-black hover:bg-gray-300"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="w-full lg:w-2/3 flex flex-col justify-center lg:pl-8">
              <h3 className="mb-2 text-2xl font-semibold">{project.name}</h3>
              <p className="mb-4">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    id: 1,
    name: "Public Review",
    liveCodeLink: "https://public-review.vercel.app/",
    description:
      "This application provides users with an interactive platform to submit and browse public reviews. The application showcases a comprehensive list of all submitted reviews, allowing users to access a diverse range of public opinions and feedback. The app includes a robust filter functionality that enables users to streamline their review search process by topics.",
    image:
      "https://images.unsplash.com/photo-1660739675626-bf7876d554cb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubLink: "https://github.com/shivPratap007/public-review",
  },
  {
    id: 2,
    name: "Event Finder",
    liveCodeLink: "https://event-finder-three.vercel.app/events/all?page=1",
    description:
      "The event finder application leverages Next.js server-side rendering capabilities to ensure fast initial page loads and improved SEO performance. The application features intuitive and responsive user interfaces, providing users with a seamless browsing experience across various devices. This architecture enhances performance and security by centralizing backend operations.",
    image:
      "https://images.unsplash.com/photo-1660739675626-bf7876d554cb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubLink: "https://github.com/shivPratap007",
  },
  {
    id: 3,
    name: "Task Management Tool",
    liveCodeLink: "https://todo-tracker-kappa.vercel.app/",
    description:
      "The Task Management Application is designed to help users efficiently manage and track their daily tasks with ease. It allows you to quickly add tasks to your to-do list and mark them as complete once they are done. The application features a one-click option to mark all tasks as complete or incomplete, making it simple to manage large lists.",
    image:
      "https://images.unsplash.com/photo-1660739675626-bf7876d554cb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubLink: "https://github.com/shivPratap007/todo-tracker",
  },
];
