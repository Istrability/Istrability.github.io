import { makeStyles } from "@mui/styles";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => {
  return {
    outer: {},
    inner: {
      width: "100%",
      height: "0",
      paddingBottom: "70%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    "@media (min-width: 600px)": {},
    "@media (min-width: 960px)": {
      /* outer: {
        margin: '0.5rem 0.41% 0.5rem',
        width: '19%',
      }, */
    },
  };
});

const DiagnosisThumbnail = ({ data, style }: { data: any; style?: any }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={classes.outer}
        style={style}
        onClick={() => setOpen(true)}
      >
        <div
          /* alt={data.name} */
          title={data.name}
          /* src={data.imageUrl} */
          /* width='100%'
            height='80%' */
          className={classes.inner}
          style={{
            backgroundImage: `url(${data.imageUrl})`,
            ...data.innerStyle,
          }}
        />
      </div>
    </>
  );
};

export default DiagnosisThumbnail;
