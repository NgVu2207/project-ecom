import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import bannerMen from "./img/bannermens.png";
import bannerWomen from "./img/bannerwomens.png";
import bannerKid from "./img/bannerkids.png";

function App() {
  return (
    <main className="bg-primary text-tertiary">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/mens"
            element={<Category category="men" banner={bannerMen} />}
          />
          <Route
            path="/womens"
            element={<Category category="women" banner={bannerWomen} />}
          />
          <Route
            path="/kids"
            element={<Category category="kid" banner={bannerKid} />}
          />
          <Route path="/Product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart-page" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
