import React, { useState } from "react";
import About from "../views/about";
import home from "../views/home";
//import Detail from "../views/Detail";
import ItemDetailContainer from "./ItemDetailContainer";
import Navbar from "../components/Header/Navbar";
import ItemListContainer from "./ItemListContainer";
import ExpandNavbar from "../components/Header/ExpandNavbar";
import { makeStyles, Hidden } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const Container = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  return (
    <Router>
      <div className={classes.root}>
        <Navbar handleDrawerToggle={handleDrawerToggle} />
        <Hidden xsDown>
          <ExpandNavbar variant="permanent" open={true} />
        </Hidden>
        <Hidden smUp>
          <ExpandNavbar
            variant="temporary"
            open={open}
            onClose={handleDrawerToggle}
          />
        </Hidden>
        <Switch>
          <div className={classes.content}>
            <div className={classes.toolbar}></div>

            <Route path="/" exact component={home} />
            <Route path="/category/:categoryName">
              <ItemListContainer />
            </Route>
            <Route path="/about" component={About} />
            <Route path="/item/:id">
              <ItemDetailContainer />
            </Route>
          </div>
        </Switch>
      </div>
    </Router>
  );
};

export default Container;
