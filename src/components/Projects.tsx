export default function Projects() {
  return (
    <section className="pt-20" id="projects">
      <h2 className="mb-8 text-center text-3xl lg:text-4xl">Projects</h2>
      <div className="space-y-8">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="relative flex flex-col lg:flex-row lg:items-center gap-4 px-24 group"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-auto object-cover rounded-3xl transition duration-500 group-hover:blur-sm"
                style={{ width: "300px", height: "200px" }}
              />
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <a
                  href={project.liveCodeLink}
                  target="_blank"
                  className="rounded-full bg-white px-6 py-2 text-black hover:bg-gray-300"
                >
                  Live Code
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  className="rounded-full bg-white px-6 py-2 text-black hover:bg-gray-300"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center pl-14 ">
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
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image:
      "https://images.unsplash.com/photo-1660739675626-bf7876d554cb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubLink: "https://github.com/shivPratap007/public-review",
  },
  {
    id: 2,
    name: "Event Finder",
    liveCodeLink: "https://event-finder-three.vercel.app/events/all?page=1",

    description:
      "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image:
      "https://images.unsplash.com/photo-1660739675626-bf7876d554cb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubLink: "https://github.com/shivPratap007",
  },
  {
    id: 3,
    name: "Task Management Tool",
    liveCodeLink: "https://todo-tracker-kappa.vercel.app/",

    description:
      "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
    image:
      "https://images.unsplash.com/photo-1660739675626-bf7876d554cb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubLink: "https://github.com/shivPratap007/todo-tracker",
  },
];
