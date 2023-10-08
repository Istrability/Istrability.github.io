import { useEffect, useState } from "react";
import TitleRow from "./TitleRow";
import { makeStyles } from "@mui/styles";
import { useLocation } from "react-router-dom";
import Content from "./Content";
import ImageSwitcher from "./ImageSwitcher";
import { Footer } from "./Footer";

const useStyles = makeStyles((theme) => {
  return {
    outer: {
      minHeight: "100%",
      position: "absolute",
      width: "100vw",
      backgroundColor: "#F9F9F9",
    },
    //[theme.breakpoints.up('sm')/* '@media (min-width: 600px)' */]: {
    //},
  };
});

const Home = () => {
  const classes = useStyles();

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
    <div className={classes.outer}>
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
    </div>
  );
};

export default Home;
