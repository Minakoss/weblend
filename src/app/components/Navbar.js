"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        weblend
      </Link>
      <div className="space-x-4">
        <Link href="/services" className="hover:text-gray-400">
          Υπηρεσίες
        </Link>

        <Link href="/contact" className="hover:text-gray-400">
          Επικοινωνία
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
