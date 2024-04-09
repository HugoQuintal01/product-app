import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import ProductList from "./components/product-list/ProductList";
import TopAnchor from "./components/top-anchor/TopAnchor";

export default function Home() {
  return (
    <main>
      <Menu />
      <TopAnchor />
      <Header />
      <ProductList />
    </main>
  );
}
