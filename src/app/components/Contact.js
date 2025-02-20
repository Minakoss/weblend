"use client";

const Contact = () => {
  return (
    <section className="py-16 bg-gray-900 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Επικοινωνήστε μαζί μας
      </h2>
      <p className="mb-6 text-gray-300">
        Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας το συντομότερο
        δυνατόν.
      </p>

      <form className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Το όνομά σας"
            className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Το email σας"
            className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Το μήνυμά σας"
            rows="5"
            className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-300"
        >
          Αποστολή
        </button>
      </form>
    </section>
  );
};

export default Contact;
