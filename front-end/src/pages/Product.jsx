import React, { useContext } from "react";
import { ShopContext } from "../components/Context/ShopContext";
import { useParams } from "react-router-dom";
import ProductHd from "../components/ProductHd/ProductHd";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import ProductDescription from "../components/ProductDescription/ProductDescription";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <section className="max_pad_container py-28 ">
      <div>
        <ProductHd product={product} />
        <ProductDisplay product={product} />
        <ProductDescription />
        <RelatedProducts />
      </div>
    </section>
  );
};

export default Product;
