import * as React from "react";
// import { useState, useEffect } from "react";

import {
  Toolbar,
  Link
} from "@material-ui/core";

import useStyles from "./Style";

function Header() {
  const classes = useStyles();

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Link className={classes.toolbarLink} color="textPrimary" align="center" noWrap={true} variant="h5" href="/DIA/">
          <b>Wiggler</b>
        </Link>
      </Toolbar>
      <Toolbar className={classes.toolbar}>
        <Link className={classes.toolbarLink} color="primary" noWrap={true} variant="h6" href="/DIA/Config">{" "}</Link>
        <Link className={classes.toolbarLink} color="primary" noWrap={true} variant="h6" href="/DIA/DiamondList">
          Market
        </Link>
        <Link className={classes.toolbarLink} color="primary" noWrap={true} variant="h6" href="/DIA/MyReportList">
          My Report
        </Link>
        <Link className={classes.toolbarLink} color="primary" noWrap={true} variant="h6" href="/DIA/NewReport">
          New Report
        </Link>
        <Link className={classes.toolbarLink} color="primary" noWrap={true} variant="h6" href="/DIA/Investor">
          Investor
        </Link>
        <Link className={classes.toolbarLink} color="primary" noWrap={true} variant="h6" href="/DIA/Config">{" "}</Link>
      </Toolbar>
    </>
  );
}

export default Header;