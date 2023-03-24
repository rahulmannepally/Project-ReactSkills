import React from "react";
// import Card from "./Card";
import Container from "../../ui/Container";
import ShopElements from "./ShopElements";
// import emptycart from "../../../images/emptycart.png";
import styles from "./Merch.module.css";
// import styles from "./Merch.module.css"
import Cart from "./Cart";
import CartProvider from "../../../store/CartProvider";
import HeaderCartButton from "./HeaderCartButton";


export default function Merch(){
    const [cartIsShown, setCartIsShown] = React.useState(false);

    const showCartHandler = () =>{
        setCartIsShown(true);
    }
    const hideCartHandler = () =>{
        setCartIsShown(false);
    }

    return (
    <Container>
        <CartProvider>
            {cartIsShown && <Cart onClose={hideCartHandler}/>}
            <div className={styles.shopnav}>
                <h1>Merch Shop</h1>
                <HeaderCartButton onClick={showCartHandler}/>
                {/* <button className={styles.cart} onClick={showCartHandler}>
                    <img src={emptycart}  alt="empty cart"  className={styles.img}/>
                </button> */}
            </div>
            <ShopElements onShowCart={showCartHandler}/>
        </CartProvider>
    </Container>
    );
}