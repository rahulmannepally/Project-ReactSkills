import React from "react";
import Card from "./Card";
import styles from "./ShopElements.module.css"
// import CartContext from "../../../store/cart-context";


export default function ShopElements(props){
    const product = [
        {id:1,name:"black shirt", price:24, image:"src/images/merch_images/black_shirt.png"},
        {id:2,name:"blue shirt", price:23, image:"src/images/merch_images/blue_shirt.png"},
        {id:3,name:"ggreen shirt", price:22, image:"src/images/merch_images/ggreen_shirt.png"},
        {id:4,name:"green shirt", price:19, image:"src/images/merch_images/green_shirt.png"},
        {id:5,name:"grey shirt", price:14, image:"src/images/merch_images/grey_shirt.png"},
        {id:6,name:"orange shirt", price:13, image:"src/images/merch_images/orange_shirt.png"},
        {id:7,name:"purple shirt", price:45, image:"src/images/merch_images/purple_shirt.png"},
        {id:8,name:"red shirt", price:52, image:"src/images/merch_images/red_shirt.png"},
        {id:9,name:"shirt1", price:65, image:"src/images/merch_images/shirt1.png"},
        {id:10,name:"yellow shirt", price:32, image:"src/images/merch_images/yellow_shirt.png"},
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
        <Card id={items.id} name={items.name} price={items.price} image = {items.image}  onClick={props.onShowCart} />)}
        </div>
        // onAddToCart={addToCartHandler} 
    );
}