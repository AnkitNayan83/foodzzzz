import styles from "../styles/ProductList.module.css";
import { Product } from "./Product";

export const ProductList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>Food We Offer</h1>
      <div className={styles.wrapper}>
        <Product type="Pizza 🍕" />
        <Product type="Burger 🍔" />
        <Product type="Noodles 🍜" />
      </div>
    </div>
  );
};
