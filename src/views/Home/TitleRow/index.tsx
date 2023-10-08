import Flags from "country-flag-icons/react/3x2";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectLanguage,
  setLanguage,
} from "../../../features/language/languageSlice";
import logo from "../../../resources/logo6.png";
import { Box, IconButton } from "@mui/material";

/* import SpreadMenu from './SpreadMenu'; */
/* import SidebarMenu from './SidebarMenu'; */

const styles = {
  mdMenu: {
    display: "none",
    "@media (min-width: 960px)": {
      //display: 'flex',
      //flexDirection: 'row',
      //justifyContent: 'right',
    },
  },
  xsMenu: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    columnGap: "1rem",
    "@media (min-width: 960px)": {
      // display: "none",
    },
  },
  flag: {
    display: "block !important",
    width: "1.5rem",
    padding: "0 1px !important",
    borderRadius: "2px !important",
    "&:focus-visible": {
      outline: "1px solid white !important",
    },
    "@media (min-width: 960px)": {
      width: "1.6rem",
    },
  },
  title: {
    color: "#FFFFFE",
    fontSize: "1.5rem",
    fontWeight: "bold",
    userSelect: "none",
    textDecoration: "none",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "@media (min-width: 960px)": {
      fontSize: "1.8rem",
    },
  },
  titleIcon: {
    fontSize: "1.2rem",
    "@media (min-width: 960px)": {
      fontSize: "1.8rem",
    },
  },
  image: {
    width: "3rem",
    height: "3rem",
    backgroundSize: "contain",
    "@media (min-width: 960px)": {
      width: "4rem",
      height: "4rem",
    },
  },
};

const TitleRow =
  (/* { servicesClickHandler, contactClickHandler, logoClickedHandler, currentRoute } */) => {
    const language = useAppSelector(selectLanguage);
    const dispatch = useAppDispatch();

    return (
      <>
        <div
          style={{ height: "1rem", backgroundColor: "#0B0B18", width: "100%" }}
        />
        <Box
          sx={{
            height: "1rem",
            top: "4rem",
            backgroundColor: "#0B0B18",
            position: "absolute",
            //zIndex: 1000,
            width: "100%",
            "@media (min-width: 960px)": {
              top: "5rem",
            },
          }}
        />
        <Box
          sx={{
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
            // boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',

            "@media (min-width: 960px)": {
              height: "4rem",
              paddingRight: "3.5rem",
            },
          }}
        >
          {/* <Link to="/" sx={styles.title}>
            <Box
              sx={styles.image}
              style={{
                backgroundImage: `url(${logo})`,
              }}
            />
            &nbsp;Istrability
          </Link> */}
          <Box sx={styles.title}>
            <Box
              sx={styles.image}
              style={{
                backgroundImage: `url(${logo})`,
              }}
            />
            &nbsp;Istrability
          </Box>

          {/* <Box styles={styles.mdMenu}>
                    <SpreadMenu />
                </Box> */}

          <Box sx={styles.xsMenu}>
            <IconButton
              sx={styles.flag}
              style={{
                opacity: language === "en" ? 1 : 0.5,
              }}
              onClick={() => dispatch(setLanguage("en"))}
              disableFocusRipple={true}
            >
              <Flags.GB title={"English"} />
            </IconButton>
            <IconButton
              sx={styles.flag}
              style={{
                opacity: language === "hr" ? 1 : 0.5,
              }}
              onClick={() => dispatch(setLanguage("hr"))}
              disableFocusRipple={true}
            >
              <Flags.HR title={"Hrvatski"} />
            </IconButton>
            <IconButton
              sx={styles.flag}
              style={{ opacity: language === "it" ? 1 : 0.5 }}
              onClick={() => dispatch(setLanguage("it"))}
              disableFocusRipple={true}
            >
              <Flags.IT title={"Italiano"} />
            </IconButton>
            {/* <SidebarMenu /> */}
          </Box>
        </Box>
      </>
    );
  };

export default TitleRow;
