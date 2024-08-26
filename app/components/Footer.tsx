import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#F5F7F8]   ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              alt="logo"
              width={130}
              height={100}
            ></Image>
          </Link>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 dark:text-black">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Về chúng tôi
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Thực hiện bởi
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Giấy phép
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
               Liên hệ
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-black sm:text-center dark:text-black">
          © 2024{" "}
          <a href="/" className="hover:underline">
            Organic Foods™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
