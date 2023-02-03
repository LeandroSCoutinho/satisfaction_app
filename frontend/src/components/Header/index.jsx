import styles from "./style.module.scss";
export default function Header(){
    return(
        <header className={styles.headerContainer}>
            <img src="logo.png" className={styles.logo} alt="Logo da empresa Golub"/>
            <h1>PESQUISA DE SATISFAÇÃO</h1>
            <h3>Queremos lhe ouvir, dê a sua nota!</h3>
        </header>
    )
}