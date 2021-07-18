import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Box,
} from "@material-ui/core";

import ItemCount from "./ItemCount";
import useStyles from "./styles.js";
import { useCartContext } from "../../Context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Item = ({ product }) => {
  const { cart, addToCart, actualStock } = useCartContext();
  console.log(cart);
  const onAdd = (qty) => {
    addToCart(product, qty);
    const notify = () =>
      toast.success("Product added to cart! 🛒", {
        position: "bottom-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    notify();
  };
  const classes = useStyles();
  return (
    <Card className={classes.Root}>
      <Link to={`/item/${product.id}`} style={{ textDecoration: "none" }}>
        <CardMedia
          className={classes.media}
          image={product.pictureUrl}
          title={product.title}
        />
      </Link>

      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="h5" gutterBottom>
            ${product.price}
          </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        {actualStock(product) > 0 ? (
          <ItemCount onAdd={onAdd} stock={actualStock(product)} mx="auto" />
        ) : (
          <Box component="h2" m={2}>
            Not available stock!
          </Box>
        )}
      </CardActions>
      <ToastContainer />
    </Card>
  );
};

export default Item;
