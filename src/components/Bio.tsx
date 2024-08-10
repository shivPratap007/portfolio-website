export default function Bio() {
    return (
      <section className="flex w-full flex-col  pt-20" id="bio">
          <h2 className=" text-center text-3xl lg:text-4xl">
              Bio
          </h2>
          <div className=" p-6 mx-auto max-w-3xl">
                  {
                      BIO.map((bio, index) => (
                          <p key={index} className="mb-4 text-lg lg:text-xl">{bio}</p>
                      ))
                  }
              </div>
      </section>
    )
  }
  
  const BIO = [
      "I am a passionate and driven full-stack web developer with a solid foundation in both front-end and back-end technologies. I am currently pursuing a Bachelor of Technology in Computer Science Engineering with a minor in Artificial Intelligence and Machine Learning from the Academy of Business and Engineering Sciences.",
      "My technical proficiency spans various languages and frameworks, including JavaScript, TypeScript, React, Redux, and Next.js. I am also experienced in using Docker for containerization, which ensures consistent development environments. I have honed my skills through projects like Public Review, Event Finder, and Job Portal, where I developed and maintained user-friendly applications with robust features such as secure data handling, responsive design, and seamless user experience.",
      "I thrive in collaborative environments and enjoy working on challenging projects that allow me to apply my knowledge and creativity. My goal is to continue growing as a developer, contributing to innovative solutions, and leveraging AI to enhance web applications.",
  ];
  