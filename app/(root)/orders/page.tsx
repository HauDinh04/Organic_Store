import { getOrders } from "@/app/lib/action/actions";
import { auth, useUser } from "@clerk/nextjs";
import Image from "next/image";

const OrderPage = async () => {
  const { userId } = auth();
  const orders = await getOrders(userId as string);

  return (
    <div className="px-10 py-5 max-sm:px-3">
      {!orders || (orders.length === 0 && <div className="flex flex-col object-cover justify-center items-center">
        <Image src={'/notorder.svg'} width={700} height={300} alt="order" />
      </div>)}
      <div className="flex flex-col gap-10">
     {orders.map((order:OrderType)=>(
      <div className="flex flex-col gap-8 mt-10 p-10 hover:bg-grey-1" key={order._id}>
        <div className="flex gap-10 max-md:flex-col max-md:gap-3">
          <p className="text-base-bold">Mã đơn hàng : {order._id}</p>
          <p className="text-red-1 text-base-bold">Tổng tiền thanh toán :  {Number(order.totalAmount).toLocaleString("vi-VN")} vnđ</p>
        </div>
        <div className="flex flex-col gap-5">
          {order.products.map((orderItem:OrderItemType)=>(
            <div className="flex gap-4" key={orderItem._id}>
              <Image src={orderItem.product.media[0]} alt="media" width={100} height={100} className="rounded-lg object-cover w-20 h-20"></Image>
              <div className="flex flex-col justify-between">
                <p className="text-small-bold">Sản phẩm : <span className="text-small-medium">{orderItem.product.title}</span></p>

                <p className="text-small-bold">Giá : <span className="text-small-medium"> {Number(orderItem.product.price).toLocaleString("vi-VN")} vnđ</span></p>
                <p className="text-small-bold">Số lượng : <span className="text-small-medium">{orderItem.quantity}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
     ))}
      </div>
      
    </div>
  );
};

export const dynamic = "force-dynamic";
export default OrderPage;