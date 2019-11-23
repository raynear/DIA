import * as React from 'react';
import { useState, useEffect } from 'react';

import { Slider, Typography, Container, Grid, Paper, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import Web3 from "web3";

import useStyles from "./Style";
// import { ContractAddress, ContractABI } from "./ContractInfo";


// interface FourC { clarity: '', cut: '', carat: '', color: '' }


const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

function Investor({ match }: any) {
  const classes = useStyles();
  //  const id = match.params.id;

  const [values, setValues] = useState({ id: '', limitRate: 30, total: 100, principal: 90, profit: 10, currentStatus: "pause" })

  useEffect(() => {
    setValues({ id: '', limitRate: 30, total: 100, principal: 90, profit: 10, currentStatus: "pause" });
  }, [])

  window.addEventListener('load', async () => {
    if ((window as any).web3) {
      (window as any).web3 = new Web3((window as any).web3.currentProvider);
    }
  });

  function changeLimit() {
    console.log((window as any).web3.currentProvider.selectedAddress);
    (window as any).web3.eth.getBlockNumber((e: any, r: any) => {
      if (e) {
        console.log(e);
        return e;
      } else {
        console.log(r);
        return r;
      }
    });
  }

  function changeState() {
    console.log((window as any).web3.currentProvider.selectedAddress);
    (window as any).web3.eth.getBlockNumber((e: any, r: any) => {
      if (e) {
        console.log(e);
        return e;
      } else {
        console.log(r);
        return r;
      }
    });
  }

  return (
    <>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.rootcontainer}>
        <Grid container={true} className={classes.container}>
          <Grid item={true} xs={12} md={12} lg={12}>
            <Paper style={{ textAlign: "right" }}>
              <Grid container={true} className={classes.container}>
                <Grid item={true} className={classes.grid} xs={12} md={12} lg={12}>
                  <Typography>계정: {values.id}</Typography>
                </Grid>
                <Grid item={true} className={classes.grid} xs={12} md={12} lg={12}>
                  <Typography>거래당 투자 비율</Typography>
                </Grid>
                <Grid item={true} className={classes.grid} xs={10} md={10} lg={10}>
                  <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
                </Grid>
                <Grid item={true} className={classes.grid} xs={2} md={2} lg={2}>
                  <Button variant="contained" style={{ backgroundColor: "#52af77", color: "#FFFFFF" }} onClick={changeLimit} >투자 비율 변경</Button>
                </Grid>
                <Grid item={true} className={classes.grid} xs={12} md={12} lg={12}>
                  <Typography>총액: {values.total}</Typography>
                </Grid>
                <Grid item={true} className={classes.grid} xs={12} md={12} lg={12}>
                  <Typography>원금: {values.principal}</Typography>
                </Grid>
                <Grid item={true} className={classes.grid} xs={12} md={12} lg={12}>
                  <Typography>수익: {values.profit}</Typography>
                </Grid>
                <Grid item={true} className={classes.grid} xs={12} md={12} lg={12}>
                  <Typography>상태: {values.currentStatus}</Typography>
                  <Button fullWidth={true} variant="contained" color="primary" onClick={changeState}>투자 / 일시정지</Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Investor;