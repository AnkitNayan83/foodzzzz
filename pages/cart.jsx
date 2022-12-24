import styles from "../styles/Cart.module.css";
import Image from "next/image";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.logo}>Your Orders</h1>
        <div className={styles.wrapper}>
          <div className={styles.box}>
            <Image src="/img/pizza/pizza_1.png" width="120" height="120" />
            <span>Pizza Name</span>
            <span>Rs 500</span>
            <span>2</span>
          </div>
          <div className={styles.box}>
            <Image src="/img/pizza/pizza_1.png" width="120" height="120" />
            <span>Pizza Name</span>
            <span>Rs 500</span>
            <span>2</span>
          </div>
          <div className={styles.box}>
            <Image src="/img/pizza/pizza_1.png" width="120" height="120" />
            <span>Pizza Name</span>
            <span>Rs 500</span>
            <span>2</span>
          </div>
          <div className={styles.box}>
            <Image src="/img/pizza/pizza_1.png" width="120" height="120" />
            <span>Pizza Name</span>
            <span>Rs 500</span>
            <span>2</span>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.Rwrapper}>
          <h1 style={{ textAlign: "center" }}>Your Bill</h1>
          <span>
            Total Amount:<strong> 2000</strong>
          </span>
          <span>
            Discount:<strong> -200</strong>
          </span>
          <span>
            Delivery charge:<strong> 50</strong>
          </span>
          <span>
            Total amount:<strong> 1850</strong>
          </span>
          <button className={styles.pay}>Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
