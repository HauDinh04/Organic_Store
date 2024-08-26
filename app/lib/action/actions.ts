export const getCategories = async () => {
  const categories = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/categories`,
    {
      cache: "no-store",
    }
  );
  return await categories.json();
};
export const getCategoryDetails=async(categoryId:string)=>{
  const category=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories/${categoryId}`,{
    cache: "no-store",
  })
  return await category.json();
}



export const getProducts = async () => {
  const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
    cache: "no-store",
  });
  return await products.json();
};



export const getProductDetails = async (productId: string) => {
  const product = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`,
    {
      cache: "no-store",
    }
  );
  return await product.json();
};
export const getOrders = async (customerId: string) => {
  const order = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`
  );
  return await order.json();
};

export const getSearchedProducts = async (query: string) => {
  const searchedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`)
  return await searchedProducts.json()
}