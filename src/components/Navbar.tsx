import { NavLink } from "react-router-dom";

const navLinks = ["Home", "Property", "About Us", "Blog", "Agent Finder"];

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 z-30 bg-light h-20 w-full flex items-center justify-between md:px-32 px-10">
      <h4 className="font-extrabold text-lg">NEST</h4>
      <nav className=" w-fit hidden md:flex">
        {navLinks.map(item => {
          const to = `/${item.toLowerCase().replace(" ", "-")}`;
          return (
            <NavLink
              to={to}
              className="inline-block mx-2 opacity-80 hover:opacity-1 font-[500] hover:text-primary"
            >
              {item}
            </NavLink>
          );
        })}
      </nav>
      <button className="px-4 py-2 bg-primary text-light rounded-lg hover:scale-110">
        Contact Us
      </button>
    </header>
  );
};

export default Navbar;
