import * as React from "react";

import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

import useStyles from "./Style";

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title} color="primary">
          DIA
        </Typography>
        <IconButton edge="end" className={classes.menuButton} color="primary">
          <Menu />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
