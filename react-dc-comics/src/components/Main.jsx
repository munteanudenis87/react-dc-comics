import Comicsmain from "../components/Comicsmain.jsx";
import ProductList from "../components/products/ProductList.jsx";

const Main = () => {
    return (<main className="position-relative">
        <div className="position-absolute current-series"><h1 className="text-light p-2 bg-primary">CURRENT SERIES</h1></div>
        <section className="main-img-bk">
        </section>
        <section className="page-style">
            <ProductList />
        </section>
        <Comicsmain />
    </main>);
}

export default Main;