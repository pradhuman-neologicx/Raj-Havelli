"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How far is the downtown from Hotel Raj Haveli Heritage?",
    a: "Hotel Raj Haveli Heritage is just 20 minutes walk from the downtown."
  },
  {
    q: "What is the nearest airport from the Hotel Raj Haveli Heritage?",
    a: "The nearest airport is Bikaner, located within 20 km from the Hotel Raj Haveli Heritage."
  },
  {
    q: "Does Hotel Raj Haveli Heritage have free parking?",
    a: "At Hotel Raj Haveli Heritage, parking is available for free."
  },
  {
    q: "What is check-in and check-out time at the Bikaner hotel?",
    a: "The check-in time at the Bikaner hotel starts at 12:00 and check-out time is till 12:00."
  },
  {
    q: "Are family rooms available in the hotel?",
    a: "Room options at the hotel include: Deluxe King Room, Executive King Suite, Guest Room."
  },
  {
    q: "Does the Hotel Raj Haveli Heritage have a swimming pool?",
    a: "The Hotel Raj Haveli Heritage features a swimming pool."
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        
        return (
          <div key={i} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between p-6 bg-muted/20 hover:bg-muted/40 transition-colors font-medium text-foreground text-left"
            >
              <span className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                <span>{faq.q}</span>
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="shrink-0 ml-4"
              >
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2 text-muted-foreground border-t border-border/10 leading-relaxed bg-muted/10">
                    <div className="ml-[44px]">
                      {faq.a}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
