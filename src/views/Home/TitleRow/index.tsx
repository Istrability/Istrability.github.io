import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import Flags from "country-flag-icons/react/3x2";

/* import SpreadMenu from './SpreadMenu'; */
/* import SidebarMenu from './SidebarMenu'; */

const useStyles = makeStyles({
  titleRow: {
    position: "sticky",
    top: "0rem",
    backgroundColor: "#0B0B18",
    width: "100%",
    padding: "0rem 1.5rem 0rem 1.5rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#FFFFFE",
    height: "3rem",
    boxSizing: "border-box",
    zIndex: 100,
    // boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)'
  },
  titlePlaceholder: {
    height: "1rem",
    top: "4rem",
    backgroundColor: "#0B0B18",
    position: "absolute",
    //zIndex: 1000,
    width: "100%",
  },
  mdMenu: {
    display: "none",
  },
  xsMenu: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  flag: {
    width: "1.4rem",
  },
  title: {
    color: "#FFFFFE",
    fontSize: "1.5rem",
    // fontWeight: 'bold',
    cursor: "pointer",
    textDecoration: "none",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  titleIcon: {
    fontSize: "1.2rem",
  },
  /* '@media (min-width: 600px)': {
      
  }, */
  "@media (min-width: 960px)": {
    titleRow: {
      height: "4rem",
      paddingRight: "3.5rem",
    },
    titlePlaceholder: {
      top: "5rem",
    },
    title: {
      fontSize: "1.8rem",
    },
    flag: {
      width: "1.5rem",
      cursor: "pointer",
    },
    mdMenu: {
      //display: 'flex',
      //flexDirection: 'row',
      //justifyContent: 'right',
    },
    /* xsMenu: {
        display: 'none',
    }, */
    titleIcon: {
      fontSize: "1.8rem",
    },
  },
});

const TitleRow =
  (/* { servicesClickHandler, contactClickHandler, logoClickedHandler, currentRoute } */) => {
    const classes = useStyles();
    const [language, setLanguage] = useState("US");

    return (
      <>
        <div
          style={{ height: "1rem", backgroundColor: "#0B0B18", width: "100%" }}
        />
        <div className={classes.titlePlaceholder} />
        <div className={classes.titleRow}>
          <Link to="/" className={classes.title}>
            Istrability
          </Link>

          {/* <div className={classes.mdMenu}>
                    <SpreadMenu />
                </div> */}

          <div className={classes.xsMenu}>
            <div
              className={classes.flag}
              style={{
                marginRight: "1rem",
                opacity: language === "US" ? 1 : 0.5,
              }}
              onClick={() => setLanguage("US")}
            >
              <Flags.US title={"English"} />
            </div>
            <div
              className={classes.flag}
              style={{
                marginRight: "1rem",
                opacity: language === "HR" ? 1 : 0.5,
              }}
              onClick={() => setLanguage("HR")}
            >
              <Flags.HR title={"Hrvatski"} />
            </div>
            <div
              className={classes.flag}
              style={{ opacity: language === "IT" ? 1 : 0.5 }}
              onClick={() => setLanguage("IT")}
            >
              <Flags.IT title={"Italiano"} />
            </div>
            {/* <SidebarMenu /> */}
          </div>
        </div>
      </>
    );
  };

export default TitleRow;
