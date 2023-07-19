export type ListingCardProp = {
  name: string;
  location: string;
  price: string;
  img: string;
  rooms: {
    bedroom: number;
    bathroom: number;
    toilet: number;
  };
};
const ListingCard = ({
  name,
  img,
  location,
  price,
  rooms: { bathroom, bedroom, toilet }
}: ListingCardProp) => {
  return (
    <div className="p-2">
      <div className="rounded border border-[#00000011] overflow-hidden shadow-md w-72 relative">
        <img
          src={`/images/${img}`}
          alt={name}
          className="h-[40vh] max-h-[200px] min-h-[120px] object-cover"
        />
        <div className="p-2">
          <h6 className="font-bold text-xl mb-2">
            {name}
          </h6>
          <p>
            <svg
              className="h-5 w-5 text-primary inline-block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 2C8.68629 2 6 4.68629 6 8C6 13.25 12 22 12 22C12 22 18 13.25 18 8C18 4.68629 15.3137 2 12 2Z" />
              <circle cx="12" cy="8" r="2" fill="currentColor" />
            </svg>
            &nbsp;
            <span>{location}</span>
          </p>
          <p className="font-bold opacity-80 text-green-900 mt-2">
            &#8358;
            <span>{price}</span>
          </p>
        </div>
        <div className="bg-secondary text-light p-2 flex justify-around w-1/2 absolute bottom-0 right-0 rounded-tl-lg">
          <div className="w-fit text-sm flex items-center">
            <svg
              className="h-5 w-5 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M3 8v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8H3zm16 0h2M5 12h14M6 16h12" />
            </svg>
            &nbsp;
            <span>{bedroom}</span>
          </div>
          <div className="w-fit text-sm flex items-center">
            <svg
              className="h-5 w-5 inline-block"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M7 11h10v2H7v-2zM12 2C6.48 2 2 6.48 2 12v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5c0-5.52-4.48-10-10-10z" />
              <path d="M12 22v-5M5 12h14" />
            </svg>
            &nbsp;
            <span>{toilet}</span>
          </div>
          <div className="w-fit text-sm flex items-center">
            <svg
              className="h-5 w-5 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M2 6l2-2h3l2 2M6 8V6M18 6l-2-2h-3l-2 2M18 8V6M15 10h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h3M10 3v10M14 3v10" />
            </svg>
            &nbsp;
            <span>{bathroom}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
