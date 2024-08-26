import React from "react";
import { getCategories } from "../lib/action/actions";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const Categories = async () => {
  const categories = await getCategories();
  return (
    <div className="flex justify-center items-center flex-col my-10">
      <div className="">
        <p className="text-heading2-bold p-4">Danh Mục Hôm Nay</p>
        <Separator className="" />
      </div>

      <div className="mt-4 flex items-center max-sm:flex-col  gap-4 object-cover">
        {categories.map((category: CategoryType) => (
          <Link href={`/categories/${category._id}`} key={category._id}>
            <p className="py-2 px-12 border hover:bg-[#1A4D2E] hover:text-white rounded-xl ">
              {category.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
