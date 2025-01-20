import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              Your Logo
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-lg text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-lg text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link href="/services" className="text-lg text-gray-600 hover:text-gray-900 transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-lg text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
