import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import ItemDetail from "../components/Items/ItemDetail";
import Spinner from "../components/Loader/Spinner";
import { useParams } from "react-router-dom";
import axios from "axios";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://run.mocky.io/v3/5a206849-b4e1-47de-a0f6-392bd22f06b3"
      );
      const foundProd = data.find((prod) => prod.id === +id);
      setProduct(foundProd);
      setLoading(false);
    })();
  }, [id]);

  if (loading) return <Spinner />;
  return (
    <Grid container justify="center" spacing={4}>
      <Grid item xs={12} sm={12} lg={8}>
        <ItemDetail {...product} />
      </Grid>
    </Grid>
  );
};

export default ItemDetailContainer;
