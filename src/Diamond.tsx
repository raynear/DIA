import * as React from 'react';
import { useState, useEffect } from 'react';

import { Typography, Container, Grid, Paper, Button } from "@material-ui/core";
import Web3 from "web3";

import useStyles from "./Style";
import { playerRoleContractAddress, playerRoleABI } from "./SmartContract";
// import { ContractAddress, ContractABI } from "./ContractInfo";


// interface FourC { clarity: '', cut: '', carat: '', color: '' }

function Diamond({ match }: any) {
  const classes = useStyles();
  //  const id = match.params.id;

  const [values, setValues] = useState({ clarity: '', cut: '', carat: '', color: '', price: 0, id: '', celler: '', certinfo: '' })
  const [role, setRole] = useState(0);
  const [inMyList, setInMyList] = useState(false);

  useEffect(() => {
    const myAddress = (window as any).web3.eth.accounts[0];
    const mycontract = (window as any).web3.eth.contract(playerRoleABI);
    const contract = mycontract.at(playerRoleContractAddress);

    (window as any).web3.eth.defaultAccount = (window as any).web3.eth.accounts[0]
    contract.checkPlayerRole(myAddress, (e: any, r: any) => {
      if (r[0].toNumber() === 1) {
        setRole(1);
      } else if (r[1].toNumber() === 1) {
        setRole(2);
      } else if (r[2].toNumber() === 1) {
        setRole(3);
      }
    })

    setInMyList(inMyCookieList(parseInt(match.params.ID, 10)));

    setValues({ clarity: 'VVS', cut: 'Good', carat: '3/4', color: 'F', price: 4000000, id: match.params.ID, celler: 'AA 도매상', certinfo: 'BB에서 인증 되었음' });
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
        console.log(DiaList, id);
        if (DiaList.includes(id)) {
          console.log("true");
          return true;
        }
      }
    }
    console.log("false");
    return false;
  }

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
    inMyCookieList(match.params.ID);
  }

  function pushCookie() {
    document.cookie = "MyDiaList=[1,3,5,8,10]"
    inMyCookieList(match.params.ID);
  }

  return (
    <>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.rootcontainer}>
        <Grid container={true} className={classes.container}>
          <Grid item={true} xs={12} md={12} lg={12}>
            <Paper style={{ textAlign: "right" }}>
              <Grid container={true} className={classes.container}>
                <Grid item={true} className={classes.grid} xs={12} md={6} lg={6}>
                  <Typography>매물 ID: {values.id}</Typography>
                </Grid>
                <Grid item={true} className={classes.grid} xs={12} md={6} lg={6}>
                  <Typography>판매자: {values.celler}</Typography>
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

                <br />
                <br />
                <br />
                <br />
                <Grid item={true} className={classes.grid} xs={12} md={12} lg={12}>
                  <Button fullWidth={true} variant="contained" color="primary" onClick={pushCookie}>Set Cookie</Button>
                </Grid>
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