import { ReactNode, useRef } from "react";

const ProductSlider = ({
  title,
  children
}: {
  title: string;
  children: ReactNode;
}) => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const itemsContainer = useRef<HTMLDivElement>(null);
  function scroll(left: boolean) {
    if (itemsContainer.current && scrollContainer.current) {
      const itemWidth = itemsContainer.current.children[0].clientWidth;
      if (left) {
        scrollContainer.current.scrollLeft -= itemWidth;
      } else scrollContainer.current.scrollLeft += itemWidth;
    }
  }
  return (
    <div className="my-3 ProductSlider">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          {title}
        </h1>
        <div className="w-fit flex">
          <button
            onClick={() => scroll(true)}
            className="rounded-full hover:bg-secondary bg-primary text-light h-12 w-12 flex justify-center items-center"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <div className="px-2" />
          <button
            onClick={() => scroll(false)}
            className="rounded-full hover:bg-secondary bg-primary text-light h-12 w-12 flex justify-center items-center rotate-180"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        </div>
      </div>
      <div
        className="scroll-container overflow-x-auto w-full"
        ref={scrollContainer}
      >
        <div className="flex" ref={itemsContainer}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
