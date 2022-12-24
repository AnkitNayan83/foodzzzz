import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Featured.module.css";

export const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/icons/featured3.jpg",
    "/img/icons/featured4.jpg",
    "/img/icons/featured5.jpg",
  ];
  const images1 = [
    "/img/pizza/pizza_3.png",
    "/img/pizza/pizza_1.png",
    "/img/pizza/pizza_2.png",
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image
          src="/img/icons/arrowl.png"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image
              src={img}
              className={styles.imgDisplay}
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image
          src="/img/icons/arrowr.png"
          fill
          alt=""
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};
