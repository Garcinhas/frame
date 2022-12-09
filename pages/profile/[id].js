import axios from 'axios';
import styles from "/styles/Item.module.css";
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";

function Item({product = {}}){
    return (
        <div className={styles.div}>

        <Navbar/>

        <div className={styles.home}>
            <h1 className={styles.prod}>{product.title}</h1>
            <img src={product.image}></img>
            <h2>Valor: {product.price}</h2>
            <p className={styles.desc}><strong>Informações sobre o produto: </strong>{product.description}</p>
            <a className={styles.botao} href='#'>Comprar</a>
        </div>
        <Footer/>
        
        </div>
        )
    
}

export async function getStaticProps(context){
    const response = await axios.get (
        "https://fakestoreapi.com/products/"  + context.params.id
    );
    const product = await response.data;
    return{
        props: {product},
    }

}

export async function getStaticPaths(){
    const response = await axios.get(
        "https://fakestoreapi.com/products/"  
    );
    const products = await response.data;
    const paths = products.map((product) =>{
        return {params:{id:String(product.id)}};
    });
    
    return{
        paths,
        fallback:true,
    };
}

export default Item;

