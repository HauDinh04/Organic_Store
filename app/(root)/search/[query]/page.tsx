import ProductCard from "@/app/components/ProductCard";
import { getSearchedProducts } from "@/app/lib/action/actions";


const SearchPage = async ({ params }: { params: { query: string }}) => {
  const searchedProducts = await getSearchedProducts(params.query)

  const decodedQuery = decodeURIComponent(params.query)

  return (
    <div className='flex flex-col px-10 py-5 justify-center items-center'>
      <p className='text-heading3-bold my-10'>Kết quả tìm kiếm cho {decodedQuery}</p>
      {!searchedProducts || searchedProducts.length === 0 && (
        <p className='text-body-bold my-5'>Không tìm thấy</p>
      )}
      <div className='flex flex-wrap justify-center gap-2'>
        {searchedProducts?.map((product: ProductType) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}


export const dynamic = "force-dynamic";
export default SearchPage