import styles from "/styles/Navbar.module.css"

export default function Navbar(){
    return(
        <div className={styles.navbar}>
            <section>
                <div className={styles.hov}>
                    <input type="search" placeholder="Faça sua pesquisa" ></input>
                    <a className={styles.button} href="#" >Pesquisar</a>
                </div>
            </section>
            
            <section>
                <a className={styles.axios} href="/">Axios Shop</a>
            </section>
            
            <section className={styles.section}>
            <ul>
                <li>
                    <a href='/'>Home </a>
            
                    <a href="/products">Produtos</a>
                </li>
            </ul>
            </section>
        </div>
    )
}