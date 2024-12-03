import Item from "../../components/item/Item";
import "./Home.css"

const Home = () => {
    return ( 
        <>
        <Item img="../../public/img/IMG1.jpg" title="Produkt 1" price="20$" btn="Buy Now!" />

        <Item img="img/IMG2.jpeg" title="Produkt 2" price="90$" btn="Buy Now!" />

        <Item img="img/IMG3.jpeg" title="Produkt 3" price="40$" btn="Buy Now!" />
        </>
    );
}

export default Home;