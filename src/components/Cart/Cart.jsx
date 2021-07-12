import React from "react";
import { Redirect } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from "@material-ui/core";
import { Grid } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import DeleteIcon from "@material-ui/icons/Delete";

import useStyles from "./styles";

const Cart = () => {
  const classes = useStyles();

  const { cart, clearCart, removeProd } = useCartContext();

  const deleteProd = (Prod) => {
    console.log("productos a Eliminar:", Prod);
    removeProd(Prod);
  };

  if (!cart.length) return <Redirect to="/" />;

  return (
    <div>
      <Grid container justify="center" spacing={4}>
        {cart.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} lg={3}>
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
                  <Typography variant="h5" gutterBottom>
                    x {product.quantity}
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    $ {product.price * product.quantity}
                  </Typography>
                </div>
              </CardContent>
              <CardActions disableSpacing className={classes.cardActions}>
                <IconButton
                  aria-label="Remove product"
                  onClick={() => {
                    deleteProd(product);
                  }}
                >
                  <DeleteIcon color="secondary" />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
        <IconButton aria-label="empty cart" onClick={clearCart}>
          Empty cart
          <RemoveShoppingCartIcon color="secondary" className={classes.empty} />
        </IconButton>
      </Grid>
    </div>
  );
};

export default Cart;
