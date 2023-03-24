import { useContext } from 'react';

import emptycart from "../../../images/emptycart.png";
import CartContext from '../../../store/cart-context';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={styles.cart} onClick={props.onClick}>
        <img src={emptycart}  alt="empty cart"  className={styles.img}/>
        <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

// className={styles.cart}
// className={styles.img}