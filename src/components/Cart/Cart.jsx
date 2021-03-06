import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import { ordersCollection } from "../../Firebase";
import firebase from "firebase";
import { IconButton, Box } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import DeleteIcon from "@material-ui/icons/Delete";
import { Header, Image, Table, Button, Form } from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import useStyles from "./styles";
//import Spinner from "../Loader/Spinner";

const Cart = () => {
  const classes = useStyles();

  const { cart, clearCart, removeProd, totalPrice } = useCartContext();
  const [idOrder, setIdOrder] = useState("");
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const deleteProd = (Prod) => {
    console.log("productos a Eliminar:", Prod);
    removeProd(Prod);
  };

  const emptyCart = (Prod) => {
    clearCart(Prod);
  };

  const crearCart = () => {
    let totalCart = totalPrice;
    let products = cart.map((e) => {
      return {
        id: e.id,
        title: e.title,
        price: e.price,
      };
    });
    return Promise.resolve({ products, totalCart });
  };

  const notify = (id) => {
    toast.success(`Your order has been confirmed, your order id is : ${id}`, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const confirmOrder = () => {
    crearCart().then((res) => {
      const order = ordersCollection;
      const newOrder = {
        buyer: {
          email: mail,
          name: name,
          phone: phone,
        },
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        products: res.products,
        total: res.totalCart,
      };
      console.log(newOrder);
      order
        .add(newOrder)
        .then(({ id }) => {
          setIdOrder(id);
          notify(id);
          console.log(
            "Your order has been processed successfully: ID",
            idOrder
          );
        })
        .catch((error) => {
          console.log(error);
        });
    });

    emptyCart();
  };

  //if (providerLoading) return <Spinner />;(ver implementacion)

  if (!cart.length) return <Redirect to="/" />;

  return (
    <>
      <Header size="large">Your details:</Header>
      <Grid container justify="center" spacing={4}>
        <Form>
          <Form.Field onChange={(e) => setMail({ val: e.target.value })}>
            <label>E-mail</label>
            <input placeholder="E-mail" />
          </Form.Field>
          <Form.Field onChange={(e) => setName({ val: e.target.value })}>
            <label>Full name</label>
            <input placeholder="Full name" />
          </Form.Field>
          <Form.Field onChange={(e) => setPhone({ val: e.target.value })}>
            <label>Phone</label>
            <input placeholder="Phone" />
          </Form.Field>
        </Form>
        <Grid item xs={12} sm={12} lg={12}>
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
        </Grid>

        <IconButton aria-label="empty cart" onClick={clearCart}>
          Empty cart
          <RemoveShoppingCartIcon color="secondary" className={classes.empty} />
        </IconButton>
        <Box component="h2" m={3}>
          Total: ${totalPrice}
        </Box>
        <Button
          primary
          onClick={() => {
            confirmOrder();
          }}
        >
          CONFIRM ORDER
        </Button>
        <ToastContainer />
      </Grid>
    </>
  );
};

export default Cart;
