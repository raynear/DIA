import * as React from "react";

import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

import useStyles from "./Style";

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          DIA
        </Typography>
        <IconButton edge="end" className={classes.menuButton} color="inherit">
          <Menu />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
