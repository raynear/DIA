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
          <b>Diamond Chain</b>
        </Link>
      </Toolbar>
      <Toolbar className={classes.toolbar}>
        <Link className={classes.toolbarLink} color="textSecondary" noWrap={true} variant="h6" href="/DIA/Config">{" "}</Link>
        <Link className={classes.toolbarLink} color="textSecondary" noWrap={true} variant="subtitle1" href="/DIA/DiamondList">
          <b>Market</b>
        </Link>
        <Link className={classes.toolbarLink} color="textSecondary" noWrap={true} variant="subtitle1" href="/DIA/MyReportList">
          <b>My Report</b>
        </Link>
        <Link className={classes.toolbarLink} color="textSecondary" noWrap={true} variant="subtitle1" href="/DIA/NewReport">
          <b>New Report</b>
        </Link>
        <Link className={classes.toolbarLink} color="textSecondary" noWrap={true} variant="subtitle1" href="/DIA/Investor">
          <b>Investor</b>
        </Link>
        <Link className={classes.toolbarLink} color="textSecondary" noWrap={true} variant="subtitle1" href="/DIA/Config">{" "}</Link>
      </Toolbar>
    </>
  );
}

export default Header;