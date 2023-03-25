import styles from "./Container.module.css"
export default function Container({children,...props}){
    return <div className={styles.ontainer}>{children}</div>
}