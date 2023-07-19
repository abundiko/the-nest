const PropertyFinder = () => {
  return (
    <section className="py-8 border-t border-b bg-[#00000011] px-8">
      <div className="container flex justify-between items-center rounded-lg border shadow-sm border-primary py-3 px-10">
        <div className="w-full flex items-center">
          {
            propertyData.map(({options,title},index)=>
            
            <>
            <div className="w-[18%] " key={title}>
            <h6 className="font-bold">{title}</h6>
            <div className="rounded-md bg-[#00000011] px-4 py-2 w-full">
              <select name="" id="" className="bg-transparent w-full">
                {
                  options.map(item=>
                  <option
                  className="p-2 bg-[#333] text-light"
                   value={item} key={item}>{item}</option>)
                }
              </select>
            </div>
          </div>
            {(index < propertyData.length-1) && <SpacerLine /> }
            </>)
          }
          
        </div>
        <button className="px-4 py-2 bg-primary inline-flex items-center text-light rounded-lg hover:scale-110 min-w-max">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 me-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          Search
        </button>
      </div>
    </section>
  );
};

export default PropertyFinder;

const SpacerLine = () => <div className=" h-20 w-[1px] bg-primary mx-5 opacity-50" />;

const propertyData = [
  {
    title: "Property Type",
    options: ["Home", "Office", "Land"]
  },
  {
    title: "Bedrooms",
    options: [1, 2, 3, 4, 5, 6]
  },
  {
    title: "Location",
    options: ["Owerri", "Asaba", "Lekki", "Island"]
  },
  {
    title: "Property Status",
    options: ["Recently Added", "Renting", "For Sale"]
  }
];
