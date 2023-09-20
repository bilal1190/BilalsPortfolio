import { DiReact } from "react-icons/di";
import {AiTwotoneApi} from "react-icons/ai";
import {PiFigmaLogoDuotone} from "react-icons/pi";
import {TbBrandNextjs} from "react-icons/tb";
import {BiLogoMongodb} from "react-icons/bi";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


const Working = [
    {
      title: "React.js MeanSTack Developer",
      icon: <DiReact />,
      iconBg: "#3180bc",
      date: "Jan 2021 - April 2022",
      points: [
        "Developing and maintaining web applications using MERN Stack and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
    title: "Rest Api Integration",
      icon: <AiTwotoneApi  />,
      iconBg: "#b4a7d6",
      date: "Jan 2022 - July 2022",
      points: [
        "Developing and maintaining API's in different Projects.",
        "Its is very critial to integrate and maintain the API's functionality in our project",
        "Function is the foundation of successful APIs.",
       
      ],
    },
    {
      title: "UI/UX Designs Projects",
      icon: <PiFigmaLogoDuotone/>,
      iconBg: "#3180bc",
      date: "April 2022 - Sept 2022",
      points: [
        "As a UI and UX  designer experience earn the expertise, skills, and knowledge.",
        "As a designer ability to create visually appealing and aesthetically pleasing user interfaces is a key aspect of their experience.",
      ],
    },
    {
      title: "MongoDB Data Professionals",
      icon: <BiLogoMongodb />,
      iconBg: "#b4a7d6",
      date: "March 2022 - Present",
      points: [
        "As a MongoDB Data Professional, I bring expertise in handling and managing data within MongoDB, a leading NoSQL database system.",
        "I have a proven track record of implementing and maintaining MongoDB databases.",
        "I am skilled in performance tuning and troubleshooting, ensuring optimal database performance.",
      ],
    },
    {
      title: "Nextjs Fullstack Developer",
      company_name: "Meta",
      icon: <TbBrandNextjs/>,
      iconBg: "#3180bc",
      date: "May 2023 - Present",
      points: [
        "Developing and maintaining web applications using Next.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  export default Working;
  