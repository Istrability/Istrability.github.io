import React from 'react';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

/* import SpreadMenu from './SpreadMenu'; */
import SidebarMenu from './SidebarMenu';
import ImageSwitcher from './ImageSwitcher';

const useStyles = makeStyles({
  titleRow: {
    position: 'sticky',
    top: '0rem',
    backgroundColor: '#223',
    width: '100%',
    padding: '0rem 1.5rem 0rem 1.5rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#FFFFFE',
    height: '3rem',
    boxSizing: 'border-box',
    zIndex: 100,
  },
  titlePlaceholder: {
    height: '4rem',
    backgroundColor: '#223',
    position: 'absolute',
    width: '100%',
  },
  mdMenu: {
    display: 'none',
  },
  xsMenu: {
  },
  title: {
    color: '#FFFFFE',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleIcon: {
    fontSize: '1.2rem',
  },
  /* '@media (min-width: 600px)': {
      
  }, */
  '@media (min-width: 960px)': {
    titleRow: {
      height: '4rem',
      paddingRight: '3.5rem',
    },
    titlePlaceholder: {
      height: '5rem',
    },
    title: {
      fontSize: '2.3rem',
    },
    mdMenu: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'right',
      alignItems: 'center'
    },
    /* xsMenu: {
        display: 'none',
    }, */
    titleIcon: {
      fontSize: '1.8rem',
    },
  },
});


const TitleRow = (/* { servicesClickHandler, contactClickHandler, logoClickedHandler, currentRoute } */) => {
  const classes = useStyles();

  return (
    <>
      <div style={{ height: '1rem', backgroundColor: '#223', width: '100%' }} />
      <div className={classes.titlePlaceholder} />
      <div className={classes.titleRow}>
        <Link
          to='/'
          className={classes.title}
        >
          Istrability
        </Link>

        {/* <div className={classes.mdMenu}>
                    <SpreadMenu />
                </div> */}

        <div className={classes.xsMenu}>
          <SidebarMenu />
        </div>
      </div>

      <ImageSwitcher />
    </>
  );
};

export default TitleRow;

