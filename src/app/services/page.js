import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { FaPaperPlane, FaPlaneDeparture, FaRocket } from "react-icons/fa";

const services = [
  {
    icon: <FaPaperPlane />,
    title: "STANDARD",
    posts: "8 posts/μήνα",
    stories: "2 stories/μήνα",
    details: [
      "15ημερο Post Calendar",
      "Μηνιαίο Report",
      "Copywriting",
      "#hashtags",
      "1 Boost post +50€",
    ],
    price: "100€ / μήνα",
  },
  {
    icon: <FaPlaneDeparture />,
    title: "PLUS",
    posts: "12 posts/μήνα",
    stories: "4 stories/μήνα",
    details: [
      "15ημερο Post Calendar",
      "Μηνιαίο Report",
      "Copywriting",
      "#hashtags",
      "1 Boost post +50€",
    ],
    price: "150€ / μήνα",
  },
  {
    icon: <FaRocket />,
    title: "PRO",
    posts: "20 posts/μήνα",
    stories: "8 stories/μήνα",
    details: [
      "15ημερο Post Calendar",
      "Μηνιαίο Report",
      "Copywriting",
      "#hashtags",
      "3 Boost posts",
    ],
    price: "300€ / μήνα",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <section className="py-16 bg-gray-900 text-white text-center min-h-screen">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Οι Υπηρεσίες μας
        </h2>
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
