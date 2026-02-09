import Comicsmain from "../components/Comicsmain.jsx";
import ProductList from "../components/products/ProductList.jsx";

export default function Main() {
    return (<main>
        <section className="main-img-bk"></section>
        <section className="page-style">
            <ProductList />
        </section>
        <Comicsmain />
    </main>);
}