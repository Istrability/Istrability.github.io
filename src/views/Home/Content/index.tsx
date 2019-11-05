import React from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DiagnosisThumbnail from '../DiagnosisThumbnail';
import diagnosesData from '../../../diagnosesData';
import { GitHub } from '@mui/icons-material';

const useStyles = makeStyles(theme => {
    return ({
        outer: {
            textAlign: 'center',
            width: '1000px',
            maxWidth: '100%',
            backgroundColor: '#F9F9F9',
            borderRadius: '30px',
            padding: '0rem 1rem',
            margin: '1rem 0rem 0rem',
        },
        gallery: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
        },
        galleryItem: {
            padding: '1rem 1% 1rem',
            display: 'flex',
            flexDirection: 'column',
            width: '48%',
        },
        galleryItemTitle: {
            fontSize: '1rem',
            marginBottom: '0.5rem',
        },
        contactItem: {
            margin: '0.8rem auto 0.6rem',
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
        },
        contactItemIcon: {
            paddingRight: '5px',
            color: 'black',
        },
        contactItemContent: {
            color: 'rgb(0, 0, 238)',
        },
        servicesWrapper: {
            marginBottom: '2.5rem',
        },
        '@media (min-width: 600px)': {
            outer: {
                padding: '0px 50px',
                margin: '1rem 0rem 0rem',
            },
            servicesWrapper: {
                marginBottom: '3.5rem',
            },
            galleryItem: {
                padding: '0.5rem 0.41%',
                boxSizing: 'border-box',
                width: '33.33%',
            },
            galleryItemTitle: {
                fontSize: '1.2rem',
                marginBottom: '0.5rem',
            },
        },
    });
});

const Content = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.outer}>

            <Grid item xs={false} md={1} />
            <Grid item xs={12} md={10} style={{ textAlign: 'center', }}>
                <div style={{ marginTop: '0.5rem', marginBottom: '1.8rem' }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>About us</div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}>
                        <div style={{ marginBottom: '1rem', textAlign: 'justify' }}>
                            {`Istrability is a software development company that is actively developing Web applications (and other software) for the last two years. With strong expert knowledge it can help you optimize your business processes and realize your digital ideas.`}
                        </div>
                        <div style={{ marginBottom: '1rem', textAlign: 'justify' }}>
                            {`Our area of expertize is building frontend part of Web applications (in React), backend part of Web applications and scripting (in NodeJS), whole Web applications, and system applications (in Rust).`}
                        </div>
                    </div>
                </div>
            </Grid>


            <Grid item xs={12} md={12} style={{ textAlign: 'center' }}>
                <div style={{ marginBottom: '3rem' }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Contact &amp; Location</div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}>
                        <a href='tel:+385958576949' className={classes.contactItem} style={{display: 'flex', alignItems: 'center'}}>
                            <PhoneIcon className={classes.contactItemIcon} />
                            <span className={classes.contactItemContent}>+385 95 857 6949</span>
                        </a>
                        <a href='mail:istrability@gmail.com' className={classes.contactItem}>
                            <MailOutlineIcon className={classes.contactItemIcon} />
                            <span className={classes.contactItemContent}>vrafaeli@msn.com</span>
                        </a>
                        {/* <a href='https://www.facebook.com/istrability/' className={classes.contactItem}>
                            <span className={classes.contactItemContent}>facebook.com/istrability</span>
                            <FacebookIcon className={classes.contactItemIcon} style={{ color: '#673ab7' }} />
                        </a> */}
                        <a href='https:/github.com/croraf/' className={classes.contactItem}>
                            <GitHub className={classes.contactItemIcon} />
                            <span className={classes.contactItemContent}>github.com/croraf</span>
                        </a>
                        <a
                            /* href='https://www.google.hr/maps/@45.7918911,15.9551435,6.00z' */
                            href='https://www.google.com/maps/place/Zagreb/@46.1928931,11.0642306,6z'
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.contactItem}
                        >
                            <LocationOnIcon className={classes.contactItemIcon} />
                            <span className={classes.contactItemContent}>Zagreb, Croatia (UTC+1)</span>
                            {/* <div>(klikni za kartu)</div> */}
                        </a>
                    </div>
                </div>
            </Grid>


            <Grid item xs={12} md={12} style={{ textAlign: 'center' }}>
                <div className={classes.servicesWrapper}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '0.8rem', fontWeight: 'bold' }}>Products &amp; Services</div>
                    {/* <div style={{ fontSize: '0.8rem', marginBottom: '0rem', fontWeight: 'normal' }}>(for details click on the image)</div> */}
                    <div className={classes.gallery}>
                        {diagnosesData.map(diagnosisData => (
                            <div
                                key={diagnosisData.id}
                                className={classes.galleryItem}
                            >
                                <div className={classes.galleryItemTitle}>{diagnosisData.name}</div>
                                <DiagnosisThumbnail key={diagnosisData.id} diagnosisData={diagnosisData} />
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
