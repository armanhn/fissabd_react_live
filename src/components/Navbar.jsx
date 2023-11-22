import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleLinks = () => setShowLinks(!showLinks);
  const toggleServicesDropdown = () => setIsServicesDropdownOpen(!isServicesDropdownOpen);

  const navigateTo = (path) => {
    navigate(path);
    // Close both the dropdown and the mobile menu
    setIsServicesDropdownOpen(false);
    setShowLinks(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className='flex items-center justify-between mx-auto max-w-6xl px-4 md:px-8'>
        {/* Logo */}
        <div>
          <Link className='hover:text-green' to="/"><img className="h-16" src="/images/fissa_logo.png" alt="FISSA BD" /></Link>

        </div>

        {/* Desktop Nav Links */}
        <div className='hidden md:flex md:flex-row md:items-center md:gap-8 text-text-color'>

          <a className='hover:text-green' href="/">Home</a>
          {/* Desktop Dropdown */}
          <div className='relative group'>
            {/* Trigger element */}
            <Link className='hover:text-green' to="/">Services</Link>
            {/* Dropdown Menu */}
            <ul className='absolute hidden group-hover:block bg-white shadow-md rounded-md overflow-hidden list-none w-56 z-10'>
              {/* Dropdown items */}
              <li><Link className='block px-4 py-2 hover:text-green-600' to="/home-internet">Home Internet</Link></li>
              <li><Link className='block px-4 py-2 hover:text-green-600' to="/corporate-internet">Corporate Internet</Link></li>
              <li><Link className='block px-4 py-2 hover:text-green-600' to="/bandwidth-reseller">Bandwidth Reseller</Link></li>
            </ul>
          </div>

          <a href="/#section-4" className='hover:text-green'>Packages</a>
          <a className='hover:text-green' href="/#bill-payments">Bill Payments</a>
          <Link className='hover:text-green' to="/aboutus">About Us</Link>
          <a className='hover:text-green' href="/#footer">Contact Us</a>
        </div>

        {/* Mobile Menu Button */}
        <div className='text-3xl md:hidden cursor-pointer' onClick={toggleLinks}>
          {showLinks ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Nav Links */}
      {showLinks && (
        <ul className='flex flex-col gap-6 text-text-color p-4 md:hidden'>
          <li><Link className='hover:text-green' onClick={() => navigateTo('/#')} to="/#">Home</Link></li>

          {/* Mobile Dropdown */}
          <li className='relative'>
            <button onClick={toggleServicesDropdown} className='hover:text-green flex items-center justify-between w-full py-2'>
              Services {isServicesDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {isServicesDropdownOpen && (
              <ul className='flex flex-col mt-1 space-y-2'>
                <li><button className='block px-4 py-2 hover:text-green-600' onClick={() => navigateTo('/home-internet')}>Home Internet</button></li>
                <li><button className='block px-4 py-2 hover:text-green-600' onClick={() => navigateTo('/corporate-internet')}>Corporate Internet</button></li>
                <li><button className='block px-4 py-2 hover:text-green-600' onClick={() => navigateTo('/bandwidth-reseller')}>Bandwidth Reseller</button></li>
              </ul>
            )}
          </li>

          <li><Link className='hover:text-green' onClick={() => navigateTo('/#section-4')} to="/#section-4">Packages</Link></li>
          <li><Link className='hover:text-green' onClick={() => navigateTo('/bill-payments#')} to="/bill-payments#">Bill Payments</Link></li>
          <li><Link className='hover:text-green' onClick={() => navigateTo('/aboutus')} to="/aboutus">About Us</Link></li>
          <li><Link className='hover:text-green' onClick={() => navigateTo('/#footer')} to="/#footer">Contact Us</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
