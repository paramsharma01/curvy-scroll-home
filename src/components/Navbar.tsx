
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={cn(
      "navbar fixed top-4 left-0 right-0 mx-auto w-[95%] max-w-7xl z-50 bg-white/80 p-3 border border-gray-200 backdrop-blur-md",
      scrolled ? "navbar-scrolled" : ""
    )}>
      <div className="flex justify-between items-center">
        <Link to="/" className="text-lg font-medium pl-4 transform transition-all hover:scale-105">
          Collegekendra
        </Link>
        <div className="flex gap-4">
          <Link to="/login" className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            login
          </Link>
          <Link to="/signup" className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            signup
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
