import * as React from "react";
import { useState, KeyboardEvent } from "react";

import {
  AppBar,
  Toolbar,
  Drawer,
  Typography,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { Menu, Home, Toc } from "@material-ui/icons";

import useStyles from "./Style";

function Header() {
  const classes = useStyles();

  const [draw, setDraw] = useState(false);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as KeyboardEvent).key === "Tab" ||
        (event as KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setDraw(open);
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title} color="primary">
          DIA
        </Typography>
        <IconButton
          edge="end"
          className={classes.menuButton}
          color="primary"
          onClick={toggleDrawer(true)}
        >
          <Menu />
        </IconButton>
      </Toolbar>
      <Drawer anchor="right" open={draw} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button={true} component={Link} href="/">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem button={true} component={Link} href="/Dashboard">
            <ListItemIcon>
              <Toc />
            </ListItemIcon>
            <ListItemText>Dashboard</ListItemText>
          </ListItem>
        </List>

      </Drawer>
    </AppBar>
  );
}

export default Header;
