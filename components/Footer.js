import styles from "/styles/Footer.module.css"

export default function Footer(){
    return(
            <footer className={styles.footer}>
            <section className={styles.section}>
            <ul className={styles.ul}>
                <li>
                    <a href='/'>Termos de privacidade</a>
                </li>

                <li>
                    <a href="/products">Produtos</a>
                </li>
                <li>
                    <a href="#">Entre em contato</a>
                </li>
            </ul>
            </section>
            <section className={styles.section}>
            <ul className={styles.ul}>
                <li>
                    <a href='#'>Formatos de pagamento</a>
                </li>

                <li>
                    <a href="#">CNPJ</a>
                </li>
                <li>
                    <a href="#">Formas de entrega</a>
                </li>
            </ul>
            </section>
            <section className={styles.section}>
                <p>Gostaria de receber promoções de nossa loja?</p>
                <div>
                    <input type="email" placeholder="Seu email"></input>
                    <div><a className={styles.button} href="#" >Enviar</a></div>
                </div>
            </section>
            </footer>
    )
}   