import { useActions } from "../../Hooks/useActions";
import { useTypedSelector } from "../../Hooks/useTypedSelector";
import styles from "../../Styles/Layouts/Cart.module.scss";
import trash from "../../Images/trash.svg";
import { FC } from "react";
import { IProduct } from "../../interface/type";
const Cart: FC<{ product: IProduct }> = () => {
  const { cart } = useTypedSelector((state) => state);
  const { removeItem } = useActions();

  return (
    <div className="container">
      <div>
        {cart.map((product) => (
          <div key={`Cart item: ${product.id}`} className={styles.cartItem}>
            <img
              src={product.image}
              className={styles.productImage}
              alt={product.title}
            />
            <div className={styles.productText}>
              <b>{product.title}</b>
              <p>${product.price}</p>
            </div>
            <button onClick={() => removeItem({ id: product.id })}>
              <img className={styles.removeItem} src={trash} alt="" />
            </button>
          </div>
        ))}
      </div>
      <div className={styles.order}>
        {cart.length !== 0 ? (
          <button className={styles.btnPrimary}>
            <b>Order</b>
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Cart;
