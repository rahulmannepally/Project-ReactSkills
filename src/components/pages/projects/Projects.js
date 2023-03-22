import Tictactoe from "./tictactoe/Tictactoe";
import styles from "./Projects.module.css"
export default function Projects(){
    return (
    <>
      <div className={styles.projects}>
        <h1>Projects</h1>
        <Tictactoe />
      </div>
      
    </>
);
}