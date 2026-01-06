import Link from 'next/link';

const MainNavbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-black hover:text-gray-700">
              Evan E.
            </Link>
          </div>
          <div className="flex items-center gap-8 ">
            <Link href="/Projects" className="text-black hover:text-gray-200 transition">
              web
            </Link>
            <Link href="/Photography" className="text-black hover:text-gray-600 transition">
              photography
            </Link>
          </div>
          <div>
            <Link href="/Contact">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;