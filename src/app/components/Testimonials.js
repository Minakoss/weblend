"use client";

const testimonials = [
  {
    name: "Γιάννης Παπαδόπουλος",
    feedback:
      "Εξαιρετική δουλειά! Το site μου έγινε γρήγορα και ήταν ακριβώς όπως το ήθελα.",
  },
  {
    name: "Μαρία Καραγιάννη",
    feedback:
      "Φανταστικό αποτέλεσμα! Το SEO optimization βοήθησε να αυξηθεί η επισκεψιμότητα στην ιστοσελίδα μου.",
  },
  {
    name: "Νίκος Δημητρίου",
    feedback:
      "Επαγγελματισμός και προσοχή στη λεπτομέρεια. Το e-shop μου λειτουργεί τέλεια!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-900 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Τι λένε οι πελάτες μας
      </h2>
      <div className="grid md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <p className="italic text-gray-300">"{testimonial.feedback}"</p>
            <h3 className="mt-4 font-semibold">{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
