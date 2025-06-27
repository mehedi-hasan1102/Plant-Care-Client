
import React from "react";
import { motion as Motion } from "framer-motion";

const promotions = [
  {
    id: 1,
    title: "Summer Plant Sale - Up to 50% Off",
    description:
      "Get your favorite indoor and outdoor plants at amazing discounts this summer season.",
    img: "https://freedesignfile.com/upload/2020/07/Summer-sale-up-to-50-off-Green-Background-Vector.jpg",
  },
  {
    id: 2,
    title: "Buy 2 Get 1 Free on Succulents",
    description:
      "Decorate your space with beautiful succulents. Buy two and get one absolutely free!",
    img: "https://www.thefoodstatecompany.com/content/images/thumbs/0001088_900.jpeg",
  },
  {
    id: 3,
    title: "Free Shipping on Orders Over $50",
    description:
      "Shop now and enjoy free shipping on all orders over $50. Limited time offer!",
    img: "https://st5.depositphotos.com/82875930/69062/v/450/depositphotos_690621590-stock-illustration-free-shipping-all-orders-tag.jpg",
  },
  {
    id: 4,
    title: "Exclusive Gift Packs for Plant Lovers",
    description:
      "Surprise your loved ones with curated gift packs that include plants and accessories.",
    img: "https://www.paloverdebotanicals.com/cdn/shop/files/Paloverde-Custom-Gift-Boxes.jpg?v=1683484220&width=1920",
  },
];

const PromotionalOffers = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-14 bg-gradient-to-b from-green-50 to-white dark:from-zinc-900 dark:to-zinc-800 transition-colors duration-300">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-700 dark:text-emerald-400">
          Promotional Offers
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-3 text-base max-w-xl mx-auto">
          Check out our latest promotions and special deals to help your plants thrive.
        </p>
      </div>

      <Motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {promotions.map((offer, index) => (
          <Motion.article
            key={offer.id}
            className="bg-white/70 dark:bg-zinc-800/70 backdrop-blur-md border border-green-200 dark:border-zinc-700 p-4 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[300px] group focus-within:ring-2 focus-within:ring-green-500"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            tabIndex={0}
            aria-label={`Promotion: ${offer.title}`}
          >
            <img
              src={offer.img}
              alt={offer.title}
              className="w-full h-36 object-cover rounded-xl mb-3 transition-transform duration-500 ease-in-out group-hover:scale-105"
              loading="lazy"
            />

            <div className="flex-1">
              <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-300 mb-1">
                {offer.title}
              </h3>

              <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3 leading-relaxed">
                {offer.description}
              </p>
            </div>
          </Motion.article>
        ))}
      </Motion.div>
    </section>
  );
};

export default PromotionalOffers;
