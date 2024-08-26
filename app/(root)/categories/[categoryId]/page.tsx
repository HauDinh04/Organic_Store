import ProductCard from "@/app/components/ProductCard";
import { getCategoryDetails } from "@/app/lib/action/actions";
import Image from "next/image";
import React from "react";
const CategoryDetails = async ({
  params,
}: {
  params: { categoryId: string };
}) => {
  const categoryDetails = await getCategoryDetails(params.categoryId);
  return (
    <div className="px-10 py-5 flex flex-col items-center gap-8">
      <Image
        src={categoryDetails.image}
        width={1500}
        height={1000}
        alt="collection"
        className="w-[200px] h-[200px] object-cover rounded-xl"
      />
      <p className="text-heading3-bold text-grey-2">
        {categoryDetails.title}
      </p>
      <p className="text-body-normal text-grey-2 text-center max-w-[900px]">
        {categoryDetails.description}
      </p>
      <div className=""><p>Các sản phẩm từ danh  mục {categoryDetails.title}</p></div>
      <div className="flex flex-wrap gap-16 justify-center">
        {categoryDetails.products.map((product: ProductType) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};
export const dynamic = "force-dynamic";

export default CategoryDetails;