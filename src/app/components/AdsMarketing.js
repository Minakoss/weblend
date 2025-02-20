"use client";
import { FaGoogle, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const AdsMarketing = () => {
  return (
    <section className="py-16 bg-gray-900 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Προώθηση με Διαφημίσεις
      </h2>
      <p className="mb-6 text-gray-300">
        Αναλαμβάνουμε τη δημιουργία και διαχείριση διαφημιστικών καμπανιών στις
        πιο δημοφιλείς πλατφόρμες.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {/* Google Ads */}
        <div className="flex flex-col items-center">
          <FaGoogle size={48} className="text-blue-400 mb-2" />
          <h3 className="text-lg font-semibold">Google Ads</h3>
          <p className="text-gray-400 text-sm">
            Διαφημίσεις στη Google για μέγιστη ορατότητα.
          </p>
        </div>

        {/* Facebook Ads */}
        <div className="flex flex-col items-center">
          <FaFacebook size={48} className="text-blue-500 mb-2" />
          <h3 className="text-lg font-semibold">Facebook Ads</h3>
          <p className="text-gray-400 text-sm">
            Στοχευμένες διαφημίσεις στο Facebook.
          </p>
        </div>

        {/* Instagram Ads */}
        <div className="flex flex-col items-center">
          <FaInstagram size={48} className="text-pink-500 mb-2" />
          <h3 className="text-lg font-semibold">Instagram Ads</h3>
          <p className="text-gray-400 text-sm">
            Αναδείξτε την επιχείρησή σας στο Instagram.
          </p>
        </div>

        {/* TikTok Ads */}
        <div className="flex flex-col items-center">
          <FaTiktok size={48} className="text-gray-200 mb-2" />
          <h3 className="text-lg font-semibold">TikTok Ads</h3>
          <p className="text-gray-400 text-sm">
            Διαφημίσεις στο TikTok για viral προβολή.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdsMarketing;
