import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SidebarData from "./data/sections";

const drawerWidth = "20%";

const styles = (theme: any) => ({
  root: {
    display: "flex"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  }
});

function PermanentDrawerLeft(props: any) {
  const { classes } = props;
  const changeSection = (sectionName: string): void => {
    props.changeSection(sectionName);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {SidebarData.map(
            ({ sectionName, color, icon, stateIdentifier }, index) => (
              <ListItem
                button
                key={index}
                style={{
                  height: "100px",
                  background: `${color}`,
                  margin: "5px 0",
                  cursor: "pointer"
                }}
                onClick={() => changeSection(stateIdentifier)}
              >
                <ListItemIcon style={{ color: "#fff" }}>{icon}</ListItemIcon>
                <ListItemText primary={sectionName} />
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </div>
  );
}

PermanentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PermanentDrawerLeft);
