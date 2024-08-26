import React from "react";
import { getProducts } from "../lib/action/actions";
import ProductCard from "./ProductCard";
import { Separator } from "@/components/ui/separator";

const Products = async () => {
  const products = await getProducts();

  return (
    <div className="flex flex-col items-center gap-5 py-5 px-3">
      <div className="">
        <p className="text-heading2-bold p-4">Sản Phẩm</p>
        <Separator />
      </div>

      <div className="flex flex-wrap gap-7 mx-auto">
        {products.map((product: ProductType) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
