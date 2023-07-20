import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer py-10 bg-secondary text-light">
      <div className="container px-5 flex flex-wrap justify-between">
        <div className="w-11/12 md:w-3/12">
          <h4 className="font-extrabold text-lg mb-6">NEST</h4>
          <h6 className="opacity-80 mb-3">
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
            <span>No. 12 St. Petersburg, Owerri</span>
          </h6>
          <h6 className="opacity-80 mb-3">
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
            <span>
              <a
                href="mailto:abundiko111@gmail.com"
                className="hover:text-blue-300 hover:underline"
              >
                info@the-nest.com
              </a>
            </span>
          </h6>
          <h6 className="opacity-80 mb-3">
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
            <span>+234 (0)70 0000 0000</span>
          </h6>
        </div>
        <div className="flex w-fit mt-6 md:mt-0">
          {footerData.map(({ title, links }, index) =>
            <div className="w-40 flex flex-col" key={index}>
              <h4 className="font-[500] mb-4">
                {title}
              </h4>
              {links.map(link =>
                <Link
                  key={link}
                  to={`/${link.toLowerCase()}`}
                  className="opacity-60 hover:opacity-90 hover:translate-x-4"
                >
                  {link}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const footerData = [
  {
    title: "Company",
    links: ["Home", "About", "Blog", "Property", "FAQs"]
  },
  {
    title: "Services",
    links: [
      "Buy Homes",
      "Sell Homes",
      "Rent Homes",
      "Valuation",
      "Investment",
      "Management"
    ]
  }
];
