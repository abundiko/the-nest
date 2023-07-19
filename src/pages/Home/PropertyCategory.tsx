const PropertyCategory = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-2 md:px-8 flex flex-wrap justify-center">
        <h1 className="font-extrabold text-3xl leading-10 text-center w-full relative mb-4">
          <span className="absolute font-extrabold text-[4vw] leading-[4vw] top-[20%] left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-10 text-primary">
            Our All-In-One Business
          </span>
          <span className="relative">Property Categories</span>
        </h1>
        <div className="w-6/12 md:w-4/12 p-2 flex flex-col gap-4">
          <div className="rounded-lg overflow-hidden shadow-lg w-full h-[30vh] md:h-[45vh] bg-[url(/images/hero.jpg)]">
            <div className="h-full w-full bg-[#00000077] flex justify-center items-center">
              <h1 className="font-bold md:font-extrabold text-2xl md:text-3xl text-light">
                Duplexes
              </h1>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg w-full h-[30vh] md:h-[25vh] bg-[url(/images/hero.jpg)]">
            <div className="h-full w-full bg-[#00000077] flex justify-center items-center">
              <h1 className="font-bold md:font-extrabold text-2xl md:text-3xl text-light">
                Offices
              </h1>
            </div>
          </div>
        </div>
        <div className="w-6/12 md:w-4/12 p-2 flex flex-col gap-4">
          <div className="rounded-lg overflow-hidden shadow-lg w-full h-[30vh] md:h-[35vh] bg-[url(/images/hero.jpg)]">
            <div className="h-full w-full bg-[#00000077] flex justify-center items-center">
              <h1 className="font-bold md:font-extrabold text-2xl md:text-3xl text-light">
                Estate
              </h1>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg w-full h-[30vh] md:h-[35vh] bg-[url(/images/hero.jpg)]">
            <div className="h-full w-full bg-[#00000077] flex justify-center items-center">
              <h1 className="font-bold md:font-extrabold text-2xl md:text-3xl text-light">
                Houses
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full md:w-4/12 p-2 flex  gap-4 flex-row md:flex-col">
          <div className="rounded-lg overflow-hidden shadow-lg w-full md:h-[25vh]  h-[30vh] bg-[url(/images/hero.jpg)]">
            <div className="h-full w-full bg-[#00000077] flex justify-center items-center">
              <h1 className="font-bold md:font-extrabold text-2xl md:text-3xl text-light">
                Apartments
              </h1>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg w-full md:h-[45vh]  h-[30vh] bg-[url(/images/hero.jpg)]">
            <div className="h-full w-full bg-[#00000077] flex justify-center items-center">
              <h1 className="font-bold md:font-extrabold text-2xl md:text-3xl text-light">
                Luxury
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyCategory;
