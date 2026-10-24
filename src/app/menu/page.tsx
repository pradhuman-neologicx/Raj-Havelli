"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Search, X } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { hotelDetails } from "@/data";

// "*" at the start of an item = non-veg. Format: "name|price|description"
type Group = [string, string[]];
type Section = [string, Group[]];

const MENU: Section[] = [
["Soups",[["",[
"Cream Soup (Mushroom / Veg)|200","Tomato Soup|200","Hot & Sour Veg. Soup|200","Sweet Corn Veg. Soup|200","Veg. Clear Soup|200","Lentil Soup|200",
"*Hot & Sour Chicken Soup|220","*Sweet Corn Chicken Soup|220","*Chicken Clear Soup|220","*Chicken Manchow Soup|220"]]]],
["Tandoori Khazana",[["Vegetarian",[
"Paneer Tikka (8 pcs)|310|Fresh paneer marinated with curd, chilli powder, grilled in tandoor",
"Paneer Malai Tikka (8 pcs)|355|Fresh paneer marinated with curd, cashew paste, white chilli powder, grilled in tandoor",
"Achari Paneer Tikka (8 pcs)|320|Fresh paneer, royal chilli organic",
"Banjara Paneer Tikka (8 pcs)|335","Paneer Nazrana Tikka (8 pcs)|320",
"Mushroom Tikka (12 pcs)|300|Mushroom marinated in red tandoori sauce, grilled in tandoor",
"Tandoori Soya Chaap (6 pcs)|280|Chaap marinated in red tandoori sauce, grilled in tandoor",
"Tandoori Hot Potato|250","Veg. Seekh Kebab (8 pcs)|220","Makai Seekh Kebab (8 pcs)|300"]],
["Non-Vegetarian",[
"*Tandoori Chicken (4 pcs)|360|Chicken marinated in curd, red chilli powder, grilled in tandoor",
"*Tangdi Kebab, red/white (4 pcs)|385",
"*Chicken Tikka (8 pcs)|330|Boneless chicken marinated in curd, red chilli powder, grilled in tandoor",
"*Malai Chicken Tikka (8 pcs)|370|Boneless chicken marinated in curd & spices, grilled in tandoor",
"*Hariyali Chicken Tikka (8 pcs)|350",
"*Afghani Chicken (4 pcs)|385|Chicken marinated in cashew nut sauce, grilled in tandoor",
"*Chicken Gulati Kebab (8 pcs)|350","*Chicken Seekh Kebab (8 pcs)|350","*Chicken Banjara Kebab (8 pcs)|340",
"*Fish Tikka (8 pcs)|400","*Afghani Fish Tikka (8 pcs)|400","*Lemon Fish Tikka (8 pcs)|400"]]]],
["Appetizer",[["",[
"Hara Bhara Kebab|220|Mashed green vegetable dumpling, deep fried","Veg. Sammi Kebab|220","Palak Papadi Kebab|220","Dahi Kebab|220",
"Cheese Corn Tikki|240","Potato Tikki (6 pcs)|250","Mushroom Fry|240","French Fry|180","Stick Fried Potato|260","Assorted Veg. Pakoda|160",
"Paneer Pakoda|200","Paneer Finger|250","Veg. Cutlet (6 pcs)|280","Cheese Corn Bite (12 pcs)|250",
"*Fried Chicken (8 pcs)|280","*Chicken Wings (6 pcs)|280","*Chicken Butter Fried|280","*Chicken Saute|280","*Chicken Peri-Peri|320",
"*Lemon Chicken|320","*Sesame Chicken|320","*Chicken 95 (8 pcs)|320|Finger cut chicken cooked in Chinese sauce",
"*Chicken 65 (8 pcs)|320","*Fish Finger (8 pcs)|425|Finger cut fish fried golden brown, served with tartar sauce"]]]],
["Chinese",[["",[
"Veg. Chowmein|230","Hakka Noodles|230","Chinese Bhel|230","Veg. Manchurian|230","Chilli Paneer|260","Garlic Paneer|260",
"Honey Chilli Potato|220","Crispy Corn|220","Chilli Mushroom|240","Veg. Fried Rice|220","Veg. Spring Roll|230",
"*Chicken Chowmein|300","*Chicken Hakka Noodles|280","*Chicken Sweet and Spice|320","*Chicken Stick|380","*Chicken Fried Rice|280",
"*Chilli Chicken|320","*Chicken Spring Roll|290","*Chicken Lollipop|300","*Chilli Fish|400"]]]],
["Main Course",[["Vegetarian",[
"Paneer Butter Masala|335|Traditional, veg. sauce cubes simmered in rich tomato & cream sauce",
"Paneer Tikka Masala|360|Tandoori paneer tikka with onion, tomato, served with veg. gravy",
"Kadai Paneer|335","Shahi Paneer|365","Paneer Khurchan|320","Palak Paneer|345","Paneer Korma|370",
"Malai Kofta|385|Mixed veg. in creamy sauce","Gatta Curry|280|Preparation from Royal Rajasthan",
"Dum Aloo Banarsi|340|Fried potatoes in Banarasi-style Indian gravy","Aloo Pyaza|235","Jeera Aloo|220","Tava Aloo Gobi|250",
"Veg. Kofta Curry|320|Cottage cheese dumpling in Indian gravy","Palak Baby Corn|300|American corn cooked with spinach gravy",
"Chole Masala|265|Chick-peas cooked in rich Indian gravy","Mix Vegetable|290|Veg. combination with Indian spices",
"Mushroom Masala|310|Button mushroom in mild spiced gravy"]],
["Non-Vegetarian",[
"*Butter Chicken|480|Roasted chicken cooked in butter & cream with tomato gravy",
"*Kadai Chicken|400|Traditional, with capsicum, served in kadai pot",
"*Bikaneri Chicken (chef special)|420","*Chicken Patiala|425","*Chicken Chingari|425",
"*Chicken Tikka Masala|435|Tender chicken in tangy thick tomato base, rich Indian gravy",
"*Egg Chicken Masala|425","*Red Chicken (minced chicken in Indian spices)|425","*Chicken Korma|450|Chicken served with white gravy",
"*Mutton Korma|500","*Mutton Laal Maas|500|Preparation from Royal Rajasthan","*Mutton Kali Mirch|500","*Egg Curry|250",
"*Fish Curry|435|Traditional fish in chef special yellow mustard & garlic paste"]]]],
["Rice",[["",[
"Steam Rice|140","Jeera Rice|200|Steamed long grain basmati tempered with cumin seeds",
"Veg. Biryani|250|Vegetables & basmati rice with traditional masala","Veg. Rice Pulaov|220","Corn & Kabuli Pulaov|220",
"*Chicken Dum Biryani|400","*Tandoori Tikka Biryani|425","*Mutton Dum Biryani|500","*Egg Biryani|280"]]]],
["Dal",[["",["Dal Tadka|240","Dal Banjara|275","Plain Dal|240","Dal Panchmel|280","Dal Makhani|320"]]]],
["Curds",[["",["Plain Curd|140","Mix Veg. Raita|180","Bundi Raita|180","Pineapple Raita|200","Laccha Onion Raita Masala|230"]]]],
["Sandwiches",[["",[
"Veg Grilled Sandwich|175","*Chicken Grilled Sandwich|225","Veg Sandwich|135","Cheese Sandwich|145","*Non Veg Club Sandwich|275",
"Veg Club House|220","Cheese Tomato Sandwich|145","*Chicken Cheese Sandwich|210","Potato Grilled Sandwich|135","Veg Cheese Sandwich|165"]]]],
["Breads",[["",[
"Tandoori Roti (Plain / Butter)|50 / 60","Naan (Plain / Butter)|75 / 95","Garlic Naan|110","Missi Roti|90","Laccha Paratha|95",
"Pudina Laccha Paratha|95","Stuffed Paratha|90","Stuffed Kulcha|90","Rumali Roti|100","Tawa Fulka (Plain / Butter)|40 / 50"]]]],
["Salads & Papad",[["Salads",["Green Salad|100","Onion Salad|100","Russian Salad|200","Aloo Chat|160","Black Chana Masala|220","Plain Peanut|100","Masala Peanut|200"]],
["Papad",["Masala Papad (Fried & Roasted)|70","Plain Papad|40"]]]],
["Combos",[["",[
"Dal Makhani with Laccha Paratha / Garlic Naan|240","Paneer Tikka Masala with Laccha Paratha / Butter Naan|240",
"Palak Paneer with Missi Roti / Butter Naan|240","Palak Corn with Missi Roti|200","Fried Rice with Veg. Manchurian Gravy|240",
"Dal Fry with Jeera Rice|200","Tandoori Aloo Paratha Butter with Plain Curd|180","Chole Bhatura / Kulcha / Std Naan|200",
"*Butter Chicken with Butter Naan / Laccha Paratha|280","*Chicken Curry with Garlic Naan|280","*Chicken Tikka Masala with Laccha Paratha|280",
"*Chicken Tikka Dum Biryani with Onion Raita|300","*Egg Curry with Butter Roti / Butter Naan|160"]]]],
["Rolls",[["",[
"Paneer Tikka Kathi Roll (Paratha / Rumali Roti)|220","Veg Keema Kathi Roll with Soya Keema|220",
"*Tandoori Chicken Kathi Roll (Paratha / Rumali Roti)|280","*Egg & Chicken Mix Kathi Roll (Jamboo)|350","*Egg Kathi Roll|260"]]]],
["Beverage & Dessert",[["",[
"Cold Coffee with Ice-cream|140","Hot Coffee|70","Hot Milk|100","Tea|60","Lassi (Masala / Sweet)|90","Sweet Lime Soda|90",
"Cold Drink|50","Mineral Water|80","Jugal Bandi (Gulab Jamun with Ice-cream)|160","Ice-cream (1 cup)|100"]]]]
];

// Height of sticky bar (top-0 because global navbar is hidden on menu page)
const STICKY_TOP = "top-0";

type Filter = "all" | "veg" | "nonveg";

function highlightMatch(text: string, query: string) {
  const q = query.trim();
  if (!q) return text;
  const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-primary/20 text-primary font-semibold rounded px-0.5">
        {part}
      </mark>
    ) : (
      part
    )
  );
}

export default function MenuList() {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const isClickScrolling = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Apply veg/non-veg filter + search, including category title & group label matches
  const sections = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MENU.map(([title, groups], index) => {
      const titleMatches = Boolean(q && title.toLowerCase().includes(q));
      return {
        title,
        index,
        groups: groups
          .map(([label, items]) => {
            const labelMatches = Boolean(q && label.toLowerCase().includes(q));
            return {
              label,
              items: items
                .map((r) => {
                  const nonVeg = r.startsWith("*");
                  const [name, price, desc] = (nonVeg ? r.slice(1) : r).split("|");
                  return { name, price, desc, nonVeg };
                })
                .filter((i) => {
                  if (filter === "veg" && i.nonVeg) return false;
                  if (filter === "nonveg" && !i.nonVeg) return false;
                  if (!q) return true;
                  if (titleMatches || labelMatches) return true;
                  const text = (i.name + " " + (i.desc ?? "")).toLowerCase();
                  return text.includes(q);
                }),
            };
          })
          .filter((g) => g.items.length > 0),
      };
    }).filter((s) => s.groups.length > 0);
  }, [filter, query]);

  const totalDishes = useMemo(() => {
    return sections.reduce((acc, s) => {
      return acc + s.groups.reduce((gAcc, g) => gAcc + g.items.length, 0);
    }, 0);
  }, [sections]);

  // Keep active index valid when search/filter narrows down sections
  useEffect(() => {
    if (sections.length > 0) {
      const exists = sections.some((s) => s.index === active);
      if (!exists) {
        setActive(sections[0].index);
      }
    }
  }, [sections, active]);

  useEffect(() => {
    const onScroll = () => {
      if (isClickScrolling.current) return;
      if (!sections.length) return;

      const stickyBar = document.getElementById("menu-sticky-bar");
      const stickyBottom = stickyBar ? stickyBar.getBoundingClientRect().bottom : 190;
      const threshold = stickyBottom + 60;

      let current = sections[0].index;
      for (const s of sections) {
        const el = document.getElementById("menu-" + s.index);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold && rect.bottom > stickyBottom) {
            current = s.index;
          }
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [sections]);

  useEffect(() => {
    const tabEl = document.getElementById("menu-tab-" + active);
    if (tabEl) {
      tabEl.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
    }
  }, [active]);

  const goTo = (i: number) => {
    setActive(i);
    isClickScrolling.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

    const el = document.getElementById("menu-" + i);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    scrollTimeoutRef.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 900);
  };

  const filters: { key: Filter; label: string; dot?: "veg" | "nonveg" }[] = [
    { key: "all", label: "All" },
    { key: "veg", label: "Veg", dot: "veg" },
    { key: "nonveg", label: "Non-veg", dot: "nonveg" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <PageHeader
        title="Our Menu"
        description="Savor authentic royal delicacies, tandoori specialties, and chef-curated dishes."
        image="/images/restaurant_bg.png"
        showLogo={true}
      />

      {/* Sticky bar: logo, search, veg/non-veg filter, and category tabs */}
      <div
        id="menu-sticky-bar"
        className={`sticky ${STICKY_TOP} z-30 bg-background/95 backdrop-blur border-b border-border shadow-xs`}
      >
        <div className="container mx-auto max-w-7xl px-4 md:px-6 py-3 space-y-2.5">
          {/* Row 1: Logo, Search & Dietary Filter */}
          <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3 flex-1">
              <Link href="/" className="shrink-0 flex items-center transition-opacity hover:opacity-80" aria-label="Home">
                <Image
                  src="/logo.png"
                  alt={hotelDetails.name}
                  width={140}
                  height={48}
                  className="h-8 md:h-9 w-auto object-contain"
                />
              </Link>
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/70 pointer-events-none" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") setQuery("");
                  }}
                  placeholder="Search dishes or cuisines (e.g. paneer, tandoori, biryani)..."
                  aria-label="Search dishes"
                  className="h-10 md:h-11 w-full rounded-full border border-border/80 bg-background pl-10 pr-10 text-sm text-foreground shadow-xs placeholder:text-muted-foreground/70 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            <div
              className="flex shrink-0 items-center overflow-hidden rounded-full border border-border/80 bg-muted/40 p-1"
              role="group"
              aria-label="Filter by dietary preference"
            >
              {filters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  aria-pressed={filter === f.key}
                  className={
                    "flex items-center justify-center gap-1.5 px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all " +
                    (filter === f.key
                      ? "bg-primary text-primary-foreground shadow-xs"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/60")
                  }
                >
                  {f.dot && <Dot nonVeg={f.dot === "nonveg"} light={filter === f.key} />}
                  <span>{f.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Row 2: Category Tabs Strip */}
          <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth">
            {sections.map((s) => {
              const itemCount = s.groups.reduce((sum, g) => sum + g.items.length, 0);
              const isSelected = s.index === active;
              return (
                <button
                  key={s.title}
                  id={"menu-tab-" + s.index}
                  onClick={() => goTo(s.index)}
                  className={
                    "shrink-0 rounded-full border px-4 py-1.5 text-xs md:text-sm font-medium transition-all duration-200 " +
                    (isSelected
                      ? "bg-primary text-primary-foreground border-primary shadow-xs scale-[1.02]"
                      : "border-border/80 bg-card text-foreground/80 hover:bg-muted hover:text-foreground")
                  }
                >
                  <span>{s.title}</span>
                  {query.trim() && (
                    <span
                      className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full font-normal ${
                        isSelected ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {itemCount}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Search Result Feedback Bar */}
          {query.trim() && (
            <div className="flex items-center justify-between pt-1 text-xs text-muted-foreground">
              <span>
                Found <strong className="text-primary font-semibold">{totalDishes}</strong> {totalDishes === 1 ? "dish" : "dishes"} matching &ldquo;{query}&rdquo;
              </span>
              <button
                onClick={() => setQuery("")}
                className="text-primary hover:underline font-medium cursor-pointer"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Menu sections */}
      <div className="px-4 md:px-6 py-12 md:py-16">
        <div className="container mx-auto max-w-4xl space-y-16">
          {sections.length === 0 && (
            <div className="py-16 text-center text-muted-foreground">
              <p className="font-serif text-xl text-primary mb-2">No dishes found</p>
              <p className="text-sm">
                No items matched &ldquo;{query}&rdquo; with the selected {filter !== "all" ? `${filter} ` : ""}filter.
              </p>
              <button
                onClick={() => { setQuery(""); setFilter("all"); }}
                className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground hover:bg-primary/90 transition-colors shadow-xs"
              >
                Reset search & filter
              </button>
            </div>
          )}

          {sections.map((s) => (
            <section key={s.title} id={"menu-" + s.index} className="scroll-mt-32 md:scroll-mt-28">
              <h2 className="font-serif text-3xl md:text-4xl text-primary text-center mb-2">{s.title}</h2>
              <div className="mx-auto mb-8 h-px w-20 bg-primary/30" />
              {s.groups.map((g, gi) => (
                <div key={gi} className="mb-8 last:mb-0">
                  {g.label && <h3 className="font-serif text-xl text-primary mb-3">{g.label}</h3>}
                  <ul className="grid md:grid-cols-2 md:gap-x-12">
                    {g.items.map((it) => (
                      <li key={it.name} className="flex gap-3 py-3 border-b border-border">
                        <Dot nonVeg={it.nonVeg} className="mt-1.5" />
                        <div className="flex-1">
                          <p className="text-foreground font-medium">
                            {highlightMatch(it.name, query)}
                          </p>
                          {it.desc && (
                            <p className="text-sm text-muted-foreground mt-0.5">
                              {highlightMatch(it.desc, query)}
                            </p>
                          )}
                        </div>
                        <span className="font-medium text-primary whitespace-nowrap">₹{it.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          ))}

          <div className="rounded-xl border border-border bg-muted/30 p-5 text-center text-sm text-muted-foreground">
            <p>All prices are exclusive of GST.</p>
            <p className="mt-2 flex items-center justify-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:+911512208777" className="text-primary hover:underline">01512208777</a>
              <span>/</span>
              <a href="tel:+911512208666" className="text-primary hover:underline">01512208666</a>
            </p>
          </div>
        </div>
      </div>

      {/* Wave SVG Divider */}
      <div className="w-full overflow-hidden leading-none flex -mb-1 mt-12">
        <Image
          src="/wave.svg"
          alt=""
          width={1920}
          height={120}
          className="w-full h-auto block rotate-180"
          priority
        />
      </div>
      <style>{`.elementor-shape-fill { fill: #031b18; }`}</style>

      {/* Minimal Brand Footer */}
      <footer className="bg-[#031b18] text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col items-center text-center">
          {/* Brand */}
          <div className="space-y-4 flex flex-col items-center">
            <Image
              src="/logo.png"
              alt={hotelDetails.name}
              width={320}
              height={150}
              className="object-contain h-24 md:h-28 w-auto mb-2 invert brightness-0 opacity-90"
            />
            <p className="text-primary-foreground/80 max-w-sm text-sm md:text-base leading-relaxed">
              Experience the pinnacle of Indian luxury, where heritage meets modern elegance.
            </p>
            <div className="flex space-x-4 pt-2 justify-center">
              <Link href="#" className="hover:text-secondary transition-colors" aria-label="Instagram">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-secondary transition-colors" aria-label="Facebook">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.81l.39-4h-4.2V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-secondary transition-colors" aria-label="Twitter">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Dot({ nonVeg = false, light = false, className = "" }: { nonVeg?: boolean; light?: boolean; className?: string }) {
  // On the selected (dark) filter button the dot gets a white ring so it stays visible
  const c = nonVeg ? "border-destructive" : "border-green-700";
  const d = nonVeg ? "bg-destructive" : "bg-green-700";
  return (
    <span className={`inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center border-[1.5px] ${light ? "bg-white" : ""} ${c} ${className}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${d}`} />
    </span>
  );
}