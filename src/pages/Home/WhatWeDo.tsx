const WhatWeDo = () => {
  return (
    <section className="py-10 bg-secondary text-light WhatWeDo">
      <div className="container mx-auto px-8 flex flex-wrap justify-center">
        <h1 className="font-extrabold text-3xl leading-10 text-center w-full relative mb-4">
          <span className="absolute font-extrabold text-[4vw] leading-[4vw] top-[20%] left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-10 text-primary">
            What We're All About?
          </span>
          <span className="relative">What We Do</span>
        </h1>
        {whatWeDoData.map(({ title, subtitle, img }, index) =>
          <div key={index} className="w-11/12 sm:w-6/12 md:w-4/12 p-4">
            <div className="shadow-md relative rounded-md overflow-hidden p-3 border border-[#eeeeee22] group">
              <div className="absolute top-0 left-0 card-bg h-0 w-full group-hover:w-full group-hover:h-full rounded-sm bg-primary" />
              <div className="relative flex flex-col items-center text-center">
                <img src={`/images/svg/${img}`} alt="" className="h-40" />
                <h4 className="font-[500] text-xl my-3">
                  {title}
                </h4>
                <p className="opacity-80">
                  {subtitle}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhatWeDo;

const whatWeDoData = [
  {
    title: "Buy A Property",
    subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, illum! Minima sapiente dolore voluptatum ipsa.`,
    img: "buy-home.svg"
  },
  {
    title: "Sell A Property",
    subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, illum! Minima sapiente dolore voluptatum ipsa.`,
    img: "sell-home.svg"
  },
  {
    title: "Rent A Property",
    subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, illum! Minima sapiente dolore voluptatum ipsa.`,
    img: "apartment.svg"
  },
  {
    title: "Investment",
    subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, illum! Minima sapiente dolore voluptatum ipsa.`,
    img: "invest.svg"
  },
  {
    title: "Manage Property",
    subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, illum! Minima sapiente dolore voluptatum ipsa.`,
    img: "manage-home.svg"
  },
  {
    title: "Valuation",
    subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, illum! Minima sapiente dolore voluptatum ipsa.`,
    img: "valuate.svg"
  }
];
