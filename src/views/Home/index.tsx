import { useEffect } from "react";
import TitleRow from "./TitleRow";
import { makeStyles } from "@mui/styles";
import { useLocation } from "react-router-dom";
import Content from "./Content";
import ImageSwitcher from "./ImageSwitcher";

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
        }}
      >
        <Content />
      </div>

      <div
        style={{
          width: "100%",
          backgroundColor: "#0B0B18",
          color: "white",
          fontSize: "0.9rem",
          textAlign: "center",
          padding: "3px",
          boxSizing: "border-box",
        }}
      >
        &copy; Istrability, 2019-
        {new Date()
          .toLocaleDateString("sv-SE", { timeZone: "Europe/Zagreb" })
          .substring(0, 4)}
      </div>
    </div>
  );
};

export default Home;
