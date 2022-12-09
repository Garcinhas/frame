import Navbar from "/components/Navbar";
import Footer from "/components/Footer";
import styles from "/styles/Home.module.css";


export default function Home(){
  return(
    <div className={styles.div}>
      <Navbar/>

      <div className= {styles.home}>
        
        <h1 className={styles.axios}>Axios Shop</h1>
        <h2 className={styles.prod}>Nossos produtos</h2>
        <a className={styles.botao} href="/products">Produtos</a>

      </div>
      
      <Footer/>
    </div>
  )
}