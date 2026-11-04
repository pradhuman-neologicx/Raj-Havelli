"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MoreVertical, Phone, Search, X } from "lucide-react";
import { hotelDetails } from "@/data";

// "*" at the start of an item = non-veg. Format: "name|price|description"
type Group = [string, string[]];
type Section = [string, Group[]];

const MENU: Section[] = [
  [
    "Soups",
    [
      [
        "",
        [
          "Cream Soup (Mushroom / Veg)|250",
          "Tomato Soup|250",
          "Hot & Sour Veg. Soup|250",
          "Sweet Corn Veg. Soup|250",
          "Veg. Clear Soup|250",
          "Lentil Soup|250",
          "*Hot & Sour Chicken Soup|300",
          "*Sweet Corn Chicken Soup|300",
          "*Chicken Clear Soup|300",
          "*Chicken Manchow Soup|300",
        ],
      ],
    ],
  ],
  [
    "Tandoori Khazana",
    [
      [
        "Vegetarian",
        [
          "Paneer Tikka (8 pcs)|480|Fresh paneer marinated with curd, chilli powder, grilled in tandoor",
          "Paneer Malai Tikka (8 pcs)|519|Fresh paneer marinated with curd, cashew paste, white chilli powder, grilled in tandoor",
          "Achari Paneer Tikka (8 pcs)|495|Fresh paneer, royal chilli organic",
          "Banjara Paneer Tikka (8 pcs)|495",
          "Mushroom Tikka (12 pcs)|399|Mushroom marinated in red tandoori sauce, grilled in tandoor",
          "Tandoori Soya Chaap (6 pcs)|430|Chaap marinated in red tandoori sauce, grilled in tandoor",
          "Tandoori Hot Potato|430",
          "Veg. Seekh Kebab (8 pcs)|430",
          "Makai Seekh Kebab (8 pcs)|450",
        ],
      ],
      [
        "Non-Vegetarian",
        [
          "*Tandoori Chicken (4 pcs)|580|Chicken marinated in curd, red chilli powder, grilled in tandoor",
          "*Tangdi Kebab, red/white (4 pcs)|620",
          "*Chicken Tikka (8 pcs)|530|Boneless chicken marinated in curd, red chilli powder, grilled in tandoor",
          "*Malai Chicken Tikka (8 pcs)|570|Boneless chicken marinated in curd & spices, grilled in tandoor",
          "*Hariyali Chicken Tikka (8 pcs)|550",
          "*Afghani Chicken (4 pcs)|585|Chicken marinated in cashew nut sauce, grilled in tandoor",
          "*Chicken Gulati Kebab (8 pcs)|599",
          "*Chicken Seekh Kebab (8 pcs)|550",
          "*Chicken Banjara Kebab (8 pcs)|550",
          "*Fish Tikka (8 pcs)|660",
          "*Afghani Fish Tikka (8 pcs)|660",
          "*Lemon Fish Tikka (8 pcs)|660",
        ],
      ],
    ],
  ],
  [
    "Appetizer",
    [
      [
        "",
        [
          "Hara Bhara Kebab|399|Mashed green vegetable dumpling, deep fried",
          "Veg. Sammi Kebab|339",
          "Dahi Kebab|450",
          "Cheese Corn Tikki|410",
          "Potato Tikki (6 pcs)|399",
          "Mushroom Fry|400",
          "French Fry|330",
          "Stick Fried Potato|360",
          "Assorted Veg. Pakoda|260",
          "Paneer Pakoda|350",
          "Paneer Finger|380",
          "Veg. Cutlet (6 pcs)|395",
          "Cheese Corn Bite (12 pcs)|430",
          "*Fried Chicken (8 pcs)|580",
          "*Chicken Wings (6 pcs)|530",
          "*Chicken Butter Fried|550",
          "*Chicken Saute|550",
          "*Chicken Peri-Peri|580",
          "*Lemon Chicken|580",
          "*Sesame Chicken|550",
          "*Chicken 95 (8 pcs)|520|Finger cut chicken cooked in Chinese sauce",
          "*Chicken 65 (8 pcs)|520",
          "*Fish Finger (8 pcs)|660|Finger cut fish fried golden brown, served with tartar sauce",
        ],
      ],
    ],
  ],
  [
    "Chinese",
    [
      [
        "",
        [
          "Veg. Chowmein|430",
          "Hakka Noodles|430",
          "Veg. Manchurian|399",
          "Chilli Paneer|480",
          "Honey Chilli Potato|450",
          "Crispy Corn|420",
          "Chilli Mushroom|420",
          "Veg. Fried Rice|440",
          "Veg. Spring Roll|430",
          "*Chicken Chowmein|580",
          "*Chicken Hakka Noodles|580",
          "*Chicken Sweet and Spice|580",
          "*Chicken Stick|580",
          "*Chicken Fried Rice|580",
          "*Chilli Chicken|580",
          "*Chicken Spring Roll|540",
          "*Chicken Lollipop (8 pcs)|499",
          "*Chilli Fish|700",
        ],
      ],
    ],
  ],
  [
    "Main Course",
    [
      [
        "Vegetarian",
        [
          "Paneer Butter Masala|535|Traditional, veg. sauce cubes simmered in rich tomato & cream sauce",
          "Paneer Tikka Masala|560|Tandoori paneer tikka with onion, tomato, served with veg. gravy",
          "Kadai Paneer|535",
          "Shahi Paneer|565",
          "Paneer Khurchan|520",
          "Palak Paneer|520",
          "Paneer Korma|570",
          "Malai Kofta|385|Mixed veg. in creamy sauce",
          "Gatta Curry|480|Preparation from Royal Rajasthan",
          "Dum Aloo Banarsi|440|Fried potatoes in Banarasi-style Indian gravy",
          "Aloo Pyaza|380",
          "Jeera Aloo|350",
          "Tava Aloo Gobi|380",
          "Veg. Kofta Curry|419|Cottage cheese dumpling in Indian gravy",
          "Palak Baby Corn|400|American corn cooked with spinach gravy",
          "Chole Masala|425|Chick-peas cooked in rich Indian gravy",
          "Mix Vegetable|399|Veg. combination with Indian spices",
          "Mushroom Masala|450|Button mushroom in mild spiced gravy",
        ],
      ],
      [
        "Non-Vegetarian",
        [
          "*Butter Chicken|650|Roasted chicken cooked in butter & cream with tomato gravy",
          "*Kadai Chicken|620|Traditional, with capsicum, served in kadai pot",
          "*Bikaneri Chicken (chef special)|620",
          "*Chicken Patiala|600",
          "*Chicken Chingari|620",
          "*Chicken Tikka Masala|580|Tender chicken in tangy thick tomato base, rich Indian gravy",
          "*Egg Chicken Masala|570",
          "*Red Chicken (minced chicken in Indian spices)|580",
          "*Chicken Korma|580|Chicken served with white gravy",
          "*Mutton Korma|850",
          "*Mutton Laal Maas|900|Preparation from Royal Rajasthan",
          "*Mutton Kali Mirch|850",
          "*Egg Curry|400",
          "*Fish Curry|900|Traditional fish in chef special yellow mustard & garlic paste",
        ],
      ],
    ],
  ],
  [
    "Rice",
    [
      [
        "",
        [
          "Steam Rice|300",
          "Jeera Rice|350|Steamed long grain basmati tempered with cumin seeds",
          "Veg. Biryani|490|Vegetables & basmati rice with traditional masala",
          "Veg. Rice Pulaov|450",
          "Corn & Kabuli Pulaov|450",
          "*Chicken Dum Biryani|775",
          "*Chicken Tikka Biryani|750",
          "*Mutton Dum Biryani|900",
          "*Egg Biryani|500",
        ],
      ],
    ],
  ],
  [
    "Dal",
    [
      [
        "",
        [
          "Dal Tadka|430",
          "Dal Banjara|430",
          "Plain Dal|400",
          "Dal Panchmel|430",
          "Dal Makhani|600",
        ],
      ],
    ],
  ],
  [
    "Curds",
    [
      [
        "",
        [
          "Plain Curd|250",
          "Mix Veg. Raita|270",
          "Bundi Raita|270",
          "Pineapple Raita|300",
          "Laccha Onion Raita Masala|320",
        ],
      ],
    ],
  ],
  [
    "Sandwiches",
    [
      [
        "",
        [
          "Veg Grilled Sandwich|270",
          "*Chicken Grilled Sandwich|380",
          "Veg Sandwich|210",
          "Cheese Sandwich|290",
          "*Non Veg Club Sandwich|575",
          "Veg Club House|450",
          "Cheese Tomato Sandwich|270",
          "*Chicken Cheese Sandwich|450",
          "Potato Grilled Sandwich|280",
          "Veg Cheese Sandwich|290",
        ],
      ],
    ],
  ],
  [
    "Breads",
    [
      [
        "",
        [
          "Tandoori Roti (Plain / Butter)|50 / 60",
          "Naan (Plain / Butter)|75 / 95",
          "Garlic Naan|110",
          "Missi Roti|90",
          "Laccha Paratha|95",
          "Pudina Laccha Paratha|95",
          "Stuffed Paratha|90",
          "Stuffed Kulcha|90",
          "Rumali Roti|100",
          "Tawa Fulka (Plain / Butter)|40 / 50",
        ],
      ],
    ],
  ],
  [
    "Salads & Papad",
    [
      [
        "Salads",
        [
          "Green Salad|200",
          "Onion Salad|180",
          "Russian Salad|350",
          "Aloo Chat|290",
          "Black Chana Masala|270",
          "Plain Peanut|200",
          "Masala Peanut|280",
        ],
      ],
      [
        "Papad",
        ["Masala Papad (Fried & Roasted)|140", "Plain Papad (2 pcs)|40"],
      ],
    ],
  ],
  [
    "Combos",
    [
      [
        "",
        [
          "Dal Makhani with Laccha Paratha / Garlic Naan|370",
          "Paneer Tikka Masala with Laccha Paratha / Butter Naan|375",
          "Palak Paneer with Missi Roti / Butter Naan|360",
          "Palak Corn with Missi Roti|325",
          "Fried Rice with Veg. Manchurian Gravy|420",
          "Dal Fry with Jeera Rice|380",
          "Tandoori Aloo Paratha Butter with Plain Curd|360",
          "Chole Bhatura / Kulcha / Std Naan|360",
          "*Butter Chicken with Butter Naan / Laccha Paratha|450",
          "*Chicken Curry with Garlic Naan|450",
          "*Chicken Tikka Masala with Laccha Paratha|450",
          "*Chicken Tikka Dum Biryani with Onion Raita|425",
        ],
      ],
    ],
  ],
  [
    "Rolls",
    [
      [
        "",
        [
          "Paneer Tikka Kathi Roll (Paratha / Rumali Roti)|360",
          "Veg Keema Kathi Roll with Soya Keema|320",
          "*Chicken Kathi Roll (Paratha / Rumali Roti)|480",
          "*Egg & Chicken Mix Kathi Roll (Jamboo)|480",
          "*Egg Kathi Roll|380",
        ],
      ],
    ],
  ],
  [
    "Beverage & Dessert",
    [
      [
        "",
        [
          "Cold Coffee with Ice-cream|195",
          "Hot Coffee|70",
          "Hot Milk|100",
          "Tea|60",
          "Lassi (Masala / Sweet)|130",
          "Jugal Bandi (Gulab Jamun with Ice-cream)|190",
          "Ice-cream (1 cup)|225",
        ],
      ],
    ],
  ],
];

export interface BanquetItem {
  name: string;
  nonVeg?: boolean;
  both?: boolean;
}

export interface BanquetCategory {
  title: string;
  note: string;
  items: BanquetItem[];
}

export const BANQUET_MENU: BanquetCategory[] = [
  {
    title: "Welcome Drink",
    note: "Choose any one",
    items: [
      { name: "Butter Milk" },
      { name: "Blue Lagoon" },
      { name: "Milk Shake" },
      { name: "Soft Drink" },
    ],
  },
  {
    title: "Snacks (Veg.)",
    note: "Choose any one",
    items: [
      { name: "Paneer Tikka" },
      { name: "Haryali Paneer Tikka" },
      { name: "Chilly Paneer" },
      { name: "Hara Bhara Kebab" },
      { name: "Aloo Adarki Tikki" },
      { name: "Crispy Vegetable" },
      { name: "Veg. Pakoda" },
      { name: "Paneer Pakoda" },
    ],
  },
  {
    title: "Snacks Non Veg.",
    note: "Choose any one",
    items: [
      { name: "Chicken Tikka", nonVeg: true },
      { name: "Murg Malai Tikka", nonVeg: true },
      { name: "Chicken Sheek Kebab", nonVeg: true },
      { name: "Chilly Chicken", nonVeg: true },
      { name: "Mutton Ke Sule", nonVeg: true },
    ],
  },
  {
    title: "Salad",
    note: "Choose any one",
    items: [
      { name: "Green Salad" },
      { name: "Kachumber" },
      { name: "Three Beans Salad" },
      { name: "Fried Idly Salad" },
      { name: "Russian Salad" },
    ],
  },
  {
    title: "Soups",
    note: "Choose any one",
    items: [
      { name: "Cream of Tomato" },
      { name: "Cream of Veg. / Non Veg.", both: true },
      { name: "Sweet Corn Veg. / Non Veg.", both: true },
      { name: "Hot & Sour Veg. / Non Veg.", both: true },
      { name: "Tomato Dhaniya ka Shorba" },
    ],
  },
  {
    title: "Paneer Ki Pasand",
    note: "Choose any one",
    items: [
      { name: "Paneer Butter Masala" },
      { name: "Kadhai Paneer" },
      { name: "Palak Paneer" },
      { name: "Paneer Pudina Masala" },
      { name: "Malai Kofta" },
      { name: "Navratan Korma" },
    ],
  },
  {
    title: "Subzi Ki Pasand",
    note: "Choose any one",
    items: [
      { name: "Mix. Vegetable" },
      { name: "Palak Baby Corn" },
      { name: "Dum Aloo" },
      { name: "Gobhi Masala" },
      { name: "Aloo Pyaz Ki Subzi" },
      { name: "Govind Gatta" },
      { name: "Seasonal" },
      { name: "Veg. Manchurian" },
      { name: "Chana Masala" },
    ],
  },
  {
    title: "Non Vegetarian Pasand",
    note: "Choose any one",
    items: [
      { name: "Butter Chicken", nonVeg: true },
      { name: "Murg Bikaneri", nonVeg: true },
      { name: "Kadhai Murg", nonVeg: true },
      { name: "Laal Maans", nonVeg: true },
      { name: "Mutton Rogan Josh", nonVeg: true },
      { name: "Gosht Rarra", nonVeg: true },
    ],
  },
  {
    title: "Dal Ki Pasand",
    note: "Choose any one",
    items: [
      { name: "Lasooni Dal Tikka" },
      { name: "Dal Panchmail" },
      { name: "Dal Makhani" },
      { name: "Dal Palak" },
      { name: "Kadi Pakora" },
    ],
  },
  {
    title: "Dahi Ki Pasand",
    note: "Choose any one",
    items: [
      { name: "Vegetable Raita" },
      { name: "Boondi Raita" },
      { name: "Burani Raita" },
      { name: "Plain Dahi" },
      { name: "Pineapple Raita" },
    ],
  },
  {
    title: "Chawal Ki Pasand",
    note: "Choose any one",
    items: [
      { name: "Steamed Rice" },
      { name: "Jeera Rice" },
      { name: "Vegetable Pulao" },
      { name: "Peas Pulao" },
      { name: "Veg. Fried Rice" },
      { name: "Egg Fried Rice", nonVeg: true },
    ],
  },
  {
    title: "Roti Ki Pasand",
    note: "Choose any one",
    items: [
      { name: "Tandoori Roti" },
      { name: "Missi Roti" },
      { name: "Naan" },
    ],
  },
  {
    title: "Mithai Ki Pasand",
    note: "Choose any one",
    items: [
      { name: "Gulab Jamun" },
      { name: "Rice Kheer" },
      { name: "Carrot Rabri" },
      { name: "Fruit Custard" },
      { name: "Ice Cream" },
    ],
  },
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
      <mark
        key={i}
        className="bg-primary/20 text-primary font-semibold rounded px-0.5"
      >
        {part}
      </mark>
    ) : (
      part
    ),
  );
}

function getCategoryIcon(title: string) {
  const t = title.toLowerCase();

  // Soups
  if (t.includes("soup")) {
    return (
      <svg
        viewBox="0 0 48 48"
        className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 shrink-0"
        fill="none"
        stroke="#221b18"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 10c0-2 1.5-3 1.5-5" strokeWidth="1.3" />
        <path d="M24 11c0-2.5 1.5-3.5 1.5-6" strokeWidth="1.3" />
        <path d="M30 10c0-2 1.5-3 1.5-5" strokeWidth="1.3" />
        <path d="M8 20c0 9 7.2 16 16 16s16-7 16-16H8z" fill="#ffffff" />
        <ellipse cx="24" cy="20" rx="16" ry="4" fill="#fff5ec" />
        <ellipse cx="24" cy="20.5" rx="13" ry="2.5" fill="#f6d5a8" />
        <path d="M33 16l6-7" strokeWidth="2" />
        <path d="M18 36h12v2H18z" fill="#ffffff" />
      </svg>
    );
  }

  // Tandoori Khazana
  if (t.includes("tandoor")) {
    return (
      <svg
        viewBox="0 0 48 48"
        className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 shrink-0"
        fill="none"
        stroke="#221b18"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M24 6c2 3 5 4 3 8 4-2 6 3 3 7-4 5-10 4-10 0 0-3 2-4 4-6-1-3 0-6 0-9z"
          fill="#ffebd6"
          stroke="#c0392b"
          strokeWidth="1.3"
        />
        <path
          d="M14 34c-4-4-4-10 0-14 4-4 10-3 14 1l4 4-14 13-4-4z"
          fill="#ffffff"
        />
        <path d="M19 22l3 3M16 26l3 3M22 25l3 3" strokeWidth="1.3" />
        <path
          d="M32 39l5 5M39 42a2 2 0 102-2M35 46a2 2 0 102-2"
          strokeWidth="2"
        />
      </svg>
    );
  }

  // Appetizer
  if (t.includes("appetizer")) {
    return (
      <svg
        viewBox="0 0 48 48"
        className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 shrink-0"
        fill="none"
        stroke="#221b18"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="24" cy="28" rx="19" ry="10" fill="#ffffff" />
        <ellipse
          cx="24"
          cy="27"
          rx="16"
          ry="8"
          fill="#fff5ec"
          strokeWidth="1.2"
        />
        <rect
          x="13"
          y="21"
          width="6"
          height="8"
          rx="2"
          fill="#ffffff"
          transform="rotate(-15 16 25)"
        />
        <line x1="14" y1="23" x2="18" y2="25" strokeWidth="1.2" />
        <rect x="21" y="20" width="6" height="8" rx="2" fill="#ffffff" />
        <line x1="22" y1="23" x2="26" y2="25" strokeWidth="1.2" />
        <rect
          x="29"
          y="21"
          width="6"
          height="8"
          rx="2"
          fill="#ffffff"
          transform="rotate(15 32 25)"
        />
        <line x1="30" y1="23" x2="34" y2="25" strokeWidth="1.2" />
        <circle cx="24" cy="15" r="4.5" fill="#ffffff" />
        <circle
          cx="24"
          cy="15"
          r="2.5"
          fill="#e8f5e9"
          strokeWidth="1"
          stroke="#2e7d32"
        />
      </svg>
    );
  }

  // Chinese
  if (t.includes("chinese")) {
    return (
      <svg
        viewBox="0 0 48 48"
        className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 shrink-0"
        fill="none"
        stroke="#221b18"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 22c0 8.5 6.3 15 14 15s14-6.5 14-15H10z" fill="#ffffff" />
        <ellipse cx="24" cy="22" rx="14" ry="3.5" fill="#fff5ec" />
        <path d="M18 37h12v2H18z" fill="#ffffff" />
        <path
          d="M19 22c-1-5 2-9 5-11M24 22c0-5 3-9 5-11M29 22c1-4 3-7 5-9"
          strokeWidth="1.4"
        />
        <line x1="12" y1="9" x2="36" y2="13" strokeWidth="2" stroke="#221b18" />
        <line
          x1="12"
          y1="12"
          x2="36"
          y2="15"
          strokeWidth="2"
          stroke="#221b18"
        />
      </svg>
    );
  }

  // Main Course
  if (t.includes("main")) {
    return (
      <svg
        viewBox="0 0 48 48"
        className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 shrink-0"
        fill="none"
        stroke="#221b18"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 9c0-2 1-3 1-5M27 9c0-2 1-3 1-5" strokeWidth="1.3" />
        <ellipse cx="24" cy="14" rx="2.5" ry="1.5" fill="#221b18" />
        <path
          d="M12 21c-3 5-2 13 4 16 3 1.5 13 1.5 16 0 6-3 7-11 4-16"
          fill="#ffffff"
        />
        <ellipse cx="24" cy="20" rx="13" ry="3.5" fill="#fff5ec" />
        <path d="M9 24c-2 0-3 2-3 4s1 4 3 4" strokeWidth="1.8" />
        <path d="M39 24c2 0 3 2 3 4s-1 4-3 4" strokeWidth="1.8" />
        <ellipse cx="24" cy="21" rx="10" ry="2" fill="#ffd1a4" />
        <path
          d="M23 18c1-1 3-1 3 1s-2 2-3 1z"
          fill="#4caf50"
          stroke="#2e7d32"
          strokeWidth="0.8"
        />
      </svg>
    );
  }

  // Rice
  if (t.includes("rice")) {
    return (
      <svg
        viewBox="0 0 48 48"
        className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 shrink-0"
        fill="none"
        stroke="#221b18"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 24c0-7 5.4-12 12-12s12 5 12 12H12z" fill="#ffffff" />
        <path
          d="M18 19c1-.5 2 0 2 1M24 16c1-.5 2 0 2 1M29 19c1-.5 2 0 2 1M21 21c1-.5 2 0 2 1M26 21c1-.5 2 0 2 1"
          strokeWidth="1.2"
        />
        <path
          d="M22 13c3-3 6-2 5 1s-4 3-5-1z"
          fill="#81c784"
          stroke="#2e7d32"
          strokeWidth="1"
        />
        <path d="M10 24c0 8 6.3 14 14 14s14-6 14-14H10z" fill="#fff5ec" />
        <ellipse cx="24" cy="24" rx="14" ry="2.5" fill="#ffffff" />
        <path d="M18 38h12v2H18z" fill="#ffffff" />
      </svg>
    );
  }

  // Dal
  if (t.includes("dal")) {
    return (
      <svg
        viewBox="0 0 48 48"
        className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 shrink-0"
        fill="none"
        stroke="#221b18"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M24 8c0-2 1-3 1-5" strokeWidth="1.3" />
        <path d="M11 20c0 9 5.8 16 13 16s13-7 13-16H11z" fill="#ffffff" />
        <ellipse cx="24" cy="20" rx="13" ry="3.5" fill="#ffe082" />
        <path d="M21 19c2-2 4-1 5 1" stroke="#d32f2f" strokeWidth="1.8" />
        <circle cx="21" cy="21" r="0.8" fill="#5d4037" stroke="none" />
        <circle cx="25" cy="20" r="0.8" fill="#5d4037" stroke="none" />
        <path
          d="M10 23c-2 0-3 1.5-3 3s1 3 3 3M38 23c2 0 3 1.5 3 3s-1 3-3 3"
          strokeWidth="1.8"
        />
        <path d="M18 36h12v2H18z" fill="#ffffff" />
      </svg>
    );
  }

  // Curds
  if (t.includes("curd")) {
    return (
      <svg
        viewBox="0 0 48 48"
        className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 shrink-0"
        fill="none"
        stroke="#221b18"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M14 20c-3 4-2 11 3 14 3 2 9 2 12 0 5-3 6-10 3-14"
          fill="#ffffff"
        />
        <ellipse cx="24" cy="19" rx="10" ry="3" fill="#ffffff" />
        <ellipse cx="24" cy="19" rx="8" ry="2" fill="#f8fafc" />
        <path
          d="M24 14c-2 2-2 4 0 5 2-1 2-3 0-5z"
          fill="#81c784"
          stroke="#2e7d32"
          strokeWidth="1"
        />
        <path
          d="M24 16l3-1c0 2-1 3-3 2"
          fill="#a5d6a7"
          stroke="#2e7d32"
          strokeWidth="0.8"
        />
        <circle cx="21" cy="19" r="0.7" fill="#6d4c41" stroke="none" />
        <circle cx="26" cy="18.5" r="0.7" fill="#6d4c41" stroke="none" />
      </svg>
    );
  }

  // Sandwiches
  if (t.includes("sandwich")) {
    return (
      <svg
        viewBox="0 0 48 48"
        className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 shrink-0"
        fill="none"
        stroke="#221b18"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 34L36 12l2 16-28 6z" fill="#ffffff" />
        <path
          d="M10 31l27-20 1 4-28 5z"
          fill="#c8e6c9"
          stroke="#388e3c"
          strokeWidth="1"
        />
        <path
          d="M10 33l27-18 1 2-28 4z"
          fill="#ffcdd2"
          stroke="#d32f2f"
          strokeWidth="1"
        />
        <line x1="16" y1="28" x2="22" y2="33" strokeWidth="1.2" />
        <line x1="23" y1="23" x2="29" y2="28" strokeWidth="1.2" />
        <line x1="30" y1="18" x2="36" y2="23" strokeWidth="1.2" />
        <line x1="26" y1="8" x2="26" y2="24" strokeWidth="1.5" />
        <circle
          cx="26"
          cy="12"
          r="2.5"
          fill="#558b2f"
          stroke="#33691e"
          strokeWidth="1"
        />
      </svg>
    );
  }

  // Breads
  if (t.includes("bread")) {
    return (
      <svg
        viewBox="0 0 48 48"
        className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 shrink-0"
        fill="none"
        stroke="#221b18"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 26c1 8 6 12 16 12s15-4 16-12H8z" fill="#fff5ec" />
        <path
          d="M12 26l3 10M20 26l2 12M28 26l-2 12M36 26l-3 10"
          strokeWidth="1.2"
        />
        <path d="M13 25c-2-7 4-14 11-14s12 5 11 14H13z" fill="#ffffff" />
        <ellipse
          cx="20"
          cy="18"
          rx="2"
          ry="1.2"
          fill="#d7ccc8"
          stroke="#8d6e63"
          strokeWidth="1"
        />
        <ellipse
          cx="27"
          cy="16"
          rx="2.5"
          ry="1.5"
          fill="#d7ccc8"
          stroke="#8d6e63"
          strokeWidth="1"
        />
        <ellipse
          cx="24"
          cy="22"
          rx="2.2"
          ry="1"
          fill="#d7ccc8"
          stroke="#8d6e63"
          strokeWidth="1"
        />
      </svg>
    );
  }

  // Salads & Papad
  if (t.includes("salad") || t.includes("papad")) {
    return (
      <svg
        viewBox="0 0 48 48"
        className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 shrink-0"
        fill="none"
        stroke="#221b18"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse
          cx="30"
          cy="18"
          rx="10"
          ry="6"
          fill="#fff9c4"
          stroke="#fbc02d"
          strokeWidth="1.4"
          transform="rotate(-25 30 18)"
        />
        <circle cx="28" cy="16" r="0.8" fill="#6d4c41" stroke="none" />
        <circle cx="33" cy="19" r="0.8" fill="#6d4c41" stroke="none" />
        <path d="M10 24c0 7 6 13 14 13s14-6 14-13H10z" fill="#ffffff" />
        <circle
          cx="18"
          cy="22"
          r="4.5"
          fill="#e8f5e9"
          stroke="#43a047"
          strokeWidth="1.4"
        />
        <circle
          cx="25"
          cy="20"
          r="4.5"
          fill="#ffebee"
          stroke="#e53935"
          strokeWidth="1.4"
        />
        <path d="M19 16c2-2 5-1 6 1" stroke="#2e7d32" strokeWidth="1.5" />
      </svg>
    );
  }

  // Combos
  if (t.includes("combo")) {
    return (
      <svg
        viewBox="0 0 48 48"
        className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 shrink-0"
        fill="none"
        stroke="#221b18"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="24" cy="24" r="18" fill="#ffffff" />
        <circle cx="24" cy="24" r="15" fill="#fff5ec" strokeWidth="1.2" />
        <circle cx="18" cy="17" r="4" fill="#ffffff" strokeWidth="1.3" />
        <circle cx="18" cy="17" r="2.5" fill="#ffe082" stroke="none" />
        <circle cx="30" cy="17" r="4" fill="#ffffff" strokeWidth="1.3" />
        <circle cx="30" cy="17" r="2.5" fill="#ffcdd2" stroke="none" />
        <circle cx="24" cy="31" r="4.5" fill="#ffffff" strokeWidth="1.3" />
        <circle cx="24" cy="31" r="3" fill="#c8e6c9" stroke="none" />
        <circle
          cx="24"
          cy="23"
          r="4"
          fill="#fff9c4"
          stroke="#d7ccc8"
          strokeWidth="1.2"
        />
      </svg>
    );
  }

  // Rolls
  if (t.includes("roll")) {
    return (
      <svg
        viewBox="0 0 48 48"
        className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 shrink-0"
        fill="none"
        stroke="#221b18"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 36l18-24 6 5-18 24z" fill="#ffffff" />
        <path
          d="M12 36l8-11 5 4-7 10z"
          fill="#eceff1"
          stroke="#90a4ae"
          strokeWidth="1.2"
        />
        <ellipse
          cx="33"
          cy="14"
          rx="4.5"
          ry="2.5"
          fill="#ffe082"
          transform="rotate(-35 33 14)"
        />
        <circle cx="32" cy="13" r="1.2" fill="#e53935" stroke="none" />
        <circle cx="34" cy="15" r="1.2" fill="#43a047" stroke="none" />
        <line x1="22" y1="22" x2="25" y2="25" strokeWidth="1.3" />
        <line x1="26" y1="18" x2="29" y2="21" strokeWidth="1.3" />
      </svg>
    );
  }

  // Beverage & Dessert
  if (t.includes("beverage") || t.includes("dessert") || t.includes("drink")) {
    return (
      <svg
        viewBox="0 0 48 48"
        className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 shrink-0"
        fill="none"
        stroke="#221b18"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 16l3 20h8l3-20H12z" fill="#ffffff" />
        <line
          x1="13.5"
          y1="21"
          x2="24.5"
          y2="21"
          strokeWidth="1"
          stroke="#90caf9"
        />
        <rect
          x="15"
          y="24"
          width="4"
          height="4"
          rx="0.5"
          fill="#e3f2fd"
          stroke="#90caf9"
          strokeWidth="1"
        />
        <line x1="20" y1="10" x2="24" y2="4" strokeWidth="2" stroke="#e53935" />
        <line
          x1="19"
          y1="26"
          x2="20"
          y2="10"
          strokeWidth="2"
          stroke="#221b18"
        />
        <path d="M26 26c0 6 4 10 9 10s9-4 9-10H26z" fill="#ffffff" />
        <path d="M28 26c0-4 3.1-7 7-7s7 3 7 7H28z" fill="#fff5ec" />
        <circle
          cx="35"
          cy="18"
          r="2"
          fill="#e53935"
          stroke="#b71c1c"
          strokeWidth="1"
        />
        <path d="M35 16c1-3 3-4 4-4" strokeWidth="1.2" />
        <path d="M33 36h4v2h-4z" fill="#ffffff" />
      </svg>
    );
  }

  // Banquet Menu
  if (t.includes("banquet")) {
    return (
      <svg
        viewBox="0 0 48 48"
        className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 shrink-0"
        fill="none"
        stroke="#78350f"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle
          cx="24"
          cy="11"
          r="2.8"
          fill="#fbbf24"
          stroke="#78350f"
          strokeWidth="1.5"
        />
        <path
          d="M10 27c0-7.7 6.3-14 14-14s14 6.3 14 14H10z"
          fill="#fffdf5"
          stroke="#78350f"
          strokeWidth="1.6"
        />
        <ellipse
          cx="24"
          cy="27"
          rx="14"
          ry="2.5"
          fill="#fef08a"
          stroke="#78350f"
          strokeWidth="1.3"
        />
        <line
          x1="6"
          y1="30"
          x2="42"
          y2="30"
          strokeWidth="2.2"
          stroke="#78350f"
        />
        <path
          d="M8 30c0 2.5 3.5 4 16 4s16-1.5 16-4"
          fill="#fde047"
          stroke="#78350f"
          strokeWidth="1.3"
        />
        <path
          d="M17 20c2-2 4-2 6-1"
          stroke="#d97706"
          strokeWidth="1.3"
        />
        {/* Sparkle 1 */}
        <path
          d="M7 16l1 1.8 1.8 1-1.8 1-1 1.8-1-1.8-1.8-1 1.8-1z"
          fill="#fef08a"
          stroke="#b45309"
          strokeWidth="0.8"
        />
        {/* Sparkle 2 */}
        <path
          d="M40 14l1 1.8 1.8 1-1.8 1-1 1.8-1-1.8-1.8-1 1.8-1z"
          fill="#fef08a"
          stroke="#b45309"
          strokeWidth="0.8"
        />
      </svg>
    );
  }

  // Fallback icon
  return (
    <svg
      viewBox="0 0 48 48"
      className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 shrink-0"
      fill="none"
      stroke="#221b18"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="24" cy="24" r="18" fill="#ffffff" />
      <path d="M16 24h16M24 16v16" strokeWidth="1.5" />
    </svg>
  );
}

export default function MenuList() {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<number | string>(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
                  const [name, price, desc] = (nonVeg ? r.slice(1) : r).split(
                    "|",
                  );
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

  // Filter banquet categories based on dietary preference & search query
  const filteredBanquetCategories = useMemo(() => {
    const q = query.trim().toLowerCase();
    return BANQUET_MENU.map((cat) => {
      const titleMatches = Boolean(q && cat.title.toLowerCase().includes(q));
      const filteredItems = cat.items.filter((it) => {
        if (filter === "veg" && it.nonVeg && !it.both) return false;
        if (filter === "nonveg" && !it.nonVeg && !it.both) return false;
        if (!q) return true;
        if (titleMatches) return true;
        return it.name.toLowerCase().includes(q);
      });
      return {
        ...cat,
        items: filteredItems,
      };
    }).filter((cat) => cat.items.length > 0);
  }, [filter, query]);

  const totalDishes = useMemo(() => {
    return sections.reduce((acc, s) => {
      return acc + s.groups.reduce((gAcc, g) => gAcc + g.items.length, 0);
    }, 0);
  }, [sections]);

  const totalBanquetDishes = useMemo(() => {
    return filteredBanquetCategories.reduce(
      (acc, cat) => acc + cat.items.length,
      0,
    );
  }, [filteredBanquetCategories]);

  const allDishesCount = totalDishes + totalBanquetDishes;

  // Check hash on initial load
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#banquet") {
      setTimeout(() => goTo("banquet"), 400);
    }
  }, []);

  // Keep active index valid when search/filter narrows down sections
  useEffect(() => {
    if (active === "banquet") return;
    if (sections.length > 0) {
      const exists = sections.some((s) => s.index === active);
      if (!exists) {
        setActive(sections[0].index);
      }
    } else if (filteredBanquetCategories.length > 0) {
      setActive("banquet");
    }
  }, [sections, filteredBanquetCategories, active]);

  useEffect(() => {
    const onScroll = () => {
      if (isClickScrolling.current) return;

      const stickyBar = document.getElementById("menu-sticky-bar");
      const stickyBottom = stickyBar
        ? stickyBar.getBoundingClientRect().bottom
        : 190;
      const threshold = stickyBottom + 60;

      // Check if user has scrolled near bottom or banquet is active in viewport
      const banquetEl = document.getElementById("menu-banquet");
      if (banquetEl) {
        const bRect = banquetEl.getBoundingClientRect();
        const isAtBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 140;
        if (
          isAtBottom ||
          (bRect.top <= threshold && bRect.bottom > stickyBottom)
        ) {
          setActive("banquet");
          return;
        }
      }

      if (!sections.length) return;

      let current: number | string = sections[0].index;
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

  const goTo = (i: number | string) => {
    setActive(i);
    isClickScrolling.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

    const targetId = i === "banquet" ? "menu-banquet" : "menu-" + i;
    const el = document.getElementById(targetId);
    if (el) {
      const stickyBar = document.getElementById("menu-sticky-bar");
      const offset = stickyBar ? stickyBar.offsetHeight + 16 : 140;
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    }

    scrollTimeoutRef.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 900);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Top Brand Header Bar */}
      <header className="bg-background border-b border-border/70 py-2 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 flex justify-between items-center">
          {/* Left: Brand Logo */}
          <div className="flex items-center justify-start">
            <Image
              src="/logo.png"
              alt="Raj Haveli"
              width={160}
              height={56}
              className="h-14 w-auto object-contain"
              priority
            />
          </div>

          {/* Middle: Brand Name & Subtitle (Centered) */}
          <div className="text-center px-1">
            <h1 className="text-sm sm:text-base md:text-lg font-bold tracking-wider text-foreground uppercase font-sans">
              Hotel Raj Haveli
            </h1>
            <p className="text-[11px] sm:text-xs md:text-sm text-muted-foreground font-medium whitespace-nowrap">
              Restaurant Menu
            </p>
          </div>

          {/* Right: 3-dots action button & dropdown */}
          <div className="flex items-center justify-end">
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                aria-label="More contact options"
                aria-expanded={isMenuOpen}
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground flex items-center justify-center transition-all cursor-pointer shadow-xs focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
              </button>

              {/* Popup dropdown with Mobile & Instagram icons */}
              {isMenuOpen && (
                <>
                  {/* Backdrop to close on click outside */}
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsMenuOpen(false)}
                  />
                  <div className="absolute right-0 top-full mt-2.5 z-50 min-w-[190px] bg-card/95 backdrop-blur-md border border-border/80 rounded-2xl shadow-xl p-2 animate-in fade-in zoom-in-95 duration-150">
                    <a
                      href="tel:+911512208777"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-muted/80 transition-all text-xs sm:text-sm font-medium text-foreground group cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center p-1.5 shrink-0 group-hover:scale-110 transition-transform">
                        <Image
                          src="/mobile.png"
                          alt="Call"
                          width={24}
                          height={24}
                          className="w-5 h-5 object-contain"
                        />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="font-semibold text-foreground">
                          Call Us
                        </span>
                        <span className="text-[11px] text-muted-foreground">
                          0151-2208777
                        </span>
                      </div>
                    </a>

                    <div className="h-px bg-border/50 my-1" />

                    <a
                      href="https://www.instagram.com/hotelrajhaveli?obrf=MWNwaTYxNWJ3aWtvZQ=="
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-muted/80 transition-all text-xs sm:text-sm font-medium text-foreground group cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-full bg-pink-500/10 flex items-center justify-center p-1.5 shrink-0 group-hover:scale-110 transition-transform">
                        <Image
                          src="/instagram.png"
                          alt="Instagram"
                          width={24}
                          height={24}
                          className="w-5 h-5 object-contain"
                        />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="font-semibold text-foreground">
                          Instagram
                        </span>
                        <span className="text-[11px] text-muted-foreground">
                          @hotelrajhaveli
                        </span>
                      </div>
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Categories Grid Section: "Pick what makes you happy" */}
      <div className="bg-background border-b border-border/70 py-6 md:py-8">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-foreground font-sans mb-5 md:mb-7">
            Pick what makes you happy
          </h2>

          {/* Responsive Wrapped Grid: 3 cols on mobile, 4 on small, 5 on tablet, 7 on desktop */}
          <div className="grid grid-cols-3 min-[420px]:grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-y-6 gap-x-2 sm:gap-x-4 md:gap-x-6 justify-items-center">
            {sections.map((s) => {
              const isSelected = s.index === active;
              return (
                <button
                  key={s.title}
                  id={"menu-tab-" + s.index}
                  onClick={() => goTo(s.index)}
                  aria-selected={isSelected}
                  role="tab"
                  className="group flex flex-col items-center cursor-pointer transition-all duration-200 focus:outline-none w-full max-w-[105px]"
                >
                  <div
                    className={`relative w-15 h-15 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center p-2.5 transition-all duration-300 shadow-xs ${
                      isSelected
                        ? "ring-[2.5px] ring-primary ring-offset-2 ring-offset-background shadow-md shadow-primary/30 scale-105"
                        : "hover:scale-105 hover:shadow-xs opacity-90 hover:opacity-100"
                    }`}
                    style={{
                      background:
                        "repeating-linear-gradient(90deg, #134139 0px, #134139 3.5px, #1c5449 3.5px, #1c5449 7px)",
                    }}
                  >
                    {getCategoryIcon(s.title)}
                  </div>
                  <span
                    className={`mt-2 text-[10.5px] sm:text-[11px] md:text-xs font-bold uppercase tracking-wider text-center transition-colors line-clamp-2 px-0.5 leading-tight ${
                      isSelected
                        ? "text-primary"
                        : "text-foreground/80 group-hover:text-foreground"
                    }`}
                  >
                    {s.title}
                  </span>
                  {/* Active theme color underline bar */}
                  <span
                    className={`mt-1.5 h-[2.5px] w-12 sm:w-14 md:w-16 rounded-full transition-all duration-300 ${
                      isSelected ? "bg-primary" : "bg-transparent"
                    }`}
                  />
                </button>
              );
            })}

            {/* Banquet Menu Tab */}
            {filteredBanquetCategories.length > 0 && (
              <button
                key="Banquet Menu"
                id="menu-tab-banquet"
                onClick={() => goTo("banquet")}
                aria-selected={active === "banquet"}
                role="tab"
                className="group flex flex-col items-center cursor-pointer transition-all duration-200 focus:outline-none w-full max-w-[105px]"
              >
                <div
                  className={`relative w-15 h-15 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center p-2.5 transition-all duration-300 border-2 border-amber-300/80 ${
                    active === "banquet"
                      ? "ring-[3px] ring-amber-500 ring-offset-2 ring-offset-background shadow-lg shadow-amber-500/40 scale-105"
                      : "shadow-md shadow-amber-600/25 ring-2 ring-amber-500/40 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/35"
                  }`}
                  style={{
                    background:
                      "linear-gradient(135deg, #78350f 0%, #b45309 45%, #d97706 100%)",
                  }}
                >
                  {/* "Events" Highlight Pill Badge */}
                  <span className="absolute -top-1.5 -right-1 px-1.5 py-0.5 text-[8.5px] font-black uppercase tracking-wider rounded-full bg-amber-500 text-white shadow-xs border border-amber-200/60">
                    Events
                  </span>
                  {getCategoryIcon("banquet")}
                </div>
                <span
                  className={`mt-2 text-[10.5px] sm:text-[11px] md:text-xs font-bold uppercase tracking-wider text-center transition-colors line-clamp-2 px-0.5 leading-tight ${
                    active === "banquet"
                      ? "text-amber-600 font-extrabold"
                      : "text-amber-700/90 group-hover:text-amber-600 font-bold"
                  }`}
                >
                  Banquet Menu
                </span>
                {/* Active theme color underline bar */}
                <span
                  className={`mt-1.5 h-[2.5px] w-12 sm:w-14 md:w-16 rounded-full transition-all duration-300 ${
                    active === "banquet" ? "bg-amber-600" : "bg-transparent"
                  }`}
                />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Sticky Bar: "Menu" title, dietary filters & search bar */}
      <div
        id="menu-sticky-bar"
        className={`sticky ${STICKY_TOP} z-30 bg-background/95 backdrop-blur-md border-b border-border shadow-xs `}
      >
        <div className="container mx-auto max-w-7xl px-4 md:px-8 py-3.5 space-y-2.5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3 md:gap-4 flex-wrap">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground font-sans">
                Menu
              </h3>

              {/* All / Veg / Non-Veg Filter Buttons with website theme */}
              <div
                className="flex items-center gap-2"
                role="group"
                aria-label="Filter by dietary preference"
              >
                <button
                  type="button"
                  onClick={() => setFilter("all")}
                  aria-pressed={filter === "all"}
                  className={`px-3 md:px-3.5 py-1.5 rounded-lg border text-xs md:text-sm font-medium transition-all cursor-pointer ${
                    filter === "all"
                      ? "bg-primary border-primary text-primary-foreground shadow-2xs"
                      : "bg-card border-border/80 text-foreground/80 hover:bg-muted"
                  }`}
                >
                  All
                </button>

                <button
                  type="button"
                  onClick={() => setFilter("veg")}
                  aria-pressed={filter === "veg"}
                  className={`flex items-center gap-1.5 px-3 md:px-3.5 py-1.5 rounded-lg border text-xs md:text-sm font-medium transition-all cursor-pointer ${
                    filter === "veg"
                      ? "bg-green-50 border-green-600 text-green-900 shadow-2xs ring-1 ring-green-600/30"
                      : "bg-card border-border/80 text-foreground/80 hover:bg-muted"
                  }`}
                >
                  <span className="inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[2px] border border-green-600 bg-white p-[1px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                  </span>
                  <span>Veg</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFilter("nonveg")}
                  aria-pressed={filter === "nonveg"}
                  className={`flex items-center gap-1.5 px-3 md:px-3.5 py-1.5 rounded-lg border text-xs md:text-sm font-medium transition-all cursor-pointer ${
                    filter === "nonveg"
                      ? "bg-red-50 border-red-600 text-red-900 shadow-2xs ring-1 ring-red-600/30"
                      : "bg-card border-border/80 text-foreground/80 hover:bg-muted"
                  }`}
                >
                  <span className="inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[2px] border border-red-600 bg-white p-[1px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                  </span>
                  <span>Non Veg</span>
                </button>
              </div>
            </div>

            {/* Search Input right alongside */}
            <div className="relative w-full sm:w-72 md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setQuery("");
                }}
                placeholder="Search dishes or cuisines..."
                aria-label="Search dishes"
                className="h-9 md:h-10 w-full rounded-lg border border-border/80 bg-background pl-9 pr-8 text-xs md:text-sm text-foreground shadow-2xs placeholder:text-muted-foreground/70 transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Search Result Feedback Bar */}
          {query.trim() && (
            <div className="flex items-center justify-between pt-1 text-xs text-muted-foreground">
              <span>
                Found{" "}
                <strong className="text-primary font-semibold">
                  {allDishesCount}
                </strong>{" "}
                {allDishesCount === 1 ? "dish" : "dishes"} matching &ldquo;
                {query}
                &rdquo;
              </span>
              <button
                type="button"
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
          {sections.length === 0 && filteredBanquetCategories.length === 0 && (
            <div className="py-16 text-center text-muted-foreground">
              <p className="font-serif text-xl text-primary mb-2">
                No dishes found
              </p>
              <p className="text-sm">
                No items matched &ldquo;{query}&rdquo; with the selected{" "}
                {filter !== "all" ? `${filter} ` : ""}filter.
              </p>
              <button
                onClick={() => {
                  setQuery("");
                  setFilter("all");
                }}
                className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground hover:bg-primary/90 transition-colors shadow-xs cursor-pointer"
              >
                Reset search & filter
              </button>
            </div>
          )}

          {sections.map((s) => (
            <section
              key={s.title}
              id={"menu-" + s.index}
              className="scroll-mt-32 md:scroll-mt-28"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-primary text-center mb-2">
                {s.title}
              </h2>
              <div className="mx-auto mb-8 h-px w-20 bg-primary/30" />
              {s.groups.map((g, gi) => (
                <div key={gi} className="mb-8 last:mb-0">
                  {g.label && (
                    <h3 className="font-serif text-xl text-primary mb-3">
                      {g.label}
                    </h3>
                  )}
                  <ul className="grid md:grid-cols-2 md:gap-x-12">
                    {g.items.map((it) => (
                      <li
                        key={it.name}
                        className="flex gap-3 py-3 border-b border-border"
                      >
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
                        <span className="font-medium text-primary whitespace-nowrap">
                          ₹{it.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          ))}

          {/* Banquet Menu Section */}
          {filteredBanquetCategories.length > 0 && (
            <section
              id="menu-banquet"
              className="scroll-mt-32 md:scroll-mt-28 pt-10 border-t-2 border-primary/20"
            >
              {/* Banquet Header */}
              <div className="text-center mb-10">
                <span className="inline-block px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-3">
                  Events &amp; Celebrations
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold">
                  Banquet Menu
                </h2>
                <p className="text-sm md:text-base text-muted-foreground mt-2 max-w-xl mx-auto font-medium">
                  Lunch &amp; Dinner Banquet Menu &bull; Choose any one from
                  each course for your custom celebration feast
                </p>
                <div className="mx-auto mt-4 h-0.5 w-24 bg-primary/40 rounded-full" />
              </div>

              {/* Grid of Banquet Course Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredBanquetCategories.map((cat) => (
                  <div
                    key={cat.title}
                    className="rounded-2xl border border-border/80 bg-card/60 backdrop-blur-xs p-5 md:p-6 shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 border-b border-border/60 pb-3 mb-4">
                        <h3 className="font-serif text-lg md:text-xl font-bold text-primary">
                          {highlightMatch(cat.title, query)}
                        </h3>
                        <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary whitespace-nowrap">
                          {cat.note}
                        </span>
                      </div>

                      <ul className="space-y-2.5">
                        {cat.items.map((it) => (
                          <li
                            key={it.name}
                            className="flex items-center gap-3 py-1 text-sm text-foreground/90"
                          >
                            {it.both ? (
                              <div className="flex items-center gap-1 shrink-0">
                                <Dot nonVeg={false} />
                                <Dot nonVeg={true} />
                              </div>
                            ) : (
                              <Dot
                                nonVeg={Boolean(it.nonVeg)}
                                className="shrink-0"
                              />
                            )}
                            <span className="font-medium">
                              {highlightMatch(it.name, query)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="rounded-xl border border-border bg-muted/30 p-5 text-center text-sm text-muted-foreground">
            <p>All prices are exclusive of GST.</p>
            <p className="mt-2 flex items-center justify-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a
                href="tel:+911512208777"
                className="text-primary hover:underline"
              >
                01512208777
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Simple Footer */}
      <footer className="border-t border-border/70 bg-card py-6 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Raj Haveli Heritage Hotel. All rights
            reserved.
          </p>
          {/* <div className="flex items-center gap-4">
            <Link
              href="https://www.instagram.com/hotelrajhaveli?obrf=MWNwaTYxNWJ3aWtvZQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors flex items-center gap-1.5"
            >
              <Image
                src="/instagram.png"
                alt="Instagram"
                width={16}
                height={16}
                className="w-4 h-4 object-contain"
              />
              <span>Instagram</span>
            </Link>
            <span className="text-border">•</span>
            <a
              href="tel:+911512208777"
              className="hover:text-primary transition-colors flex items-center gap-1.5"
            >
              <Image
                src="/mobile.png"
                alt="Phone"
                width={16}
                height={16}
                className="w-4 h-4 object-contain"
              />
              <span>0151-2208777</span>
            </a>
          </div> */}
        </div>
      </footer>
    </div>
  );
}

function Dot({
  nonVeg = false,
  className = "",
}: {
  nonVeg?: boolean;
  light?: boolean;
  className?: string;
}) {
  return nonVeg ? (
    <span
      className={`inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[2px] border border-red-600 bg-white p-[1px] ${className}`}
      title="Non-Vegetarian"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
    </span>
  ) : (
    <span
      className={`inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[2px] border border-green-600 bg-white p-[1px] ${className}`}
      title="Vegetarian"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
    </span>
  );
}
