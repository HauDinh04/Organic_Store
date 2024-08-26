import Categories from "../components/Categories";
import Products from "../components/Products";
import Slideshow from "../components/SlideShow";

export default function Home() {
  return (
    <div className="">
      <Slideshow />
      <Categories />
      <Products />
    </div>
  );
}
export const dynamic = "force-dynamic";