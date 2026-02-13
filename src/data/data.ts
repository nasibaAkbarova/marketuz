import type { Product } from "../types";
import blaknot from "../assets/images/blaknot.jpg";
import kampiyuter from "../assets/images/kampiyuter.jpg";
import spre from "../assets/images/spre.jpg";
import telefon from "../assets/images/telefon.jpg";
import vitaminD from "../assets/images/vitamnd.jpg";

export const products: Product[] = [
  {
    id: 1,
    nom: "Blaknot",
    narx: 10000,
    title: "Blaknot 100 varoqli kojini jilt",
    img: blaknot
    // "assets/images/blaknot.jpg"
  },
  {
    id: 2,
    nom: "Kampiyuter",
    narx: 15000000,
    title: "hp kompuyuter 187gegabaytli",
    img: kampiyuter
    // "assets/images/kampiyuter.jpg"
  },
  {
    id: 3,
    nom: "Spre",
    narx: 12000,
    title: "Spre kushbo'y iforga ega",
    img: spre
    // "assets/images/spre.jpg"
  },
  {
    id: 4,
    nom: "Telefo'n",
    narx: 18000000,
    title: "Telefo'n 73 gegebaytle",
    img: telefon
    // "assets/images/telefon.jpg"
  },
  {
    id: 5,
    nom: "Vitamin D",
    narx: 9000,
    title: "Vitamin D kapsulalari,",
    img:vitaminD
    //  "assets/images/vitamnD.jpg"
  },
  {
    id: 6,
    nom: "Smart Watch",
    narx: 450000,
    title: "Apple Watch SE 2nd Gen 44mm",
    img: "assets/images/watch.jpg"
  },
  {
    id: 7,
    nom: "Naushnik",
    narx: 2500000,
    title: "AirPods Pro 2 with USB-C",
    img: "assets/images/pods.jpg"
  },
  {
    id: 8,
    nom: "Sumka",
    narx: 75000,
    title: "Erkaklar uchun charm sumka",
    img: "assets/images/bag.jpg"
  }
];

// export const bannerImages = [
//   "assets/images/banner1.jpg",
//   "assets/images/banner2.jpg",
//   "assets/images/banner3.jpg",
//   "assets/images/banner4.jpg"
// ];
