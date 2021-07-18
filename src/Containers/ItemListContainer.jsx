import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/List/ItemList";
import { prodsCollection } from "../Firebase";

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      let collection = prodsCollection;
      if (categoryName)
        collection = prodsCollection.where("category", "==", categoryName);
      const response = await collection.get();
      setProducts(
        response.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
      );
    })();
  }, [categoryName]);
  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
