import react from "./resources/react.png";
import nodejs from "./resources/nodejs.png";
import redux from "./resources/redux.png";
import materialui from "./resources/materialui.png";
import css from "./resources/css.png";
import html from "./resources/html5.svg";
import rust from "./resources/rust.gif";
import linux from "./resources/linux99.png";

const technologiesData = [
  {
    id: "React",
    name: "React",
    description: `asd`,
    imageUrl: react,
    links: [],
    innerStyle: {
      animation: "spin 20s linear infinite",
    },
  },
  {
    id: "Redux",
    name: "Redux",
    description: `asd`,
    imageUrl: redux,
    links: [],
  },
  {
    id: "Material UI",
    name: "Material UI",
    description: `asd`,
    imageUrl: materialui,
    links: [],
    innerStyle: {
      backgroundSize: "contain",
    },
  },
  {
    id: "HTML 5",
    name: "HTML 5",
    description: `HTML 5`,
    imageUrl: html,
    links: [],
    innerStyle: {
      scale: "0.74",
      backgroundSize: "contain",
    },
  },
  {
    id: "NodeJS",
    name: "NodeJS",
    description: `asd`,
    imageUrl: nodejs,
    links: [],
  },
  {
    id: "CSS 3",
    name: "CSS 3",
    description: `CSS 3`,
    imageUrl: css,
    links: [],
    innerStyle: {
      animation: "spin2 10s cubic-bezier(0, 0.91, 1, 0.03) infinite",
    },
  },
  {
    id: "Rust",
    name: "Rust",
    description: `Rust`,
    imageUrl: rust,
    links: [],
    innerStyle: {
      scale: "0.825",
    },
  },
  {
    id: "Linux",
    name: "Linux",
    description: `Linux`,
    imageUrl: linux,
    links: [],
    innerStyle: {
      scale: "0.8",
      backgroundSize: "contain",
    },
  },
];

export default technologiesData;
