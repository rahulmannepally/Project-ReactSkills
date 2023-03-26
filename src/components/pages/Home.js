// import emoji from "../../images/emoji.png"
import styles from "./Home.module.css";
import Toasty from "./Toasty.js"
import { Fragment } from "react";
import Container from "../ui/Container";
export default function Home(){
    return <Fragment>
        <Container>
            <article className={styles.content}>
                <h1>Hey I am Rahul</h1>

                In this blog post, I will share some of my thoughts on the current state of front end development. 
                I will also discuss some of the challenges and opportunities that front end developers face. Finally, 
                I will share some tips on how to stay up-to-date with the latest trends in front end development.

                <h2>The Current State of Front End Development</h2>

                Front end development is constantly evolving. New technologies and frameworks are 
                being developed all the time. This can be both a challenge and an opportunity for 
                front end developers.

                On the one hand, it can be difficult to keep up with the latest trends. However, 
                on the other hand, it is also a great opportunity to learn and grow.

                <h2>The Challenges of Front End Development</h2>

                One of the biggest challenges that front end developers face is the ever-changing landscape of 
                front end development. As new technologies and frameworks are developed, existing technologies 
                and frameworks become obsolete. This can make it difficult to keep up with the latest trends and 
                technologies.

                Another challenge that front end developers face is the need to be able to work with a 
                variety of different technologies. Front end developers often need to be able to work 
                with HTML, CSS, JavaScript, and a variety of different frameworks. This can be a challenge, 
                as it requires front end developers to have a broad range of skills.

                <h2>The Opportunities of Front End Development</h2>

                Despite the challenges, there are also a number of opportunities for front end developers. 
                One of the biggest opportunities is the demand for front end developers. 
                The demand for front end developers is growing rapidly, as more and more businesses are 
                moving their websites and applications to the web.

                Another opportunity for front end developers is the ability to work remotely. 
                Front end developers can work from anywhere in the world, as long as they have an internet connection.
                This can be a great opportunity for front end developers who want to work from home or travel while 
                they work.

                How to Stay Up-to-Date with the Latest Trends in Front End Development

                There are a number of ways to stay up-to-date with the latest trends 
                in front end development. One way is to read blogs and articles written 
                by other front end developers. Another way is to attend conferences and workshops. 
                Finally, you can also follow front end developers on social media.

                By following these tips, you can stay up-to-date with the latest 
                trends in front end development and continue to grow your skills and knowledge.

                <h2>Conclusion</h2>
                Front end development is a challenging but rewarding field. 
                There are a number of opportunities for front end developers, 
                and the demand for front end developers is growing rapidly. 
                By staying up-to-date with the latest trends in front end development, 
                you can continue to grow your skills and knowledge and succeed in your career.
                
            </article>
            <Toasty />
        </Container>
    </Fragment>
}