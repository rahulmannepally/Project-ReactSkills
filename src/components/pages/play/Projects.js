import Container from "../../ui/Container";
import Tictactoe from "./tictactoe/Tictactoe";
// import styles from "./Projects.module.css"
export default function Projects(){
    return (
    <>
      <Container>
        <h1>Play</h1>
        <Tictactoe />
      </Container>
    </>
);
}