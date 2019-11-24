import * as React from 'react';

import { Container, Grid, Paper, Button } from "@material-ui/core";
import Web3 from "web3";

import useStyles from "./Style";
// import { ContractAddress, ContractABI } from "./ContractInfo";


function Config({ match }: any) {
  const classes = useStyles();

  window.addEventListener('load', async () => {
    if ((window as any).web3) {
      (window as any).web3 = new Web3((window as any).web3.currentProvider);
    }
  });

  /*  
    function submit() {
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
  */
  function wholeSaleCookie() {
    document.cookie = "MyDiaList=[1,3,5,8,10]"
  }

  function retailCookie() {
    document.cookie = "RentedDiaList=[1,3,5,8,10]"
  }

  return (
    <>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.rootcontainer}>
        <Grid container={true} className={classes.container}>
          <Grid item={true} xs={12} md={12} lg={12}>
            <Paper style={{ textAlign: "right" }}>
              <Grid container={true} className={classes.container}>
                <Grid item={true} className={classes.grid} xs={6} md={6} lg={6}>
                  <Button fullWidth={true} variant="contained" color="primary" onClick={wholeSaleCookie}>도매상 쿠키 설정</Button>
                </Grid>
                <Grid item={true} className={classes.grid} xs={6} md={6} lg={6}>
                  <Button fullWidth={true} variant="contained" color="primary" onClick={retailCookie}>소매상 쿠키 설정</Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Config;