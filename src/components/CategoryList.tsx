import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex justify-between gap-4 md:gap-8">
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/160426/lead-man-sun-sunglasses-160426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Placeholder Image"
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
            <h1 className="mt-8 font-light text-xl tracking-wide">
              Category Name
            </h1>
          </div>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/160426/lead-man-sun-sunglasses-160426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Placeholder Image"
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
            <h1 className="mt-8 font-light text-xl tracking-wide">
              Category Name
            </h1>
          </div>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/160426/lead-man-sun-sunglasses-160426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Placeholder Image"
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
            <h1 className="mt-8 font-light text-xl tracking-wide">
              Category Name
            </h1>
          </div>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/160426/lead-man-sun-sunglasses-160426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Placeholder Image"
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
            <h1 className="mt-8 font-light text-xl tracking-wide">
              Category Name
            </h1>
          </div>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/160426/lead-man-sun-sunglasses-160426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Placeholder Image"
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
            <h1 className="mt-8 font-light text-xl tracking-wide">
              Category Name
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
