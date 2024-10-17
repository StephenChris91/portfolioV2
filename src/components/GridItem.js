import { useSpring, animated } from "react-spring";
import styles from "../styles/Home.module.css";

const GridItem = ({
  gridRowStart,
  gridRowEnd,
  gridColumnStart,
  gridColumnEnd,
  background,
  children,
  className,
}) => {
  const [animation, setAnimation] = useSpring(() => ({
    to: { transform: "translateY(0px)" },
    from: { transform: "translateY(-500px)" },
    delay: Math.floor(Math.random() * 1000),
    config: { friction: 20, tension: 100 },
  }));

  return (
    <animated.div
      style={{
        ...animation,
        gridRowStart,
        gridRowEnd,
        gridColumnStart,
        gridColumnEnd,
        background: background ? background : "",
      }}
      className={`${className} ${background ? styles.gridItem : ""}`}
    >
      {children}
    </animated.div>
  );
};

export default GridItem;
