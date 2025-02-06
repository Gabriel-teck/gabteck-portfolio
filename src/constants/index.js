import project1 from "../assets/projects/e-commerce.png";
import project2 from "../assets/projects/vanlife.png";
import project3 from "../assets/projects/pizza.png";
import project4 from "../assets/projects/kick-fit.png";

export const HERO_CONTENT = `I am a passionate Frontend developer with a passion for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as technologies like Javascript, Typescript, Redux, TailwindCSS, Bootstrap. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Frontend developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional and handons experience, I have worked with a variety of technologies, including React, Next.js, Firebase. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, exploring nature and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Frontend Developer",
    company: "UGO-Services",
    description: `Contributed to the designing and development of dynamic, responsive web applications using modern technologies.`,
    technologies: [
      "Reactjs",
      "Redux",
      "Firebase",
      "TailwindCSS",
      "Javascript",
      "Nextjs",
    ],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "I designed and developed an e-commerce platform using React, Redux, and TailwindCSS, ensuring a seamless user experience, efficient state management, responsive UI, and robust cart management with Redux.",
    technologies: ["React", "React-Router", "TailwindCSS", "Redux"],
  },
  {
    title: "Van Rental Platform",
    image: project2,
    description:
      "I developed a van rental platform using React, Firestore/Firebase, CSS, and React Router, enabling seamless booking and management of van rentals with a user-friendly interface.  ",
    technologies: ["CSS", "Reactjs", "React-Router", "Firebase"],
  },
  {
    title: "Pizza Delivery Platform",
    image: project3,
    description:
      "I developed a full-featured pizza delivery platform using React.js, implementing user authentication with Firebase, Google Maps integration for location handling, and a cart management system using Redux for efficient order management. ",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "React-Router",
      "Redux",
      "Google Maps",
    ],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "I designed and developed a sleek, responsive blog inspired by Nike’s branding using React and TailwindCSS. Focused on modern UI/UX principles, smooth animations, and performance optimization for a seamless user experience. ",
    technologies: ["HTML", "CSS", "Reactjs", "TailwindCSS"],
  },
];

export const CONTACT = {
  address: "No 7 Shulem Close, Asaba Delta state. ",
  phoneNo: "+234 807 042 9049",
  email: "careers.gabriel@gmail.com",
};
