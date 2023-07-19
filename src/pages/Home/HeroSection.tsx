const HeroSection = () => {
  return (
    <section className="h-screen w-full">
      <div className="container mx-auto relative h-full">
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-10/12 h-[50%] flex justify-around">
          {[3, 2, 1, -1, -2].map(item =>
            <div
              key={item}
              className="w-[17%] h-[90%] bg-[url(/images/hero.jpg)] bg-center bg-fixed bg-cover bg-no-repeat relative"
              style={{
                top: `${item * 20}px`
              }}
            />
          )}
        </div>
        <div className="relative flex flex-col justify-between px-[8%] pb-[5%] pt-[10%] h-full ">
          <div className="flex">
            <div className="md:w-6/12">
              <h1 className="font-bold text-3xl leading-10">
                If you can dream it, <br />We can build it
              </h1>
            </div>
          </div>
          <div className="flex justify-end">
            <h2 className="opacity-80 text-2xl font-[600] md:w-6/12">
              Whether you're looking to buy, rent or invest in real estate, or
              even develop your own property we've got you covered!
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
