import React from "react";
import ItemCount from "./ItemCount";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@material-ui/core";

import useStyles from "./itemDet";
import { useCartContext } from "../../Context/CartContext";

const ItemDetail = ({ product }) => {
  const classes = useStyles();
  const { cart, addToCart } = useCartContext();
  console.log(cart);
  const onAdd = (qty) => {
    addToCart(product, qty);
    alert("Product added to cart");
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
        {product.stock > 0 && (
          <ItemCount onAdd={onAdd} stock={product.stock} mx="auto" />
        )}
        {/* <Typography variant="h4" m={2} gutterBottom>
          Available stock: {product.stock}
        </Typography> */}
      </CardActions>
    </Card>
  );
};

export default ItemDetail;
