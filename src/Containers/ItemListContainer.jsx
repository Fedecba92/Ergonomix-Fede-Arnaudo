import React from "react";
//import { useParams } from "react-router-dom";
//import axios from "axios";
import ItemList from "../components/List/ItemList";
import { useCartContext } from "../Context/CartContext";

const ItemListContainer = () => {
  //const { categoryName } = useParams();
  const { database } = useCartContext();
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const { data } = await axios.get(
  //       "https://run.mocky.io/v3/5a206849-b4e1-47de-a0f6-392bd22f06b3"
  //     );
  //     if (!categoryName) return setProducts(data);
  //     const catProd = data.filter((prod) => prod.category === categoryName);
  //     setProducts(catProd);
  //   })();
  // }, [categoryName]);

  return (
    <div>
      <ItemList products={database} />
    </div>
  );
};

export default ItemListContainer;
