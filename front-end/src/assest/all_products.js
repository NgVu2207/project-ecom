import item1 from "../img/item1.jpg";
import item2 from "../img/item2.jpg";
import item3 from "../img/item3.jpg";
import item4 from "../img/item4.jpg";
import kid1 from "../img/kid1.jpg";
import kid2 from "../img/kid2.jpg";
import kid3 from "../img/kid3.jpg";
import kid4 from "../img/kid4.jpg";
import kid5 from "../img/kid5.jpg";
import kid6 from "../img/kid6.jpg";
import kid7 from "../img/kid7.jpg";
import kid8 from "../img/kid8.jpg";
import kid9 from "../img/kid9.jpg";
import women1 from "../img/women1.jpg";
import women2 from "../img/women2.jpg";
import women3 from "../img/women3.jpg";
import women4 from "../img/women4.jpg";
import women5 from "../img/women5.jpg";
import women6 from "../img/women6.jpg";
import women7 from "../img/women7.jpg";
import women8 from "../img/women8.jpg";
import women9 from "../img/women9.jpg";
import women10 from "../img/women10.jpg";
import women11 from "../img/women11.jpg";
import women12 from "../img/women12.jpg";
import women13 from "../img/women13.jpg";
import women14 from "../img/women14.jpg";
import men1 from "../img/men1.jpg";
import men2 from "../img/men2.jpg";
import men3 from "../img/men3.jpg";
import men4 from "../img/men4.jpg";
import men5 from "../img/men5.jpg";
import men6 from "../img/men6.jpg";
import men7 from "../img/men7.jpg";
import men8 from "../img/men8.jpg";
import men9 from "../img/men9.jpg";

let all_products = [
  {
    id: 1,
    name: "T-shirt-1",
    category: "women",
    image: item1,
    new_price: 99.0,
    old_price: 100.0,
  },
  {
    id: 2,
    name: "T-shirt-2",
    category: "women",
    image: item2,
    new_price: 50.0,
    old_price: 100.0,
  },
  {
    id: 3,
    name: "T-shirt-3",
    category: "women",
    image: item3,
    new_price: 70.0,
    old_price: 150.0,
  },
  {
    id: 4,
    name: "T-shirt-4",
    category: "women",
    image: item4,
    new_price: 80.0,
    old_price: 300.0,
  },
  {
    id: 5,
    name: "kid-1",
    category: "kid",
    image: kid1,
    new_price: 80.0,
    old_price: 100.0,
  },
  {
    id: 6,
    name: "kid-2",
    category: "kid",
    image: kid2,
    new_price: 50.0,
    old_price: 300.0,
  },
  {
    id: 7,
    name: "kid-3",
    category: "kid",
    image: kid3,
    new_price: 30.0,
    old_price: 550.0,
  },
  {
    id: 8,
    name: "kid-4",
    category: "kid",
    image: kid4,
    new_price: 20.0,
    old_price: 600.0,
  },
  {
    id: 9,
    name: "women-1",
    category: "women",
    image: women1,
    new_price: 500.0,
    old_price: 8000.0,
  },
  {
    id: 10,
    name: "women-2",
    category: "women",
    image: women2,
    new_price: 450.0,
    old_price: 3000.0,
  },
  {
    id: 11,
    name: "women-3",
    category: "women",
    image: women3,
    new_price: 500.0,
    old_price: 6500.0,
  },

  {
    id: 12,
    name: "women-4",
    category: "women",
    image: women4,
    new_price: 700.0,
    old_price: 3300.0,
  },
  {
    id: 13,
    name: "men-1",
    category: "men",
    image: men1,
    new_price: 20.0,
    old_price: 100.0,
  },
  {
    id: 14,
    name: "men-2",
    category: "men",
    image: men2,
    new_price: 40.0,
    old_price: 300.0,
  },
  {
    id: 15,
    name: "men-3",
    category: "men",
    image: men3,
    new_price: 30.0,
    old_price: 150.0,
  },
  {
    id: 16,
    name: "men-4",
    category: "men",
    image: men4,
    new_price: 40.0,
    old_price: 80.0,
  },
  {
    id: 17,
    name: "men-5",
    category: "men",
    image: men5,
    new_price: 20.0,
    old_price: 100.0,
  },
  {
    id: 18,
    name: "men-6",
    category: "men",
    image: men6,
    new_price: 40.0,
    old_price: 300.0,
  },
  {
    id: 19,
    name: "men-7",
    category: "men",
    image: men7,
    new_price: 30.0,
    old_price: 150.0,
  },
  {
    id: 20,
    name: "men-8",
    category: "men",
    image: men8,
    new_price: 40.0,
    old_price: 80.0,
  },
  {
    id: 21,
    name: "men-9",
    category: "men",
    image: men9,
    new_price: 40.0,
    old_price: 80.0,
  },
  {
    id: 22,
    name: "kid-5",
    category: "kid",
    image: kid5,
    new_price: 80.0,
    old_price: 100.0,
  },
  {
    id: 23,
    name: "kid-6",
    category: "kid",
    image: kid6,
    new_price: 50.0,
    old_price: 300.0,
  },
  {
    id: 24,
    name: "kid-7",
    category: "kid",
    image: kid7,
    new_price: 30.0,
    old_price: 550.0,
  },
  {
    id: 25,
    name: "kid-8",
    category: "kid",
    image: kid8,
    new_price: 20.0,
    old_price: 600.0,
  },
  {
    id: 26,
    name: "kid-9",
    category: "kid",
    image: kid9,
    new_price: 20.0,
    old_price: 600.0,
  },
  {
    id: 27,
    name: "women-5",
    category: "women",
    image: women5,
    new_price: 99.0,
    old_price: 100.0,
  },
  {
    id: 28,
    name: "women-6",
    category: "women",
    image: women6,
    new_price: 50.0,
    old_price: 100.0,
  },
  {
    id: 29,
    name: "women-7",
    category: "women",
    image: women7,
    new_price: 70.0,
    old_price: 150.0,
  },
  {
    id: 30,
    name: "women-8",
    category: "women",
    image: women8,
    new_price: 80.0,
    old_price: 300.0,
  },
  {
    id: 31,
    name: "women-9",
    category: "women",
    image: women9,
    new_price: 200.0,
    old_price: 6000.0,
  },
  {
    id: 32,
    name: "women-10",
    category: "women",
    image: women10,
    new_price: 99.0,
    old_price: 100.0,
  },
  {
    id: 33,
    name: "women-11",
    category: "women",
    image: women11,
    new_price: 50.0,
    old_price: 100.0,
  },
  {
    id: 34,
    name: "women-12",
    category: "women",
    image: women12,
    new_price: 70.0,
    old_price: 150.0,
  },
  {
    id: 35,
    name: "women-13",
    category: "women",
    image: women13,
    new_price: 80.0,
    old_price: 300.0,
  },
  {
    id: 36,
    name: "women-14",
    category: "women",
    image: women14,
    new_price: 80.0,
    old_price: 300.0,
  },
];

export default all_products;
