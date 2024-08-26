"use client";
import { useUser } from "@clerk/nextjs";
import { HeartIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
interface HeartProps{
product:ProductType,
updateSignedUser?: (updateUser: UserType) => void;
}
const HeartFavorite = ({ product ,updateSignedUser}:HeartProps) => {
  const { user } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [isLiked, setIsLiked] = useState(false);
  const getUser = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/users");
      const data = await res.json();
     
      setIsLiked(data.wishlist.includes(product._id));

      setLoading(false);
    } catch (err) {
      console.log("[getUser]", err);
    }
  };
  useEffect(() => {
    if (user) {
      getUser();
    }
  }, [user]);
  const handleLike = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    try {
      if (!user) {
        router.push("/sign-in");
        return;
      } else {
        setLoading(true);
        const res = await fetch("/api/users/wishlist", {
          method: "POST",
          body: JSON.stringify({ productId: product._id }),
        });
        const updatedUser = await res.json();
      
        setIsLiked(updatedUser.wishlist.includes(product._id));
        updateSignedUser && updateSignedUser(updatedUser)
      }
    } catch (err) {
      console.log("[wishlist_POST", err);
    }
  };
  return (
    <button onClick={handleLike}>
      <HeartIcon fill={`${isLiked ? "red" : "white"}`} />
    </button>
  );
};

export default HeartFavorite;
