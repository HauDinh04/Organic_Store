"use client";
import { useState } from "react";

import { MinusCircle, PlusCircle } from "lucide-react";
import useCart from "../lib/hooks/useCart";
import HeartFavorite from "./Heart";


const ProductInfo = ({ productInfo }: { productInfo: ProductType }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const formattedPrice = Number(productInfo.price).toLocaleString("vi-VN");
  const cart = useCart();
  return (
    <div className="max-w-[400px] flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <p className="text-heading3-bold">Tên sản phẩm: {productInfo.title}</p>
        <HeartFavorite product={productInfo} />
      </div>
      <div className="flex gap-2 ">
        <p className="text-base-medium text-grey-2">Phân Loại :</p>
        <p className="text-base-bold">{productInfo.collection}</p>
      </div>
      <div className="flex gap-2">
        <p className="text-base-medium text-grey-2">Giá :</p>
        <p className="text-heading-bold">{formattedPrice} vnđ</p>
      </div>
      <div className="flex gap-2 ">
        <p className="text-base-medium text-grey-2">Mô Tả</p>
        <p className="text-small-medium">{productInfo.description}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-base-medium text-grey-2">Số Lượng :</p>
        <div className="flex gap-4 items-center">
          <MinusCircle
            className="hover:text-red-1 cursor-pointer"
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
          />
          <p className="text-body-bold">{quantity}</p>
          <PlusCircle
            className="hover:text-red-1 cursor-pointer"
            onClick={() => setQuantity(quantity + 1)}
          />
        </div>
      </div>

      <button
        className="outline text-base-bold py-3 rounded-lg hover:bg-[#E85C0D] hover:text-white"
        onClick={() => {
          cart.addItem({ item: productInfo, quantity });
        }}
      >
        Thêm vào giỏ hàng
      </button>
    </div>
  );
};

export default ProductInfo;
