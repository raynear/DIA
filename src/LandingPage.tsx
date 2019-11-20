import * as React from 'react';
import { Grid, Paper, Typography } from "@material-ui/core";
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
        <Parallax y={[-40, 40]} tagOuter="figure">
          <img id="test_a" width="100%" src={MainImg} />
          <Grid container={true}>
            <Grid item={true}>
              <Typography className={classes.title}>Material Kit React.</Typography>
              <Typography className={classes.title}>
                A Badass Material-U
              </Typography>
            </Grid>
          </Grid>
        </Parallax>
        <Paper className={classes.paper}>
          <LandingContents />
        </Paper>
      </ParallaxProvider>
    </>
  );
}

export default LandingPage;