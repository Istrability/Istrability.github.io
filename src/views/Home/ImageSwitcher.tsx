import { useEffect, useState } from "react";
import titleComposed1 from "../../resources/office3.jpg";
import titleComposed2 from "../../resources/office2.jpg";
import titleComposed3 from "../../resources/office1.jpg";
/* import titleComposed4 from "../../resources/titleComposed1.jpg";
import titleComposed5 from "../../resources/titleComposed2.jpg"; */
import { useIntl } from "react-intl";
import AnimatedText from "../../components/AnimatedText";
import { Box } from "@mui/material";

const overlay =
  "linear-gradient(to bottom, rgba(0, 0, 10, 0.8), rgba(0,0,0,0), rgba(255, 255, 255, 0.2))";

const styles = {
  imageContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "1rem",
    height: "60vh",
    textAlign: "center",
    width: "100%",
    //border: '5px solid black',
    borderLeft: "0px solid black",
    borderRight: "0px solid black",
    boxSizing: "content-box",
    position: "relative",
    background: "black",

    "@media (min-width: 960px)": {
      marginTop: "1rem",
      marginBottom: "0.5rem",
    },
  },
  image: {
    filter: "brightness(95%)",
    width: "100%",
    height: "100%",
    backgroundRepeat: "repeat-x",
    backgroundSize: "240vh 80vh",
    backgroundPosition: "50%",
    transition: "opacity 2s ease-in-out",
    position: "absolute",
  },
  textContainer: {
    position: "absolute",
    zIndex: 50,
    color: "white",
    fontSize: "2rem",
    width: "100%",
    height: "100%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

const ImageSwitcher = () => {
  const [frontImageIndex, setFrontImageIndex] = useState<number>(0);
  const t = useIntl();
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFrontImageIndex((frontImageIndex + 1) % 3);
    }, 6500);

    return () => clearTimeout(timeout);
  }, [frontImageIndex]);

  return (
    <Box sx={styles.imageContainer}>
      <Box
        sx={styles.image}
        style={{
          backgroundImage: `${overlay}, url(${titleComposed1})`,
          backgroundColor: "#080814",
          opacity: frontImageIndex === 0 ? 1 : 0,
        }}
      />
      <Box
        sx={styles.image}
        style={{
          backgroundImage: `${overlay}, url(${titleComposed2})`,
          backgroundColor: "#080814",
          opacity: frontImageIndex === 1 ? 1 : 0,
        }}
      />
      <Box
        sx={styles.image}
        style={{
          backgroundImage: `${overlay}, url(${titleComposed3})`,
          backgroundColor: "#080814",
          opacity: frontImageIndex === 2 ? 1 : 0,
        }}
      />
      <Box sx={styles.textContainer}>
        <div
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "2rem",
            marginTop: "-4rem",
          }}
        >
          <AnimatedText speed={80}>Istrability</AnimatedText>
        </div>
        <div>
          {/* <FormattedMessage id="title" /> */}
          <AnimatedText delay={900} speed={50}>
            {t.formatMessage({ id: "title" })}
          </AnimatedText>
        </div>
      </Box>
    </Box>
  );
};

export default ImageSwitcher;
