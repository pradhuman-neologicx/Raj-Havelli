"use client";

import { useEffect, useMemo, useState } from "react";

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

const CSS = `
.rh{--bg:#f5e4c8;--card:#faefd9;--gold:#a8610a;--line:#d9b777;--ink:#3a2a1a;--mute:#7a6650;--red:#8c2f1b;--green:#2e7d32}
.rh *{box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:112px}
.rh{margin:0;background:var(--bg);color:var(--ink);font:17px/1.4 Georgia,'Times New Roman',serif}
.rh header{text-align:center;padding:34px 16px 18px}
.rh h1{margin:0;font:600 34px/1.1 Georgia,'Times New Roman',serif;letter-spacing:.14em;color:var(--gold)}
.rh header p{margin:6px 0 0;letter-spacing:.3em;color:var(--mute);font-size:13px}
.rh header a{display:inline-block;margin-top:12px;color:var(--red);font-size:14px;text-decoration:none}
.rh nav{position:sticky;top:0;z-index:5;background:var(--bg);border-bottom:1px solid var(--line);padding:10px 12px 8px}
.rh .tabs{display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;padding-bottom:6px}
.rh .tabs::-webkit-scrollbar{display:none}
.rh .tabs a{flex:none;padding:6px 14px;border:1px solid var(--line);border-radius:20px;color:var(--gold);text-decoration:none;font-size:15px;background:var(--card)}
.rh .tabs a.on{background:var(--gold);color:#fff;border-color:var(--gold)}
.rh .f{display:flex;gap:14px;font-size:14px;color:var(--mute);align-items:center}
.rh .f label{display:flex;gap:6px;align-items:center}
.rh main{max-width:640px;margin:0 auto;padding:6px 14px 40px}
.rh section{margin-top:26px}
.rh h2{margin:0 0 4px;text-align:center;font:500 28px Georgia,'Times New Roman',serif;color:var(--gold);letter-spacing:.06em}
.rh h2::after{content:"";display:block;width:90px;height:1px;background:var(--gold);margin:6px auto 14px}
.rh h3{margin:18px 0 6px;font:600 19px Georgia,'Times New Roman',serif;color:var(--ink)}
.rh .i{display:flex;gap:10px;padding:9px 0;border-bottom:1px dotted var(--line)}
.rh .d{flex:none;width:12px;height:12px;border:1.5px solid var(--green);margin-top:5px;position:relative}
.rh .d::after{content:"";position:absolute;inset:2px;border-radius:50%;background:var(--green)}
.rh .d.n{border-color:var(--red)}
.rh .d.n::after{background:var(--red)}
.rh .t{flex:1}
.rh .t small{display:block;color:var(--mute);font-size:13px;line-height:1.3;margin-top:2px}
.rh .p{flex:none;font-weight:500;color:var(--red);white-space:nowrap}
.rh .i.h{display:none}
.rh footer{text-align:center;color:var(--mute);font-size:13px;padding:0 16px 40px}
.rh footer a{color:var(--red)}
.rh{min-height:100vh;background:var(--bg);color:var(--ink);font:17px/1.4 Georgia,'Times New Roman',serif}
.rh section{scroll-margin-top:112px}
`;

export default function MenuPage() {
  const [vegOnly, setVegOnly] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    const onScroll = () => {
      const y = window.scrollY + 130;
      let c = 0;
      MENU.forEach((_, i) => {
        const el = document.getElementById("s" + i);
        if (el && el.offsetTop <= y) c = i;
      });
      setActive(c);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  useEffect(() => {
    document.getElementById("tab" + active)?.scrollIntoView({
      inline: "center",
      block: "nearest",
    });
  }, [active]);

  const sections = useMemo(
    () =>
      MENU.map(([title, groups]) => ({
        title,
        groups: groups.map(([label, items]) => ({
          label,
          items: items
            .map((r) => {
              const nonVeg = r.startsWith("*");
              const [name, price, desc] = (nonVeg ? r.slice(1) : r).split("|");
              return { name, price, desc, nonVeg };
            })
            .filter((i) => !(vegOnly && i.nonVeg)),
        })),
      })),
    [vegOnly]
  );

  return (
    <div className="rh">
      <style>{CSS}</style>
      <header>
        <h1>RAJ HAVELI</h1>
        <p>HERITAGE</p>
        <a href="tel:+911512208777">Call: 01512208777 / 01512208666</a>
      </header>

      <nav>
        <div className="tabs">
          {MENU.map(([title], i) => (
            <a key={title} id={"tab" + i} href={"#s" + i} className={i === active ? "on" : ""}>
              {title}
            </a>
          ))}
        </div>
        <div className="f">
          <label>
            <input type="checkbox" checked={vegOnly} onChange={(e) => setVegOnly(e.target.checked)} /> Veg only
          </label>
          <span>All prices + GST</span>
        </div>
      </nav>

      <main>
        {sections.map((s, k) => (
          <section key={s.title} id={"s" + k}>
            <h2>{s.title}</h2>
            {s.groups.map((g, gi) => (
              <div key={gi}>
                {g.label && g.items.length > 0 && <h3>{g.label}</h3>}
                {g.items.map((it) => (
                  <div className="i" key={it.name}>
                    <span className={"d" + (it.nonVeg ? " n" : "")} />
                    <div className="t">
                      {it.name}
                      {it.desc && <small>{it.desc}</small>}
                    </div>
                    <div className="p">₹{it.price}</div>
                  </div>
                ))}
              </div>
            ))}
          </section>
        ))}
      </main>

      <footer>
        Additional GST applicable.
        <br />
        Tel: <a href="tel:+911512208777">+91 1512208777</a>, <a href="tel:+911512208666">1512208666</a>
      </footer>
    </div>
  );
}
