import * as React from 'react';
import { useState, useEffect } from 'react';

import { Typography, Container, Grid, Paper, Button } from "@material-ui/core";
import Web3 from "web3";

import useStyles from "./Style";
import { playerRoleContractAddress, playerRoleABI, marketContractAddress, marketABI } from "./SmartContract";
// import { ContractAddress, ContractABI } from "./ContractInfo";


// interface FourC { clarity: '', cut: '', carat: '', color: '' }

function Diamond({ match }: any) {
  const classes = useStyles();
  //  const id = match.params.id;

  const [values, setValues] = useState({ clarity: '', cut: '', carat: '', color: '', price: 0, id: '', certinfo: '' })
  const [role, setRole] = useState(0);
  const [inMyList, setInMyList] = useState(false);

  useEffect(() => {
    const web3 = new Web3((window as any).web3.currentProvider);
    const marketContract = new web3.eth.Contract(marketABI as any, marketContractAddress);

    marketContract.methods.getDiamond(match.params.ID).call().then((r: any) => {
      setValues({ clarity: r[1], cut: r[2], carat: r[3], color: r[4], price: r[5], id: r[0], certinfo: r[6] })
    })

    const roleContract = new web3.eth.Contract(playerRoleABI as any, playerRoleContractAddress);

    web3.eth.getAccounts().then((account: any) => {
      const myAddress = account[0];
      web3.eth.defaultAccount = myAddress;
      roleContract.methods.checkPlayerRole(myAddress).call().then((r: any) => {
        console.log(r);
        const r1 = parseInt(r[0], 10);
        const r2 = parseInt(r[1], 10);
        const r3 = parseInt(r[2], 10);

        if (r1 === 1 || r2 === 1 || r3 === 1) {
          setRole(1);
        } else if (r1 === 2 || r2 === 2 || r3 === 2) {
          setRole(2);
        } else if (r1 === 3 || r2 === 3 || r3 === 3) {
          setRole(3);
        }
      })

      setInMyList(inMyCookieList(parseInt(match.params.ID, 10)));

      setValues({ clarity: 'VVS', cut: 'Good', carat: '3/4', color: 'F', price: 4000000, id: match.params.ID, certinfo: 'BB에서 인증 되었음' });
    });
  }, [])

  window.addEventListener('load', async () => {
    if ((window as any).web3) {
      (window as any).web3 = new Web3((window as any).web3.currentProvider);
    }
  });

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

  function submit() {
    (window as any).web3.eth.getBlockNumber((e: any, r: any) => {
      if (e) {
        console.log(e);
        return e;
      } else {
        console.log(r);
        return r;
      }
    });
    inMyCookieList(match.params.ID);
  }

  return (
    <>
      <Container maxWidth="lg" className={classes.rootcontainer}>
        <Grid container={true} className={classes.container}>
          <Grid item={true} xs={12} md={12} lg={12}>
            <Paper style={{ textAlign: "right" }}>
              <Grid container={true} className={classes.container}>
                <Grid item={true} className={classes.grid} xs={12} md={6} lg={6}>
                  <Typography>매물 ID: {values.id}</Typography>
                </Grid>
                <Grid item={true} className={classes.grid} xs={12} md={6} lg={6}>
                  <Typography>가격: {values.price}</Typography>
                </Grid>
                <Grid item={true} className={classes.grid} xs={12} md={6} lg={6}>
                  <Typography>감정 정보</Typography>
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
                {(role === 1 && inMyList) &&
                  <Grid item={true} className={classes.grid} xs={12} md={12} lg={12}>
                    <Button fullWidth={true} variant="contained" color="primary" onClick={submit}>판매 리스트에 올리기!</Button>
                  </Grid>
                }
                {(role === 2 && !inMyList) &&
                  <Grid item={true} className={classes.grid} xs={12} md={12} lg={12}>
                    <Button fullWidth={true} variant="contained" color="primary" onClick={submit}>살께요!</Button>
                  </Grid>
                }
                {(role === 2 && inMyList) &&
                  <>
                    <Grid item={true} className={classes.grid} xs={6} md={6} lg={6}>
                      <Button fullWidth={true} variant="contained" color="primary" onClick={submit}>환불!</Button>
                    </Grid>
                    <Grid item={true} className={classes.grid} xs={6} md={6} lg={6}>
                      <Button fullWidth={true} variant="contained" color="primary" onClick={submit}>판매완료(송금)!</Button>
                    </Grid>
                  </>
                }
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      {role}{"-"}{inMyList.toString()}
    </>
  );
}

export default Diamond;