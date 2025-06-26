import { useState } from "react";
import HamroMenuLogo from "./HamroMenuLogo";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" shadow-md p-4 ">
      <div className="flex items-center justify-between max-w-[1300px] mx-auto">
        <HamroMenuLogo />

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-4 items-center">
          <Button>
            <Link to="/login">Login</Link>
          </Button>
          <Button>
            <Link to="/register">Register</Link>
          </Button>
        </nav>

        {/* Mobile Hamburger Icon */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden ">
          {isOpen ? <IoClose size={26} /> : <GiHamburgerMenu size={26} />}
        </button>
      </div>

      {/* Mobile Slide-In Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#f5f5dc] absolute w-full left-0 top-16 z-50 shadow-lg py-6 px-6">
          <div className="flex flex-col gap-4 items-center">
            <Button>
              <Link to="/login">Login</Link>
            </Button>
            <Button>
              <Link to="/register">Register</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
