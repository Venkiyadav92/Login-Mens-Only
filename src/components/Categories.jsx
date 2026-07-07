import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const CATEGORIES = [
  {
    name: "Shirts",
    tagline: "Formal to casual, always sharp",
    img: "/products/shirts/chambray-heart-print.jpg",
    to: "/shirts",
  },
  {
    name: "Pants",
    tagline: "Tailored fits for every occasion",
    img: "/products/pants/khaki-chino.jpg",
    to: "/pants",
  },
  {
    name: "T-Shirts",
    tagline: "Everyday comfort, everyday style",
    img: "/products/tshirts/plain-white-tee.jpg",
    to: "/tshirts",
  },
  {
    name: "Track Pants",
    tagline: "Built for movement and comfort",
    img: "/products/trackpants/striped-black-joggers.jpg",
    to: "/track-pants",
  },
];

export default function Categories() {
  return (
    <section id="shop" className="relative bg-cream py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs tracking-[0.3em] text-gold-dark uppercase">Our Collections</span>
          <h2 className="font-display text-4xl sm:text-5xl text-ink mt-4">
            SHOP BY <span className="text-gradient-gold">CATEGORY</span>
          </h2>
          <p className="text-ink/70 mt-4">
            Four curated collections, every piece chosen for fit, fabric, and finish.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, i) => {
            const cardProps = {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, amount: 0.3 },
              transition: { duration: 0.5, delay: i * 0.1 },
              className:
                "group relative aspect-[3/4] rounded-2xl overflow-hidden border border-ink/10 hover:border-gold-dark/50 transition-all duration-300",
            };

            const content = (
              <>
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent group-hover:from-ink/95 transition-all" />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-2xl text-white group-hover:text-gold transition-colors">
                        {cat.name}
                      </h3>
                      <p className="text-sm text-gray-400 mt-1 max-w-[85%]">{cat.tagline}</p>
                    </div>
                    <span className="flex-shrink-0 rounded-full bg-gold/10 border border-gold/30 p-2 text-gold group-hover:bg-gold group-hover:text-ink transition-all">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </div>
              </>
            );

            if (cat.to) {
              return (
                <MotionLink key={cat.name} to={cat.to} {...cardProps}>
                  {content}
                </MotionLink>
              );
            }

            return (
              <motion.a
                key={cat.name}
                href="https://wa.me/919677340615"
                target="_blank"
                rel="noopener noreferrer"
                {...cardProps}
              >
                {content}
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
