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
  //  const [appBarScroll, setAppBarScroll] = useState(classes.appBar);
  const [appBarFlag, setAppBarFlag] = useState(true);
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
  useEffect(() => {
    window.addEventListener('scroll', ScrollHandler);
  }, [])

  function ScrollHandler(e: any) {
    if (window.scrollY > 40) {
      console.log("Grey", window.scrollY);
      setAppBarFlag(false);
      //        setAppBarScroll(classes.appBarColored);
    } else if (window.scrollY < 40) {
      console.log("Invisible", window.scrollY);
      setAppBarFlag(true);
      //        setAppBarScroll(classes.appBar);
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

  let appBarScroll;
  if (appBarFlag) {
    appBarScroll = classes.appBar;
  } else {
    appBarScroll = classes.appBarColored;
  }
  //  let appBarScroll = (appBarFlag === true && classes.appBar) || (appBarFlag === false && classes.appBarColored);
  return (
    <AppBar position="fixed" className={appBarScroll}>
      <Toolbar>
        <Typography variant="h6" className={classes.title} color="primary">
          <Link href="/DIA/">
            Wiggler
          </Link>
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
          <ListItem button={true} component={Link} href="/DIA/">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem button={true} component={Link} href="/DIA/DiamondList">
            <ListItemIcon>
              <Toc />
            </ListItemIcon>
            <ListItemText>Diamonds</ListItemText>
          </ListItem>
          <ListItem button={true} component={Link} href="/DIA/RentList">
            <ListItemIcon>
              <Toc />
            </ListItemIcon>
            <ListItemText>Rent Diamonds</ListItemText>
          </ListItem>
          <ListItem button={true} component={Link} href="/DIA/MyDiamondList">
            <ListItemIcon>
              <Toc />
            </ListItemIcon>
            <ListItemText>My Diamonds</ListItemText>
          </ListItem>
          <ListItem button={true} component={Link} href="/DIA/NewDiamond">
            <ListItemIcon>
              <Toc />
            </ListItemIcon>
            <ListItemText>Register New Diamond</ListItemText>
          </ListItem>
          <ListItem button={true} component={Link} href="/DIA/Investor">
            <ListItemIcon>
              <Toc />
            </ListItemIcon>
            <ListItemText>투자 내역</ListItemText>
          </ListItem>
        </List>

      </Drawer>
    </AppBar>
  );
}

export default Header;
