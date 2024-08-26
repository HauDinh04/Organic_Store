"use client";
import useCart from "@/app/lib/hooks/useCart";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const PaymentSuccess = () => {
  const cart = useCart();
  useEffect(() => {
    cart.clearCart();
  }, []);
  return (
    <div className="flex flex-col w-full items-center justify-center gap-10">
      <Image
        src={"/buysuccess.svg"}
        width={800}
        height={100}
        alt="buy success"
        className=" items-center justify-center"
      ></Image>
      <button   className="border-2 bg-[#f0f0f0] px-5 py-3 rounded-xl hover:text-white hover:bg-[#E85C0D]">
        <Link href={'/'}>Tiếp Tục Mua Hàng</Link>
      </button>
    </div>
  );
};

export default PaymentSuccess;
