import Grid from "@mui/material/Grid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GaleryItem from "./GalleryItem";
import technologiesData from "../../../technologiesData";
import { GitHub } from "@mui/icons-material";
import { FormattedMessage } from "react-intl";
import { Box } from "@mui/material";

const styles = {
  outer: {
    textAlign: "center",
    width: "1000px",
    maxWidth: "100%",
    backgroundColor: "#F9F9F9",
    borderRadius: "30px",
    padding: "0rem 1rem",
    margin: "1rem 0rem 0rem",
    "@media (min-width: 600px)": {
      padding: "0px 50px",
      margin: "1rem 0rem 0rem",
    },
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
    "@media (min-width: 600px)": {
      padding: "0.75rem 0.41%",
      boxSizing: "border-box",
      width: "33.33%",
    },
  },
  galleryItemTitle: {
    fontSize: "1rem",
    marginBottom: "0.25rem",
    "@media (min-width: 600px)": {
      fontSize: "1.2rem",
      marginBottom: "0.25rem",
    },
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
    "@media (min-width: 600px)": {
      marginBottom: "3.5rem",
    },
  },
};

const Content = () => {
  return (
    <Grid container sx={styles.outer}>
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
            <Box component="a" href="tel:+385958576949" sx={styles.contactItem}>
              <PhoneIcon sx={styles.contactItemIcon} />
              <Box component="span" sx={styles.contactItemContent}>
                +385 95 857 6949
              </Box>
            </Box>
            <Box
              component="a"
              href="mailto:vrafaeli@gmail.com"
              sx={styles.contactItem}
            >
              <MailOutlineIcon sx={styles.contactItemIcon} />
              <Box component="span" sx={styles.contactItemContent}>
                ceo@istrability.hr
              </Box>
            </Box>
            {/* <Box component="a" href='https://www.facebook.com/istrability/' sx={styles.contactItem}>
                            <Box component="span" sx={styles.contactItemContent}>facebook.com/istrability</Box>
                            <FacebookIcon sx={styles.contactItemIcon} style={{ color: '#673ab7' }} />
                        </Box> */}
            <Box
              component="a"
              href="https://github.com/istrability"
              sx={styles.contactItem}
            >
              <GitHub sx={styles.contactItemIcon} />
              <Box component="span" sx={styles.contactItemContent}>
                github.com/istrability
              </Box>
            </Box>
            <Box
              component="a"
              /* href='https://www.google.hr/maps/@45.7918911,15.9551435,6.00z' */
              href="https://www.google.com/maps/place/Zagreb/@45.8401746,15.8942922,5z"
              target="_blank"
              rel="noopener noreferrer"
              sx={styles.contactItem}
            >
              <LocationOnIcon sx={styles.contactItemIcon} />
              <Box component="span" sx={styles.contactItemContent}>
                Zagreb, Croatia (UTC+1)
              </Box>
              {/* <div>(klikni za kartu)</div> */}
            </Box>
          </div>
        </div>
      </Grid>

      <Grid item xs={12} md={12} style={{ textAlign: "center" }}>
        <Box sx={styles.servicesWrapper}>
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
          <Box sx={styles.gallery}>
            {technologiesData.map((technology) => (
              <Box key={technology.id} sx={styles.galleryItem}>
                <Box sx={styles.galleryItemTitle}>{technology.name}</Box>
                <GaleryItem key={technology.id} data={technology} />
              </Box>
            ))}
          </Box>
        </Box>
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
