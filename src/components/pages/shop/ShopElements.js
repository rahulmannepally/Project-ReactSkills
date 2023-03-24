import React from "react";
import Card from "./Card";
import styles from "./ShopElements.module.css"
// import CartContext from "../../../store/cart-context";

export default function ShopElements(props){
    const product = [
        {id:1,name:"shirt", price:24},
        {id:2,name:"shirt", price:23},
        {id:3,name:"shirt", price:22},
        {id:4,name:"shirt", price:19},
        {id:5,name:"shirt", price:14},
        {id:6,name:"shirt", price:13},
        {id:7,name:"shirt", price:45},
        {id:8,name:"shirt", price:52},
        {id:9,name:"shirt", price:65},
        {id:10,name:"shirt", price:32},
    ];
    // const [cartItems, setCarItems] = React.useState([]);

    // const cartCtx = React.useContext(CartContext);

    // const price = `$${props.price.toFixed(2)}`;

    // product.map((items) => {const addToCartHandler = (amount) => {
    //     cartCtx.addItem({
    //     id: props.id,
    //     name: props.name,
    //     amount: amount,
    //     price: props.price,
    //     });
    // };)};

    return (
        <div className={styles.con}>
            {product.map((items) => 
        <Card id={items.id} name={items.name} price={items.price} onClick={props.onShowCart} />)}
        </div>
        // onAddToCart={addToCartHandler} 
    );
}