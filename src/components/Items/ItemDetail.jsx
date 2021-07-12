import React, { useState } from "react";
import ItemCount from "./ItemCount";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from "@material-ui/core";

import useStyles from "./itemDet";
import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const classes = useStyles();
  const [event, setEvent] = useState(true);
  const { cart, addToCart } = useCartContext();
  console.log(cart);
  const onAdd = (qty) => {
    addToCart(product, qty);
    alert("Product added to cart");
    setEvent(false);
  };

  return (
    <Card className={classes.Root}>
      <CardMedia
        className={classes.media}
        image={product.pictureUrl}
        title={product.title}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="body1" m={2} color="textSecondary">
            {product.description}
          </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        {event ? (
          <ItemCount stock={product.stock} onAdd={onAdd} />
        ) : (
          <Link to="/cart">
            <IconButton>Finish shopping</IconButton>
          </Link>
        )}

        {/* <Typography variant="h4" m={2} gutterBottom>
          Available stock: {product.stock}
        </Typography> */}
      </CardActions>
    </Card>
  );
};

export default ItemDetail;
