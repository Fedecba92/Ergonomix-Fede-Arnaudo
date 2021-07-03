import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ItemList from "../components/List/ItemList";

const ItemListContainer = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://run.mocky.io/v3/5a206849-b4e1-47de-a0f6-392bd22f06b3"
      );
      if (!categoryName) return setProducts(data);
      const catProd = data.filter((prod) => prod.category === categoryName);
      setProducts(catProd);
    })();
  }, [categoryName]);
  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
