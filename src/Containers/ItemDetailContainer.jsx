import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import ItemDetail from "../components/Items/ItemDetail";
import Spinner from "../components/Loader/Spinner";
import { useParams } from "react-router-dom";
import { prodsCollection } from "../Firebase";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  //const [error, setError] = useState(false);
  useEffect(() => {
    (async () => {
      const response = await prodsCollection.doc(id).get();
      setProduct({ id: response.id, ...response.data() });
      setLoading(false);
    })();
  }, [id]);
  //if (error) return <img src="https://http.cat/404" alt="Product not found" />;
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
