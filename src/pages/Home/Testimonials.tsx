import { useState } from "react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="pt-10 pb-20">
      <div className="container mx-auto px-2 md:px-8 flex flex-wrap justify-center">
        <h1 className="font-extrabold text-3xl leading-10 text-center w-full relative mb-4">
          <span className="absolute font-extrabold text-[4vw] leading-[4vw] top-[20%] left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-10 text-primary">
            Satisfied Clients Said
          </span>
          <span className="relative">Testimonials</span>
        </h1>
        <div className="w-full md:w-10/12 flex overflow-x-hidden md:overflow-x-clip">
          {testimonialsData.map(({ img, title, subtitle }, index) =>
            <div
              style={{
                transform: `translateX(-${activeIndex * 100}%)`
              }}
              key={index}
              className={`w-full min-w-full md:w-4/12 md:min-w-min p-3 flex flex-col text-center items-center relative ${index ==
                1 && "md:top-16"}`}
            >
              <img
                src={`/images/${img}`}
                alt={title}
                className="rounded-full h-40 w-40 shadow-lg"
              />
              <h1 className="my-3 font-bold text-lg">
                {title}
              </h1>
              <p className="opacity-80">
                {subtitle}
              </p>
            </div>
          )}
        </div>
        <div className="w-full py-5 flex justify-center md:hidden">
          {[0, 1, 2].map(item =>
            <button
              onClick={() => setActiveIndex(item)}
              key={item}
              className={`h-5 w-5 rounded-full mx-3 ${item === activeIndex
                ? "bg-primary"
                : "bg-[#00000022]"}`}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

const testimonialsData = [
  {
    img: "hero.jpg",
    title: "John Doe 1",
    subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              eum sapiente soluta error sunt mollitia quae excepturi ipsam,
              velit enim?`
  },
  {
    img: "hero.jpg",
    title: "John Doe 2",
    subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              eum sapiente soluta error sunt mollitia quae excepturi ipsam,
              velit enim?`
  },
  {
    img: "hero.jpg",
    title: "John Doe 3",
    subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              eum sapiente soluta error sunt mollitia quae excepturi ipsam,
              velit enim?`
  }
];
