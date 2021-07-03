import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import ItemCount from "./ItemCount";
import useStyles from "./styles.js";

const Item = ({ id, pictureUrl, title, price, quantity }) => {
  const classes = useStyles();
  return (
    <Card className={classes.Root}>
      <Link to={`/item/${id}`} style={{ textDecoration: "none" }}>
        <CardMedia className={classes.media} image={pictureUrl} title={title} />
      </Link>

      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h5" gutterBottom>
            ${price}
          </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart m={2} />
        </IconButton>
        <ItemCount stock={quantity} />
      </CardActions>
    </Card>
  );
};

export default Item;
