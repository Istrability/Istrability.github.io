import React, { useEffect, useState } from 'react';

import titleComposed1 from '../../../resources/titleComposed1.jpg';
import titleComposed2 from '../../../resources/titleComposed2.jpg';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  imageContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '2rem',
    height: '30vh',
    textAlign: 'center',
    width: '100%',
    border: '5px solid black',
    borderLeft: '0px solid black',
    borderRight: '0px solid black',
    boxSizing: 'content-box',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundRepeat: 'repeat-x',
    backgroundSize: '140vh 30vh',
    backgroundPosition: '50%',
    transition: 'opacity 2s ease-in-out',
    position: 'absolute',
  },
  /* '@media (min-width: 600px)': {
      
  }, */
  '@media (min-width: 960px)': {
    imageContainer: {
      marginTop: '2rem',
      marginBottom: '0.5rem',
    },
  },
});

const ImageSwitcher = () => {
  const classes = useStyles();
  const [frontImageIndex, setFrontImageIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFrontImageIndex((frontImageIndex + 1) % 2);
    }, 6500);

    return () => clearTimeout(timeout);
  }, [frontImageIndex]);

  return (
    <div className={classes.imageContainer}>
      <div className={classes.image} style={{ backgroundImage: `url(${titleComposed1})`, backgroundColor: '#223', opacity: frontImageIndex === 0 ? 1 : 0 }} />
      <div className={classes.image} style={{ backgroundImage: `url(${titleComposed2})`, backgroundColor: '#223', opacity: frontImageIndex === 1 ? 1 : 0 }} />
    </div>
  );
};

export default ImageSwitcher;