"use client";

import useCart from "@/app/lib/hooks/useCart";
import { useUser } from "@clerk/nextjs";

import { MinusCircle, PlusCircle, Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Cart = () => {
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();
  const Total = cart.cartItems.reduce(
    (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
    0
  );
  const subTotalRounded = parseFloat(Total.toFixed(2));
  console.log(user);
  const customer = {
    clerkId: user?.id,
    email: user?.emailAddresses[0].emailAddress,
    name: user?.fullName,
  };
  const handleCheckout = async () => {
    try {
      if (!user) {
        router.push("/sign-in");
      } else {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
          method: "POST",
          body: JSON.stringify({
            cartItem: cart.cartItems,
            customer,
          }),
        });
        const data = await res.json();
        window.location.href = data.url;
        console.log(data);
      }
    } catch (err) {
      console.log("[checkout_POST]", err);
    }
  };
  const formattedTotal = Total.toLocaleString("vi-VN") + " vnđ";

  return (
    <div className="flex gap-20 py-16 px-10 max-lg:flex-col object-cover">
      <div className="w-2/3 max-lg:w-full">
        <p className="text-heading3-bold">Giỏ Hàng Của Bạn</p>
        <hr className="my-6 " />

        {cart.cartItems.length === 0 ? (
            <div className="w-full object-cover" ><Image src={'/cartItem.svg'} width={1000} height={100} alt="shopping cart"/></div>
          
        ) : (
          <div>
            {cart.cartItems.map((cartItem) => (
              <div
                key={cartItem.item._id}
                className="flex hover:bg-grey-1 px-4 py-3 gap-6 max-sm:flex-col max-sm:items-start w-full justify-between items-center"
              >
                <div className="flex items-center">
                  <Image
                    src={cartItem.item.media[0]}
                    width={100}
                    height={100}
                    alt="product"
                    className="rounded-lg w-32 h-32 object-cover"
                  ></Image>
                  <div className="flex flex-col gap-3 ml-4">
                    <p className="text-body-bold">{cartItem.item.title}</p>
                    <p className="">
                      Giá:{" "}
                      {cartItem.item.price.toLocaleString("vi-VN") + " vnđ"}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <MinusCircle
                    className="hover:text-red-1 cursor-pointer"
                    onClick={() => cart.decreaseQuantity(cartItem.item._id)}
                  />
                  <p className="text-body-bold">{cartItem.quantity}</p>
                  <PlusCircle
                    className="hover:text-red-1 cursor-pointer"
                    onClick={() => cart.increaseQuantity(cartItem.item._id)}
                  />
                </div>
                <Trash
                  className="hover:text-red-1 cursor-pointer"
                  onClick={() => cart.removeItem(cartItem.item._id)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="w-1/3 flex max-lg:w-full flex-col gap-8 bg-grey-1 border rounded-lg px-4 py-5">
        <p className="text-heading4-bold ">
          Sản Phẩm{" "}
          <span>{`(${cart.cartItems.length} ${
            cart.cartItems.length ? "items" : "items"
          })`}</span>
        </p>
        <div className="flex justify-between text-body-semibold">
          <span>Tổng Thanh Toán :</span>
          <span>{formattedTotal}</span>
        </div>

        <button
          className="border rounded-lg bg-white py-3 w-full  hover:bg-[#E85C0D] hover:text-white"
          onClick={handleCheckout}
        >
          Tiến Hành Thanh Toán
        </button>
      </div>
    </div>
  );
};
export const dynamic = "force-dynamic";

export default Cart;