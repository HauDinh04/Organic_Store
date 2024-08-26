"use client";

import Image from "next/image";
import Link from "next/link";

import HeartFavorite from "./Heart";
interface ProductCardProps {
  product: ProductType;
  updateSignedUser?: (updateUser: UserType) => void;
}
const ProductCard = ({ product,updateSignedUser }: ProductCardProps) => {
  const formattedPrice = Number(product.price).toLocaleString("vi-VN");
 
  return (
    <Link
      href={`/products/${product._id}`}
      className="w-[200px] flex flex-col gap-3 rounded-xl shadow-sm "
    >
      <Image
        src={product.media[0]}
        alt="product"
        width={200}
        height={250}
        className="h-[230px] object-cover rounded-md"
      ></Image>

      <div className="">
        <p className="text-base-bold">{product.title}</p>
        <p>{product.collection}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-body-bold">{formattedPrice} vnđ</p>
        <HeartFavorite product={product} updateSignedUser={updateSignedUser}/>
      </div>
    </Link>
  );
};

export default ProductCard;
