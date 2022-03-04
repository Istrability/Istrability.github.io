import { useEffect, useState } from "react";

const AnimatedTextLetter = ({ letter, index, animate, speed }: any) => (
  <div
    style={{
      transform: `translateY(${animate ? "0" : "5"}rem)`,
      opacity: `${animate ? 1 : 0}`,
      transitionDelay: `${speed * index}ms`,
      transitionDuration: `${speed * 4}ms`,
      transitionTimingFunction: "ease-in-out",
      transitionProperty: "transform, opacity",
    }}
  >
    {letter === " " ? <span>&nbsp;</span> : letter}
  </div>
);

export const AnimatedText = ({
  children,
  delay = 0,
  speed = 100,
}: {
  children: string;
  delay?: number;
  speed?: number;
}) => {
  const [animate, setAnimate] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => setAnimate(true), delay);
  }, [delay]);
  const lettersComponents = [];
  for (let i = 0; i < children.length; i++) {
    lettersComponents.push(
      <AnimatedTextLetter
        key={i}
        letter={children[i]}
        index={i}
        speed={speed}
        animate={animate}
      />
    );
  }
  return <div style={{ display: "flex" }}>{lettersComponents}</div>;
};

export default AnimatedText;
