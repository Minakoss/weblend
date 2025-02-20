"use client";
import Image from "next/image";

const projects = [
  {
    image: "/projects/webdesign.jpg",
    title: "Web Design",
    description: "Μοντέρνος και λειτουργικός σχεδιασμός ιστοσελίδων.",
  },
  {
    image: "/projects/seo.jpg",
    title: "SEO Optimization",
    description:
      "Βελτιστοποίηση SEO για υψηλή κατάταξη στις μηχανές αναζήτησης.",
  },
  {
    image: "/projects/ecommerce.jpg",
    title: "E-commerce",
    description: "Κατασκευή ηλεκτρονικών καταστημάτων με υψηλή απόδοση.",
  },
];

const Portfolio = () => {
  return (
    <section className="py-16 bg-gray-800 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Portfolio</h2>
      <div className="grid md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="p-4 bg-gray-700 rounded-lg shadow-lg">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={250}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
