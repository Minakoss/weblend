"use client";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center bg-gray-800 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Αναπτύξτε την online παρουσία σας
      </h1>
      <p className="text-lg md:text-xl mb-6">
        Δημιουργούμε μοντέρνες και αποδοτικές ιστοσελίδες για κάθε ανάγκη.
      </p>
      <Link href="/services">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg">
          Δείτε τις υπηρεσίες μας
        </button>
      </Link>
    </section>
  );
};

export default HeroSection;
