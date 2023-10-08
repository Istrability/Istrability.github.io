import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GaleryItem from "./GalleryItem";
import technologiesData from "../../../technologiesData";
import { GitHub } from "@mui/icons-material";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles((theme) => {
  return {
    outer: {
      textAlign: "center",
      width: "1000px",
      maxWidth: "100%",
      backgroundColor: "#F9F9F9",
      borderRadius: "30px",
      padding: "0rem 1rem",
      margin: "1rem 0rem 0rem",
    },
    gallery: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "flex-start",
    },
    galleryItem: {
      padding: "1rem 1% 1rem",
      display: "flex",
      flexDirection: "column",
      width: "48%",
    },
    galleryItemTitle: {
      fontSize: "1rem",
      marginBottom: "0.25rem",
    },
    contactItem: {
      margin: "0.8rem auto 0.6rem",
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      padding: "0 12px 0 6px",
    },
    contactItemIcon: {
      paddingRight: "5px",
      color: "black",
    },
    contactItemContent: {
      color: "rgb(0, 0, 238)",
    },
    servicesWrapper: {
      marginBottom: "2.5rem",
    },
    "@media (min-width: 600px)": {
      outer: {
        padding: "0px 50px",
        margin: "1rem 0rem 0rem",
      },
      servicesWrapper: {
        marginBottom: "3.5rem",
      },
      galleryItem: {
        padding: "0.75rem 0.41%",
        boxSizing: "border-box",
        width: "33.33%",
      },
      galleryItemTitle: {
        fontSize: "1.2rem",
        marginBottom: "0.25rem",
      },
    },
  };
});

const Content = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.outer}>
      <Grid item xs={false} md={1} />
      <Grid item xs={12} md={10} style={{ textAlign: "center" }}>
        <div style={{ marginTop: "2rem", marginBottom: "3.5rem" }}>
          <div
            style={{
              fontSize: "1.5rem",
              marginBottom: "1rem",
              fontWeight: "bold",
            }}
          >
            <FormattedMessage id="aboutUs" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ marginBottom: "1rem", textAlign: "center" }}>
              <FormattedMessage id="aboutUsContent1" />
            </div>
            <div style={{ marginBottom: "1rem", textAlign: "center" }}>
              <FormattedMessage id="aboutUsContent2" />
            </div>
          </div>
        </div>
      </Grid>

      <Grid item xs={12} md={12} style={{ textAlign: "center" }}>
        <div style={{ marginBottom: "4.5rem" }}>
          <div
            style={{
              fontSize: "1.5rem",
              marginBottom: "0.5rem",
              fontWeight: "bold",
            }}
          >
            <FormattedMessage id="contactAndLocation" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <a href="tel:+385958576949" className={classes.contactItem}>
              <PhoneIcon className={classes.contactItemIcon} />
              <span className={classes.contactItemContent}>
                +385 95 857 6949
              </span>
            </a>
            <a href="mailto:vrafaeli@gmail.com" className={classes.contactItem}>
              <MailOutlineIcon className={classes.contactItemIcon} />
              <span className={classes.contactItemContent}>
                vrafaeli@msn.com
              </span>
            </a>
            {/* <a href='https://www.facebook.com/istrability/' className={classes.contactItem}>
                            <span className={classes.contactItemContent}>facebook.com/istrability</span>
                            <FacebookIcon className={classes.contactItemIcon} style={{ color: '#673ab7' }} />
                        </a> */}
            <a
              href="https://github.com/istrability"
              className={classes.contactItem}
            >
              <GitHub className={classes.contactItemIcon} />
              <span className={classes.contactItemContent}>
                github.com/istrability
              </span>
            </a>
            <a
              /* href='https://www.google.hr/maps/@45.7918911,15.9551435,6.00z' */
              href="https://www.google.com/maps/place/Zagreb/@45.8401746,15.8942922,5z"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.contactItem}
            >
              <LocationOnIcon className={classes.contactItemIcon} />
              <span className={classes.contactItemContent}>
                Zagreb, Croatia (UTC+1)
              </span>
              {/* <div>(klikni za kartu)</div> */}
            </a>
          </div>
        </div>
      </Grid>

      <Grid item xs={12} md={12} style={{ textAlign: "center" }}>
        <div className={classes.servicesWrapper}>
          <div
            style={{
              fontSize: "1.5rem",
              marginBottom: "0.8rem",
              fontWeight: "bold",
            }}
          >
            <FormattedMessage id="productsAndServices" />
          </div>
          {/* <div style={{ fontSize: '0.8rem', marginBottom: '0rem', fontWeight: 'normal' }}>(for details click on the image)</div> */}
          <div className={classes.gallery}>
            {technologiesData.map((technology) => (
              <div key={technology.id} className={classes.galleryItem}>
                <div className={classes.galleryItemTitle}>
                  {technology.name}
                </div>
                <GaleryItem key={technology.id} data={technology} />
              </div>
            ))}
          </div>
        </div>
      </Grid>

      {/* <Grid item xs={12} md={12} style={{textAlign: 'center'}}>
                <div style={{marginBottom: '4rem'}}>
                    <div style={{fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 'bold'}}>Lokacija</div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div style={{marginBottom: '1rem'}}>Adresa: Zagrebačka 123, 10000 Zagreb</div>
                        <MapContainer style={{width: '100%', height: '400px'}} />
                    </div>
                </div>
            </Grid> */}
    </Grid>
  );
};

export default Content;
