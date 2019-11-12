import * as React from "react";
import { useState, KeyboardEvent } from "react";

import { AppBar, Toolbar, Drawer, Typography, IconButton, List, ListItem, ListItemIcon, ListItemText, Divider } from "@material-ui/core";
import { Menu, Inbox, Mail } from "@material-ui/icons";

import useStyles from "./Style";

function Header() {
  const classes = useStyles();

  const [draw, setDraw] = useState(false)

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (event.type === "keydown" && ((event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift')) {
      return;
    }
    setDraw(open);
  }

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button={true} key={text}>
            <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button={true} key={text}>
            <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title} color="primary">
          DIA
        </Typography>
        <IconButton edge="end" className={classes.menuButton} color="primary" onClick={toggleDrawer(true)}>
          <Menu />
        </IconButton>
      </Toolbar>
      <Drawer anchor="right" open={draw} onClose={toggleDrawer(false)}>
        {sideList}
      </Drawer>
    </AppBar>
  );
}

export default Header;
