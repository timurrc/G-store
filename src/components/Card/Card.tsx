import React, { FC } from "react";
import { ICard } from "../../interface/type";
import styles from "./Card.module.scss";
interface ICardProps {
  card: ICard;
}

const Card: FC<ICardProps> = ({ card }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img src={card.img} width="300" alt="" />
      </div>
      <h3>{card.title}</h3>
      <p>$ {card.price}</p>
    </div>
  );
};

export default Card;
