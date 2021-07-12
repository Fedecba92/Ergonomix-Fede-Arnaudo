import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/List/ItemList";
import { useCartContext } from "../Context/CartContext";

const ItemListContainer = () => {
  const { categoryName } = useParams();
  const { database } = useCartContext();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!categoryName) return setProducts(database);
    const catProd = database.filter((prod) => prod.category === categoryName);
    setProducts(catProd);
  }, [categoryName, database]);
  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
