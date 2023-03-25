import emoji from "../images/emoji.png";
import twitter from "../images/twitter.png"
import github from "../images/github.png"
import {Link, useMatch, useResolvedPath} from "react-router-dom"//new
import styles from './Navbar.module.css'
// import Home from './pages/Home';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';

export default function Navbar(){
return (
<nav className ={styles['navigation']} >
    <div className={styles.left}>
        <Link to='/' >
            <img src={emoji} alt="avatar" className={styles.avatar}/>
        </Link>
        <Link to='https://twitter.com/RahulMannepally' target='_blank' >
            <img src={twitter} alt="avatar" className={styles.contact}/>
        </Link>
        <Link to='https://github.com/rahulmannepally' target='_blank' >
            <img src={github} alt="avatar" className={styles.contact}/>
        </Link>
    </div>

<ul>
    <CustomLink to='/play' className={styles.right}>Game</CustomLink>
    <CustomLink to='/merch' className={styles.right}>Shop</CustomLink>
    {/* <CustomLink to='/contact'>Contact</CustomLink> */}
</ul>
</nav>);
}

function CustomLink({to,children,...props}){
    const resolvedPath = useResolvedPath(to);//new
    const isActive = useMatch({path: resolvedPath.pathname, end:true});//new
    return <li className={isActive?styles['active']:''}>
        <Link to={to} {...props}>
            {children}
        </Link>
    </li>;
}

//npm i react-router-dom