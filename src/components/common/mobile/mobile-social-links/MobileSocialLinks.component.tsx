"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PiShareNetworkBold, PiXBold } from "react-icons/pi";
import { SOCIAL_MEDIA_LINKS } from "@/data";
import SocialLink from "../../social-link/SocialLink.component";

export default function MobileSocialLinks() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="xl:hidden flex fixed top-4 right-2 flex-col gap-4 z-50">
      <motion.button
        className="w-12 h-12 bg-black/50 flex items-center justify-center text-white rounded-full shadow-lg"
        onClick={() => setIsOpen((prev) => !prev)}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle social links"
        aria-expanded={isOpen}
        aria-controls="social-links"
        title={isOpen ? "Close social links" : "Open social links"}
        type="button"
      >
        <motion.div
          key={isOpen ? "close" : "open"}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {isOpen ? (
            <PiXBold className="w-6 h-6" />
          ) : (
            <PiShareNetworkBold aria-hidden className="w-6 h-6" />
          )}
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="flex flex-col gap-4"
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.1,
                },
              },
            }}
          >
            {SOCIAL_MEDIA_LINKS.map((link, index) => {
              return (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <SocialLink {...link} />
                </motion.li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
