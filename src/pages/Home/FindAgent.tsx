const FindAgent = () => {
  return (
    <section className="py-10">
      <div className="bg-[#00000011] flex flex-wrap items-center">
        <img
          src="/images/hero.jpg"
          alt="an agent"
          className="w-full md:w-4/12 h-[80vh] object-cover clipped-img"
        />
        <div className="w-11/12 md:w-8/12 p-4 px-[4vw]">
          <h1 className="font-bold text-3xl mb-5">Find An Agent</h1>
          <p className="font-[500] text-lg opacity-80">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo maxime
            consequuntur suscipit cupiditate, rem animi molestiae temporibus
            ducimus quasi sunt soluta nulla similique, quaerat ipsam iure
            perspiciatis nostrum doloremque reprehenderit.
          </p>
          <div className="flex gap-3 mt-6">
            {findAgentData.map((item, index) =>
              <div key={index} className="w-fit text-center">
                <h4 className="font-bold text-lg">
                  {item.title}
                </h4>
                <img
                  src={`/images/${item.img}`}
                  className="text-primary h-20 w-20 mx-auto object-cover"
                />
              </div>
            )}
          </div>
          <div className="mt-6">
            <button className="px-10 py-5 font-[500] text-lg border border-primary inline-flex items-center  text-primary rounded-lg hover:scale-110 min-w-max">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 me-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              Agent Finder
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindAgent;

const findAgentData = [
  {
    title: "Expertise",
    img: "expertise.png"
  },
  {
    title: "Personalized Service",
    img: "personalized.png"
  },
  {
    title: "Smooth Process",
    img: "smooth.png"
  }
];
