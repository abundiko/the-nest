const Intro = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-8 flex flex-wrap justify-around items-center">
        <div className="w-full md:w-6/12">
          <h1 className="font-bold text-3xl leading-10">
            We're here to help you find your dream home
          </h1>
          <h2 className="opacity-80 text-lg mt-8">
            Adullam is a trusted real estate company dedicated to delivering
            exceptional service. With our experienced team, industry knowledge,
            and commitment to excellence, we provide personalized solutions for
            all your real estate needs. Let us be your partner in achieving your
            real estate dreams. Contact us today.
          </h2>
        </div>
        <div className="w-11/12 md:w-5/12 p-2">
          <img
            src="/images/hero.jpg"
            alt="hero image"
            className="rounded-full shadow w-full object-cover aspect-[1/1]"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
