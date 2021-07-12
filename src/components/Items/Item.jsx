import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";

//import ItemCount from "./ItemCount";
import useStyles from "./styles.js";
//import { useCartContext } from "../../Context/CartContext";

const Item = ({ product }) => {
  // const { cart, addToCart } = useCartContext();
  // console.log(cart);
  // const onAdd = (qty) => {
  //   addToCart(product, qty);
  //   alert("Product added to cart");
  // };
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
      {/* <CardActions disableSpacing className={classes.cardActions}>
        {product.stock > 0 && (
          <ItemCount onAdd={onAdd} stock={product.stock} mx="auto" />
        )}
      </CardActions> */}
    </Card>
  );
};

export default Item;
