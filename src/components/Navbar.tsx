import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#f2545b] shadow-md fixed top-0 left-0 w-full z-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-row justify-between items-center h-16">
          
          <Link to="/" className="text-2xl font-semibold text-white">
            KOTHA SATHI
          </Link>

          <div className="hidden md:block px-6">
            <input
              type="text"
              placeholder="Search..."
              className="w-[30rem] max-w-[30rem] border border-gray-300 rounded-lg px-4 py-2 text-white
               focus:outline-none focus:ring-none"
            />
          </div>

          <div className="flex items-center gap-4">
            
            <button className="md:hidden text-white transition">
              <Search size={22} />
            </button>

            <Link
              to="/help"
              className="text-white px-4 py-2 rounded transition"
            >
              Need help?
            </Link>

            <Link
              to="/login"
              className="text-white px-4 py-2 rounded transition"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
