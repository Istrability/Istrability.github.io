import { makeStyles } from "@mui/styles";
import Flags from "country-flag-icons/react/3x2";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectLanguage,
  setLanguage,
} from "../../../features/language/languageSlice";
import logo from "../../../resources/logo6.png";
import { IconButton } from "@mui/material";

/* import SpreadMenu from './SpreadMenu'; */
/* import SidebarMenu from './SidebarMenu'; */

const useStyles = makeStyles({
  titleRow: {
    position: "sticky",
    top: "0rem",
    backgroundColor: "#0B0B18",
    width: "100%",
    padding: "0rem 1.5rem 0rem 1.2rem",
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
    columnGap: "1rem",
  },
  flag: {
    display: "block !important",
    width: "1.5rem",
    padding: "0 1px !important",
    borderRadius: "2px !important",
    "&:focus-visible": {
      outline: "1px solid white !important",
    },
  },
  title: {
    color: "#FFFFFE",
    fontSize: "1.5rem",
    fontWeight: "bold",
    // cursor: "pointer",
    userSelect: "none",
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
  image: {
    width: "3rem",
    height: "3rem",
    backgroundSize: "contain",
  },
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
      width: "1.6rem",
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
    image: {
      width: "4rem",
      height: "4rem",
    },
  },
});

const TitleRow =
  (/* { servicesClickHandler, contactClickHandler, logoClickedHandler, currentRoute } */) => {
    const classes = useStyles();
    const language = useAppSelector(selectLanguage);
    const dispatch = useAppDispatch();

    return (
      <>
        <div
          style={{ height: "1rem", backgroundColor: "#0B0B18", width: "100%" }}
        />
        <div className={classes.titlePlaceholder} />
        <div className={classes.titleRow}>
          {/* <Link to="/" className={classes.title}>
            <div
              className={classes.image}
              style={{
                backgroundImage: `url(${logo})`,
              }}
            />
            &nbsp;Istrability
          </Link> */}
          <div className={classes.title}>
            <div
              className={classes.image}
              style={{
                backgroundImage: `url(${logo})`,
              }}
            />
            &nbsp;Istrability
          </div>

          {/* <div className={classes.mdMenu}>
                    <SpreadMenu />
                </div> */}

          <div className={classes.xsMenu}>
            <IconButton
              className={classes.flag}
              style={{
                opacity: language === "en" ? 1 : 0.5,
              }}
              onClick={() => dispatch(setLanguage("en"))}
              disableFocusRipple={true}
            >
              <Flags.GB title={"English"} />
            </IconButton>
            <IconButton
              className={classes.flag}
              style={{
                opacity: language === "hr" ? 1 : 0.5,
              }}
              onClick={() => dispatch(setLanguage("hr"))}
              disableFocusRipple={true}
            >
              <Flags.HR title={"Hrvatski"} />
            </IconButton>
            <IconButton
              className={classes.flag}
              style={{ opacity: language === "it" ? 1 : 0.5 }}
              onClick={() => dispatch(setLanguage("it"))}
              disableFocusRipple={true}
            >
              <Flags.IT title={"Italiano"} />
            </IconButton>
            {/* <SidebarMenu /> */}
          </div>
        </div>
      </>
    );
  };

export default TitleRow;
