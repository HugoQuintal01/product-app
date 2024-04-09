'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Menu from "@/app/components/menu/Menu";
import TopAnchor from "@/app/components/top-anchor/TopAnchor";
import Cart from "@/app/components/cart/Cart";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export default function Page({ params }: { params: { productId: string } }) {
  const router = useRouter();
  const { productId } = params;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  if (!product) {
    return <div className="loading-screen">
      <span>Loading...</span>
    </div>;
  }

  return (
    <main>
      <Menu />
      <TopAnchor />
      <div className="gridrowfull container-product">
        <div className="image-section col-d-6 col-12">
          <div className="image-container">
            <img src={product.image} alt={product.title} />
          </div>
        </div>
        <div className="product-info col-d-6 col-12">
          <h1 className="product-title col-12">{product.title}</h1>
          <div className="product-item col-12">
            <p className="product-item-title">Price: </p>
            <p className="product-item-content">{product.price} €</p>
          </div>
          <div className="product-item col-12">
            <p className="product-item-title">Category:</p>
            <p className="product-item-content">{product.category}</p>
          </div>
          <div className="product-item col-12">
            <p className="product-item-title product-item-title-description">Description:</p>
            <p className="product-item-content product-item-content-description">{product.description}</p>
          </div>
          <button className="add-to-cart">Add to Cart</button>
        </div>    
      </div>
      {/*<Cart />*/}
    </main>
  );
}
