import React, { useEffect, useState } from "react";
import Footer from "../components/footer";

import HamburgerMenu from "../components/header";

interface Iproducts {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <HamburgerMenu />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* { 
        products.length > 0 ? <ProductPage product = {products} /> : <div>Loading.....</div> *this is for homepage which I do not need rightn now.*
      }  */}
            {products.map((product) => {
              console.log(product, "product");
              const {
                id,
                title,
                price,
                description,
                category,
                image,
              }: Iproducts = product;

              return (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opcaity-55 mb-4 cursor-pointer">
                  <a className="block relative h-48 rounded overflow-hidden ">
                    <img
                      alt={title}
                      className="object-contain object-center w-full h-full block"
                      src={image}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {title}
                    </h2>
                    <p className="mt-1">${price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductPage;
