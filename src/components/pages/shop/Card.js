// import Container from "../../ui/Container";
import React from "react";
import styles from "./Card.module.css";
// import emoji from "../../../images/emoji.png";
import Input from "../../ui/Input";
import CartContext from "../../../store/cart-context";

export default function Card(props){
    // const [cartItems, setCartItems] = React.useState([]);


    const [amountIsValid, setAmountIsValid] = React.useState(true);
    const amountInputRef = React.useRef();
    const cartCtx = React.useContext(CartContext);

    const submitHandler = event => {
        event.preventDefault();
        // console.log(amountInputRef.current.value);
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
          ) {
            setAmountIsValid(false);
            return;
          }
        //   console.log(props.price);
        //   props.onAddToCart(enteredAmountNumber);
          cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: enteredAmountNumber,
            price: props.price,
            });
    };

    return (
        <div class={styles.card}>
            <form class={styles.content} onSubmit={submitHandler}>
                
                <img src ={require(`../../../images/merch_images/${(props.name).replace(" ","_")}.png`)} alt={'shirt'} className={styles.product} />
                <div class={styles.desc}>
                    <name className={styles.name}>{props.name}</name>
                    <price>${props.price}</price>
                    <Input
                        ref={amountInputRef}
                        label='Amount'
                        input={{
                        id: 'amount_' + props.id,
                        type: 'number',
                        min: '1',
                        max: '5',
                        step: '1',
                        defaultValue: '1',
                        }}
                    />
                </div>
                <button className={styles.cardbutton} >Add to cart</button>
                {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
            </form>
            
            {/* onClick={props.addToCartHandler} */}
        </div>

    );
}