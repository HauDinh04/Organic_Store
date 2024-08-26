"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { CircleUserRound, Menu, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useCart from "../lib/hooks/useCart";

const NavBar = () => {
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();
  const [query, setQuery] = useState("");
  const [dropdownMenu, setDropdownMenu] = useState(false);
  return (
    <div className="sticky shadow-md gap-2 flex justify-between items-center bg-white py-1 px-10  top-0 z-10 max-sm:px-2">
      <Link href={"/"}>
        <Image src={"/logo.svg"} alt="logo" width={130} height={100}></Image>
      </Link>
      <div className="items-center gap-6 flex text-base-bold max-lg:hidden">
        <Link href={"/"} className="hover:text-[#399918]">
          Trang chủ{" "}
        </Link>
        <Link
          href={user ? "/orders" : "/sign-in"}
          className="hover:text-[#399918]"
        >
          Đặt hàng
        </Link>
        <Link
          href={user ? "/wishlist" : "/sign-in"}
          className="hover:text-[#399918]"
        >
          Wish list
        </Link>
      </div>
      <div className=" flex gap-3 border border-grey-2 px-3 py-1 items-center rounded-lg ">
        <input
          className="max-sm:max-w-[120px] outline-none "
          placeholder="Tìm kiếm ..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          disabled={query === ""}
          onClick={() => {
            console.log("Query: ", query); // Debug: In giá trị query
            router.push(`/search/${query}`);
          }}
        >
          <Search className="cursor-pointer h-4 w-4 hover:text-red-1" />
        </button>
      </div>
      <div className=" relative flex gap-3 items-center ">
        <Link
          href={"/cart"}
          className="flex items-center gap-2 border rounded-lg px-2 py-1 hover:bg-[#E85C0D] hover:text-white max-md:hidden"
        >
          <ShoppingCart />
          <p>({cart.cartItems.length})</p>
        </Link>

        <Menu
          className="cursor-pointer lg:hidden"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />

        {dropdownMenu && (
          <div className="absolute top-12 right-5 flex flex-col gap-4 p-3 border rounded-lg bg-white text-base-bold lg:hidden">
            <Link href={"/"} className="hover:text-[#399918]">
              Trang chủ{" "}
            </Link>
            <Link
              href={user ? "/orders" : "/sign-in"}
              className="hover:text-[#399918]"
            >
              Đặt hàng
            </Link>
            <Link
              href={user ? "/wishlist" : "/sign-in"}
              className="hover:text-[#399918]"
            >
              Wish list
            </Link>
            <Link
              href={"/cart"}
              className="flex items-center gap-2 border rounded-lg px-2 py-1 "
            >
              <ShoppingCart />
            </Link>
          </div>
        )}
        {user ? (
          <UserButton afterSignOutUrl="/sign-in" />
        ) : (
          <Link href={"/sign-in"}>
            <CircleUserRound />
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
