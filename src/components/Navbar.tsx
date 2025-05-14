
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
      "navbar fixed top-4 left-0 right-0 mx-auto w-[95%] max-w-7xl z-50 p-3 border backdrop-blur-md",
      scrolled ? "navbar-scrolled" : ""
    )}>
      <div className="flex justify-between items-center">
        <Link to="/" className="text-lg font-medium pl-4 transform transition-all hover:scale-105 text-blue-300">
          Collegekendra
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/buy" className="px-4 py-2 hover:text-blue-400 transition-colors">
            Buy
          </Link>
          <Link to="/login" className="px-6 py-2 border border-slate-600 rounded-full hover:bg-slate-800 hover:border-blue-500 transition-colors text-slate-300">
            login
          </Link>
          <Link to="/signup" className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
            signup
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
