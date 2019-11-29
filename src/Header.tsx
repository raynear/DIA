import * as React from "react";
// import { useState, useEffect } from "react";

import {
  Toolbar,
  Link
} from "@material-ui/core";

import useStyles from "./Style";

function Header() {
  const classes = useStyles();

  //  const [appBarFlag, setAppBarFlag] = useState(true);
  /*
    useEffect(() => {
      window.addEventListener('scroll', ScrollHandler);
    }, [])
  
    function ScrollHandler(e: any) {
      if (window.scrollY > 40 && appBarScroll !== classes.appBarColored) {
        console.log("Grey", window.scrollY);
        setAppBarScroll(classes.appBarColored);
      } else if (window.scrollY < 40 && appBarScroll !== classes.appBar) {
        console.log("Invisible", window.scrollY);
        setAppBarScroll(classes.appBar);
      }
    }
  */
  // useEffect(() => {
  //   window.addEventListener('scroll', ScrollHandler);
  // }, [])

  // function ScrollHandler(e: any) {
  //   if (window.scrollY > 40) {
  //     console.log("Grey", window.scrollY);
  //     setAppBarFlag(false);
  //     //        setAppBarScroll(classes.appBarColored);
  //   } else if (window.scrollY < 40) {
  //     console.log("Invisible", window.scrollY);
  //     setAppBarFlag(true);
  //     //        setAppBarScroll(classes.appBar);
  //   }
  // }

  // let appBarScroll;
  // if (appBarFlag) {
  //   appBarScroll = classes.appBar;
  // } else {
  //   appBarScroll = classes.appBarColored;
  // }
  //  let appBarScroll = (appBarFlag === true && classes.appBar) || (appBarFlag === false && classes.appBarColored);
  return (
    <Toolbar className={classes.toolbar}>
      <Link className={classes.toolbarLink} color="primary" noWrap={true} variant="h6" href="/DIA/">
        Wiggler는?
        </Link>
      <Link className={classes.toolbarLink} color="primary" noWrap={true} variant="h6" href="/DIA/DiamondList">
        마켓
        </Link>
      <Link className={classes.toolbarLink} color="primary" noWrap={true} variant="h6" href="/DIA/MyDiamondList">
        My Report
        </Link>
      <Link className={classes.toolbarLink} color="primary" noWrap={true} variant="h6" href="/DIA/NewDiamond">
        감정원
        </Link>
      <Link className={classes.toolbarLink} color="primary" noWrap={true} variant="h6" href="/DIA/Investor">
        투자자
        </Link>
    </Toolbar>
  );
}

export default Header;
