import * as React from 'react';
import { Paper, Typography } from "@material-ui/core";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
// import LandingImage from './LandingImage';
import LandingContents from './LandingContents';

import MainImg from "./dia_main.jpg";

import useStyles from "./Style";

function LandingPage() {
  const classes = useStyles();
  return (

    <>
      <ParallaxProvider>
        <div style={{ backgroundImage: `url(${MainImg})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", width: "100%", height: "500px" }}>
          <Typography>TEST!!</Typography>
        </div>
        <Parallax y={[10, -30]}>
          <Paper className={classes.paper}>
            <LandingContents />
          </Paper>
        </Parallax>
      </ParallaxProvider>
    </>
  );
}

export default LandingPage;