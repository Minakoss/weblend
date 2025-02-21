"use client";
import { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { FaPaperPlane, FaPlaneDeparture, FaRocket } from "react-icons/fa";
import translations from "@/app/lib/translations";

export default function ServicesPage() {
  const [lang, setLang] = useState("en"); // Default στα αγγλικά

  useEffect(() => {
    const browserLang = navigator.language.startsWith("el") ? "el" : "en";
    setLang(browserLang);
  }, []);

  const t = translations[lang];

  const services = [
    {
      icon: <FaPaperPlane />,
      title: t.standard,
      posts: `8 ${t.posts}`,
      stories: `2 ${t.stories}`,
      details: t.details,
      price: `100${t.price}`,
    },
    {
      icon: <FaPlaneDeparture />,
      title: t.plus,
      posts: `12 ${t.posts}`,
      stories: `4 ${t.stories}`,
      details: t.details,
      price: `150${t.price}`,
    },
    {
      icon: <FaRocket />,
      title: t.pro,
      posts: `20 ${t.posts}`,
      stories: `8 ${t.stories}`,
      details: [...t.details.slice(0, 4), "3 Boost posts"],
      price: `300${t.price}`,
    },
  ];

  return (
    <>
      <Navbar />
      <section className="py-16 bg-gray-900 text-white text-center min-h-screen">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">{t.title}</h2>
        <div className="grid md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <div className="text-5xl mb-4 text-green-400">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-lg font-bold">{service.posts}</p>
              <p className="text-lg font-bold mb-2">{service.stories}</p>
              <ul className="text-gray-300 mb-4">
                {service.details.map((detail, i) => (
                  <li key={i} className="text-sm">
                    {detail}
                  </li>
                ))}
              </ul>
              <p className="text-2xl font-bold text-white">{service.price}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
