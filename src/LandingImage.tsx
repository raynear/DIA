import * as React from "react";

import { Typography, Box } from "@material-ui/core";

import useStyles from "./Style";

function LandingImage() {
  const classes = useStyles();
  return (
    <Box className={classes.landingImg}>
      <Typography
        variant="h6"
        className={classes.mainCopy}
        color="textSecondary"
      >
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        A Diamond is forever
      </Typography>
    </Box>
  );
}

export default LandingImage;