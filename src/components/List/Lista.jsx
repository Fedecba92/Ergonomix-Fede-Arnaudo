import React from "react";
import { Link } from "react-router-dom";
import CategoryMenu from "../Category/CategoryMenu";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import StoreIcon from "@material-ui/icons/Store";
import HelpIcon from "@material-ui/icons/Help";
import CategoryIcon from "@material-ui/icons/Category";

const Lista = () => {
  return (
    <div>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <StoreIcon />
          </ListItemIcon>
          <Link className="Link" to="/">
            <ListItemText primary="Store" />
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText>
            <CategoryMenu />
          </ListItemText>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <Link className="Link" to="/about">
            <ListItemText primary="Q&A" />
          </Link>
        </ListItem>
      </List>
      <Divider />
    </div>
  );
};

export default Lista;
