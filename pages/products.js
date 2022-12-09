import styles from "/styles/Products.module.css";
import axios from 'axios';
import Link from 'next/link';
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";

function Products ({products}){
    return(
        <div className={styles.div}>

        <Navbar/>
        <div className={styles.home}>
            <div>

                <h1 className={styles.axios}>Axios Shop</h1>
                <h2 className={styles.prod}>Nossos produtos</h2>

            </div>

                {products.map((product) =>(
                        
                        
                    <Link href='/profile/[id]' as={`/profile/${product.id}`}>
                        <div className={styles.products}>
                            <div>
                            <img src={product.image}></img>
                            <p>{product.title}</p>
                            </div>
                        </div>
                    </Link>
                ))}
        </div>
        <Footer/>
        </div>
            )
}

export async function getStaticProps(context){
    const response = await axios.get(
        "https://fakestoreapi.com/products/"
    );
    const data = await response.data;
    return{
        props: {products:data},
    }
}

export default Products;
