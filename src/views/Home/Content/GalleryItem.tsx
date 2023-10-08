import { Box } from "@mui/material";

const styles = {
  outer: {
    //"@media (min-width: 600px)": {},
    /* "@media (min-width: 960px)": {
      margin: "0.5rem 0.41% 0.5rem",
      width: "19%",
    }, */
  },
  inner: {
    width: "100%",
    height: "0",
    paddingBottom: "70%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
};

const GalleryItem = ({ data, style }: { data: any; style?: any }) => {
  return (
    <>
      <Box sx={styles.outer} style={style}>
        <Box
          /* alt={data.name} */
          title={data.name}
          /* src={data.imageUrl} */
          /* width='100%'
            height='80%' */
          sx={styles.inner}
          style={{
            backgroundImage: `url(${data.imageUrl})`,
            ...data.innerStyle,
          }}
        />
      </Box>
    </>
  );
};

export default GalleryItem;
