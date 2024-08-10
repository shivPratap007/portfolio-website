import {motion} from "framer-motion";
const HERO = {
  name: "SHIV PRATAP",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a decade.",
};

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-wrap items-center">
      <motion.div className="w-full md:w-1/2"
      initial={{opacity:0,x:-50}}
      animate={{opacity:1,x:0}}
      transition={{duration:1}}
      >
        <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]">
          {HERO.name}
        </h2>
        <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
          {HERO.greet}
        </p>
        <p className="mb-8 p-2 text-xl">{HERO.description}</p>
      </motion.div>
      <motion.div className="w-full md:w-1/2 lg:p-8"
        initial={{opacity:0,scale:.8}}
        animate={{opacity:1,scale:1}}
        transition={{duration:1}}
      >
        <div className="flex justify-center">
          <motion.img
           initial={{opacity:0}}
           animate={{opacity:1}}
           transition={{duration:1}}
            src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width={300}
            height={300}
            className="rounded-md"
          />
        </div>
      </motion.div>
      <a href="https://res.cloudinary.com/ddldrbyl2/image/upload/v1723300047/new-resume_ht2sbh.pdf" target="_blank">
        <button className="rounded bg-black text-white p-4 m-2 font-bold">
          Download CV
        </button>
      </a>
    </section>
  );
}
