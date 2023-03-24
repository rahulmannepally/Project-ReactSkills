import emoji from "../images/emoji.png"
import {Link, useMatch, useResolvedPath} from "react-router-dom"//new
import styles from './Navbar.module.css'
// import Home from './pages/Home';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';

export default function Navbar(){
return (
<nav className ={styles['navigation']} >
<Link to='/' className={styles.a}>
    <img src={emoji} alt="avatar" className={styles.avatar}/>
</Link>
<ul>
    <CustomLink to='/play'>Game</CustomLink>
    <CustomLink to='/merch'>Shop</CustomLink>
    <CustomLink to='/contact'>Contact</CustomLink>
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