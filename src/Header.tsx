import * as React from "react";
import { useState, useEffect, KeyboardEvent } from "react";

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
  const [appBarScroll, setAppBarScroll] = useState(classes.appBar);

  useEffect(() => {
    window.addEventListener('scroll', ScrollHandler);
  }, [])

  function ScrollHandler(e: any) {
    if (window.scrollY > 40) {
      console.log("Grey", window.scrollY);
      setAppBarScroll(classes.appBarColored);
    } else if (window.scrollY < 40) {
      console.log("Invisible", window.scrollY);
      setAppBarScroll(classes.appBar);
    }
  }

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
    <AppBar position="fixed" className={appBarScroll}>
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
          <ListItem button={true} component={Link} href="/SellList">
            <ListItemIcon>
              <Toc />
            </ListItemIcon>
            <ListItemText>Sell List</ListItemText>
          </ListItem>
          <ListItem button={true} component={Link} href="/RentList">
            <ListItemIcon>
              <Toc />
            </ListItemIcon>
            <ListItemText>Rent List</ListItemText>
          </ListItem>
          <ListItem button={true} component={Link} href="/CertList">
            <ListItemIcon>
              <Toc />
            </ListItemIcon>
            <ListItemText>Cert List</ListItemText>
          </ListItem>
        </List>

      </Drawer>
    </AppBar>
  );
}

export default Header;
