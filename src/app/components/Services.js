"use client";
import { FaLaptopCode, FaChartLine, FaShoppingCart } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Κατασκευή Ιστοσελίδων",
    description:
      "Σχεδιάζουμε και αναπτύσσουμε μοντέρνες και λειτουργικές ιστοσελίδες.",
  },
  {
    icon: <FaChartLine />,
    title: "SEO & Digital Marketing",
    description:
      "Βελτιστοποιούμε την ιστοσελίδα σας για τις μηχανές αναζήτησης και αναπτύσσουμε στρατηγικές marketing.",
  },
  {
    icon: <FaShoppingCart />,
    title: "E-commerce",
    description:
      "Δημιουργούμε πλήρως λειτουργικά e-shops για την επιχείρησή σας.",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-900 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Οι Υπηρεσίες μας</h2>
      <div className="grid md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <div className="text-5xl mb-4 text-blue-500">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
