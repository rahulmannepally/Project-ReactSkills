import Board from "./Board";
import styles from "./Tictactoe.module.css"
export default function Tictactoe(){
    return (
    <div className={styles.tictactoe}>
        <h1>Tic-tac-toe</h1>
        <Board />
    </div>
    );
}