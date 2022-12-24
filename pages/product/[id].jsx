import Image from "next/image";
import { useRef, useState } from "react";
import styles from "../../styles/ViewProduct.module.css";

export default function ViewProduct() {
  const [size, setSize] = useState(0);
  const btn1 = useRef(0);
  const btn2 = useRef(0);
  const btn3 = useRef(0);

  const handelBorder = (num) => {
    if (num === 1) {
      btn1.current.style.border = "2px solid black";
      btn1.current.style.borderRadius = "5px";
      btn2.current.style.border = "none";
      btn3.current.style.border = "none";
    } else if (num === 2) {
      btn2.current.style.border = "2px solid black";
      btn2.current.style.borderRadius = "5px";
      btn1.current.style.border = "none";
      btn3.current.style.border = "none";
    } else {
      btn3.current.style.border = "2px solid black";
      btn3.current.style.borderRadius = "5px";
      btn1.current.style.border = "none";
      btn2.current.style.border = "none";
    }
  };

  const data = {
    id: 1,
    img: "/img/pizza/pizza_2.png",
    name: "Spring Fall",
    price: [151, 251, 300],
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet suscipit illo aliquid nisi praesentium quibusdam, facere expedita quos totam voluptates quo cupiditate, sequi incidunt, magni pariatur sapiente vitae nostrum minima",
    type: "pizza",
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={data.img} fill alt="" style={{ objectFit: "contain" }} />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{data.name}</h1>
        <span className={styles.price}>Rs{data.price[size]}</span>
        <p className={styles.desc}>{data.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div
            className={styles.size}
            ref={btn1}
            onClick={() => {
              setSize(0);
              handelBorder(1);
            }}
          >
            <Image src="/img/icons/size.png" fill alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div
            className={styles.size}
            ref={btn2}
            onClick={() => {
              setSize(1);
              handelBorder(2);
            }}
          >
            <Image src="/img/icons/size.png" fill alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div
            className={styles.size}
            ref={btn3}
            onClick={() => {
              setSize(2);
              handelBorder(3);
            }}
          >
            <Image src="/img/icons/size.png" fill alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="cheese"
              name="cheese"
            />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="spicy"
              name="spicy"
            />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="garlic"
              name="garlic"
            />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
