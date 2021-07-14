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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemDetail = ({ product }) => {
  const classes = useStyles();

  const { cart, addToCart, actualStock } = useCartContext();
  console.log(cart);
  const onAdd = (qty) => {
    addToCart(product, qty);
    const notify = () =>
      toast.success("Product added to cart! 🛒", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    notify();
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
        {actualStock(product) > 0 && (
          <ItemCount onAdd={onAdd} stock={actualStock(product)} mx="auto" />
        )}
      </CardActions>
      <ToastContainer />
    </Card>
  );
};

export default ItemDetail;
