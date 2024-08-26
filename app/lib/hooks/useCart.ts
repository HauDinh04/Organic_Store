import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import toast from "react-hot-toast";

interface CartItem {
  item: ProductType;
  quantity: number;
}

interface CartStore {
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (idToRemove: string) => void;
  increaseQuantity: (idToIncrease: string) => void;
  decreaseQuantity: (idToDecrease: string) => void;
  clearCart: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      cartItems: [],
      addItem: (data: CartItem) => {
        const { item, quantity } = data;
        const currentItem = get().cartItems;
        const existingItem = currentItem.find(
          (cartItem) => cartItem.item._id === item._id
        );
        if (existingItem) {
          return toast("Sản phẩm đã có trong giỏ hàng", { icon: "" });
        }
        set({ cartItems: [...currentItem, { item, quantity }] });
        toast.success("Thêm Thành Công");
      },
      removeItem: (idToRemove: string) => {
        const newCartItems = get().cartItems.filter(
          (cartItem) => cartItem.item._id !== idToRemove
        );
        set({ cartItems: newCartItems });
        toast.success("Đã Xóa Sản Phẩm Trong Giỏ Hàng");
      },
      increaseQuantity: (idToIncrease: string) => {
        const newCartItem = get().cartItems.map((cartItem) =>
          cartItem.item._id === idToIncrease
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        set({ cartItems: newCartItem });
        toast.success("Số lượng sản phẩm đã tăng");
      },
      decreaseQuantity: (idToDecrease: string) => {
        const newCartItem = get().cartItems.map((cartItem) =>
          cartItem.item._id === idToDecrease
            ? { ...cartItem, quantity: Math.max(cartItem.quantity - 1, 1) }
            : cartItem
        );
        set({ cartItems: newCartItem });
        toast.success("Số lượng sản phẩm đã giảm");
      },
      clearCart: () => set({ cartItems: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
