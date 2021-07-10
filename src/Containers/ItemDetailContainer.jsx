import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import ItemDetail from "../components/Items/ItemDetail";
import Spinner from "../components/Loader/Spinner";
import { useParams } from "react-router-dom";
//import axios from "axios";
import { useCartContext } from "../Context/CartContext";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { database } = useCartContext();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const foundProd = database.find((prod) => prod.id === +id);
    if (foundProd) {
      setProduct(foundProd);
    } else {
      setError(true);
    }
    setLoading(false);
  }, [id, database]);
  if (error) return <img src="https://http.cat/404" alt="Product not found" />;
  if (loading || !product) return <Spinner />;
  return (
    <Grid container justify="center" spacing={4}>
      <Grid item xs={12} sm={12} lg={8}>
        <ItemDetail product={product} />
      </Grid>
    </Grid>
  );
};

export default ItemDetailContainer;
