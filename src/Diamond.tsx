import * as React from 'react';
import { useState, useEffect } from 'react';

import { Typography, Container, Grid, Paper, Button } from "@material-ui/core";
import Web3 from "web3";

import useStyles from "./Style";
import { marketContractAddress, marketABI, Retailer } from "./SmartContract";
// import { ContractAddress, ContractABI } from "./ContractInfo";


// interface FourC { clarity: '', cut: '', carat: '', color: '' }

function Diamond({ match }: any) {
  const classes = useStyles();
  //  const id = match.params.id;
  const web3 = new Web3((window as any).web3.currentProvider);
  const marketContract = new web3.eth.Contract(marketABI as any, marketContractAddress);

  const [values, setValues] = useState({ clarity: '', cut: '', carat: '', color: '', price: 0, id: '', reportHash: '' })
  const [inMyList, setInMyList] = useState(false);


  useEffect(() => {

    marketContract.methods.getDiamond(match.params.ID).call().then((r: any) => {
      setValues({ clarity: r[1], cut: r[2], carat: r[3], color: r[4], price: r[5], id: r[0], reportHash: r[6] })
    });

    setInMyList(inMyCookieList(parseInt(match.params.ID, 10)));
  }, [])

  window.addEventListener('load', async () => {
    if ((window as any).web3) {
      (window as any).web3 = new Web3((window as any).web3.currentProvider);
    }
  });

  function setMyCookieList(id: number) {
    const Cookies = document.cookie.split(";");
    let DiaList;
    for (const i in Cookies) {
      if (Cookies[i].split("=")[0].trim() === "MyDiaList") {
        DiaList = JSON.parse(Cookies[i].split("=")[1]);
        if (!DiaList.includes(id)) {
          DiaList.push(id);
        }
      }
    }
    document.cookie = "MyDiaList=" + JSON.stringify(DiaList);
  }

  function inMyCookieList(id: number) {
    const Cookies = document.cookie.split(";");
    for (const i in Cookies) {
      if (Cookies[i].split("=")[0].trim() === "MyDiaList") {
        const DiaList = JSON.parse(Cookies[i].split("=")[1]);
        if (DiaList.includes(id)) {
          return true;
        }
      }
    }
    return false;
  }

  function rentDia() {
    marketContract.methods.rentDiamond(parseInt(match.params.ID, 10)).send({ from: Retailer }).then((r: any) => {
      console.log(r);
      setMyCookieList(parseInt(match.params.ID, 10));
    });
  }

  function returnDia() {
    console.log("returnDia");
  }

  function submit() {
    console.log("submit");
    marketContract.methods.sattleforDeposit(parseInt(match.params.ID, 10), 10).send({ from: Retailer }).then((r: any) => {
      console.log(r);
    })
  }

  return (
    <>
      <Container maxWidth="lg" className={classes.rootcontainer}>
        <Grid container={true} className={classes.container}>
          <Grid item={true} xs={12} md={12} lg={12}>
            <div className={classes.listImg}>
              <Typography variant="h4" color="textSecondary" className={classes.listText}>Diamond</Typography>
            </div>
            <Paper style={{ textAlign: "right" }}>
              <Grid container={true} className={classes.container}>
                <Grid item={true} className={classes.grid} xs={12} md={6} lg={6}>
                  <Typography>ID: {values.id}</Typography>
                </Grid>
                <Grid item={true} className={classes.grid} xs={12} md={6} lg={6}>
                  <Typography>Price: {values.price}</Typography>
                </Grid>
                <Grid item={true} className={classes.grid} xs={12} md={6} lg={6}>
                  <Typography>Report Hash: {values.reportHash}</Typography>
                </Grid>
                <Grid item={true} className={classes.grid} xs={6} md={3} lg={3}>
                  <Typography>
                    Carat: {values.carat}
                  </Typography>
                </Grid>
                <Grid item={true} className={classes.grid} xs={6} md={3} lg={3}>
                  <Typography>
                    Clarity: {values.clarity}
                  </Typography>
                </Grid>
                <Grid item={true} className={classes.grid} xs={6} md={3} lg={3}>
                  <Typography>
                    Cut: {values.cut}
                  </Typography>
                </Grid>
                <Grid item={true} className={classes.grid} xs={6} md={3} lg={3}>
                  <Typography>
                    Color: {values.color}
                  </Typography>
                </Grid>
                {!inMyList &&
                  <Grid item={true} className={classes.grid} xs={12} md={12} lg={12}>
                    <Button fullWidth={true} variant="contained" color="primary" onClick={rentDia}>wanna Rent</Button>
                  </Grid>
                }
                {inMyList &&
                  <>
                    <Grid item={true} className={classes.grid} xs={6} md={6} lg={6}>
                      <Button fullWidth={true} variant="contained" color="primary" onClick={returnDia}>반환</Button>
                    </Grid>
                    <Grid item={true} className={classes.grid} xs={6} md={6} lg={6}>
                      <Button fullWidth={true} variant="contained" color="primary" onClick={submit}>판매확정(송금)!</Button>
                    </Grid>
                  </>
                }
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Diamond;