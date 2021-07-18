import React from "react";
import { Redirect } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import { IconButton, Box } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import DeleteIcon from "@material-ui/icons/Delete";
import { Header, Image, Table } from "semantic-ui-react";

import useStyles from "./styles";
//import Spinner from "../Loader/Spinner";

const Cart = () => {
  const classes = useStyles();

  const { cart, clearCart, removeProd, totalPrice } = useCartContext();

  const deleteProd = (Prod) => {
    console.log("productos a Eliminar:", Prod);
    removeProd(Prod);
  };

  //if (providerLoading) return <Spinner />;

  if (!cart.length) return <Redirect to="/" />;

  return (
    <div>
      <Grid container justify="center" spacing={4}>
        <Table color="blue">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={8}>Product</Table.HeaderCell>
              <Table.HeaderCell>Quantity</Table.HeaderCell>
              <Table.HeaderCell>Price per unit</Table.HeaderCell>
              <Table.HeaderCell>Total</Table.HeaderCell>
              <Table.HeaderCell>Delete product</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {cart.map((product) => (
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Header as="body1" image>
                    <Image src={product.pictureUrl} rounded size="medium" />
                    <Header.Content>
                      <Header.Subheader>{product.title}</Header.Subheader>
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>x {product.quantity}</Table.Cell>
                <Table.Cell>$ {product.price}</Table.Cell>
                <Table.Cell>$ {product.price * product.quantity}</Table.Cell>
                <Table.Cell>
                  <IconButton
                    aria-label="Remove product"
                    onClick={() => {
                      deleteProd(product);
                    }}
                  >
                    <DeleteIcon color="secondary" />
                  </IconButton>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
        </Table>

        <IconButton aria-label="empty cart" onClick={clearCart}>
          Empty cart
          <RemoveShoppingCartIcon color="secondary" className={classes.empty} />
        </IconButton>
        <Box component="h2" m={3}>
          Total: ${totalPrice}
        </Box>
      </Grid>
    </div>
  );
};

export default Cart;
