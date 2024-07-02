import React, { FC, useState } from "react";
import { IProduct } from "../../interface/type";
import cartImg from "../../Images/Card/cart.svg";
import styles from "../../Styles/components/Card.module.scss";
import { useActions } from "../../Hooks/useActions";
import { useTypedSelector } from "../../Hooks/useTypedSelector";

const Card: FC<{ product: IProduct }> = ({ product }) => {
  const [isCartVisible, setIsCartVisible] = useState(true);
  const { addItem } = useActions();
  const cart = useTypedSelector((state) => state.cart);
  const isExistInCart = cart.some((p) => p.id === product.id);
  return (
    <div
      className={`${styles.card} ${isCartVisible ? styles.cardHovered : ""}`}
      onMouseEnter={() => setIsCartVisible(false)}
      onMouseLeave={() => setIsCartVisible(true)}
    >
      <div className={styles.cardImg}>
        <img src={product.image} alt="" />
      </div>
      <div className={styles.cardText}>
        <h3>{product.title}</h3>
        <p>$ {product.price}</p>
      </div>
      <div className={styles.addToCart}>
        <button onClick={() => !isExistInCart && addItem(product)}>
          {!isExistInCart ? (
            <div>
              <img src={cartImg} width="20"></img>
            </div>
          ) : (
            <div>Already in card</div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Card;
