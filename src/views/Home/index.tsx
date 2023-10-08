import { FC, useEffect, useState } from "react";
import TitleRow from "./TitleRow";
import { useLocation } from "react-router-dom";
import Content from "./Content";
import ImageSwitcher from "./ImageSwitcher";
import { Footer } from "./Footer";
import { Box } from "@mui/material";

const Home: FC = () => {
  let location = useLocation();
  useEffect(() => {
    /* console.log('scroll to top:', document.getElementsByTagName('body')[0]); */
    document.getElementsByTagName("html")[0].scrollTop = 0;
  }, [location]);

  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 1500);
  }, []);
  return (
    <Box
      sx={{
        minHeight: "100%",
        position: "absolute",
        width: "100vw",
        backgroundColor: "#F9F9F9",
      }}
    >
      <TitleRow />

      <ImageSwitcher />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "95%",
          maxWidth: "950px",
          margin: "auto",
          flexDirection: "column",
          opacity: show ? 1 : 0,
          transition: "opacity 2s",
        }}
      >
        <Content />
      </div>

      <Footer />
    </Box>
  );
};

export default Home;
