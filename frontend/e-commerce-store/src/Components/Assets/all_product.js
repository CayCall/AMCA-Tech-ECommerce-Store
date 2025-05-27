import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

let all_product = [
  // Phones
  { 
    id: 1,
    name: "iPhone 15 Pro Max - 256GB -Black", 
    category: "phones", 
    image: p2_img, 
    new_price: 25999.99, 
    old_price: 29999.99
  },
  { 
    id: 2, 
    name: "Apple - iPhone 14 128GB - Blue", 
    category: "phones", 
    image: p1_img, 
    new_price: 19999.99, 
    old_price: 23999.99 
  },
  { 
    id: 3, 
    name: "Google Pixel 8 Pro - 128GB", 
    category: "phones", 
    image: p3_img, 
    new_price: 12999.99, 
    old_price: 14999.99 
  },
  { 
    id: 4, 
    name: "OnePlus 12 - 256GB", 
    category: "phones", 
    image: p4_img, 
    new_price: 9999.99, 
    old_price: 12999.99 
  },
  { 
    id: 5, 
    name: "iPhone 14 - 128GB", 
    ategory: "phones", 
    image: p5_img, 
    new_price:  18999.99, 
    old_price: 22999.99 
  },
  { 
    id: 6, 
    name: "Samsung - Galaxy A36 5G 128GB - Black", 
    category: "phones", 
    image: p6_img, 
    new_price: 4999.99, 
    old_price: 5999.99 
  },
  { 
    id: 7, 
    name: "HMD - Vibe 128GB - Charcoal", 
    category: "phones", 
    image: p7_img, 
    new_price: 2499.99, 
    old_price: 2999.99 
  },
  { 
    id: 8, 
    name: "Motorola Edge+ 2023", 
    category: "phones", 
    image: p8_img, 
    new_price: 6199.99, 
    old_price: 7199.99 
  },
  { id: 9, 
    name: "Apple - iPhone 13 5G 128GB - Starlight", 
    category: "phones", 
    image: p9_img, 
    new_price: 9999.99, 
    old_price: 11999.99 
  },

  // Tablets
  { 
    id: 10, 
    name: "iPad Pro 12.9-inch - M2", 
    category: "tablets", 
    image: p10_img, 
    new_price: 29999.99, 
    old_price: 35999.99 
  },
  { 
    id: 11, 
    name: "Samsung Galaxy Tab S9 Ultra", 
    category: "tablets", 
    image: p11_img, 
    new_price: 17999.99, 
    old_price: 20999.99 
  },
  // here rn
  { 
    id: 12, 
    name: "Lenovo Tab P12 Pro", 
    category: "tablets", 
    image: p12_img, 
    new_price: 10999.99, 
    old_price: 13999.99 
  },
  { 
    id: 13, 
    name: "iPad Air 10.9-inch (2022)", 
    category: "tablets", 
    image: p13_img, 
    new_price: 599.99, 
    old_price: 649.99 
  },
  { 
    id: 14, 
    name: "Microsoft Surface Go 3", 
    category: "tablets", 
    image: p14_img, 
    new_price: 529.99, 
    old_price: 599.99 
  },
  { 
    id: 15, 
    name: "Amazon Fire HD 10 Plus", 
    category: "tablets", 
    image: p15_img, 
    new_price: 179.99, 
    old_price: 229.99 
  },


  // Accesso
  // ries
  { 
    id: 16, 
    name: "Apple AirPods Pro (2nd Gen)", 
    category: "accessories", 
    image: p16_img, 
    new_price: 229.99, 
    old_price: 249.99 
  },
  { 
    id: 17, 
    name: "Samsung Galaxy Buds2 Pro", 
    category: "accessories", 
    image: p17_img, 
    new_price: 199.99, 
    old_price: 229.99 
  },
  { 
    id: 18, 
    name: "Anker Soundcore Liberty 4", 
    category: "accessories", 
    image: p18_img, 
    new_price: 129.99, 
    old_price: 149.99 
  },
  { 
    id: 19, 
    name: "Apple MagSafe Battery Pack", 
    category: "accessories", 
    image: p19_img, 
    new_price: 99.99, 
    old_price: 129.99 
  },
  { 
    id: 20, 
    name: "Samsung Wireless Charger Duo", 
    category: "accessories", 
    image: p20_img, 
    new_price: 79.99, 
    old_price: 99.99 
  },
  { 
    id: 21, 
    name: "Logitech MX Keys Wireless Keyboard", 
    category: "accessories", 
    image: p21_img, 
    new_price: 119.99, 
    old_price: 139.99 
  },
  { 
    id: 22, 
    name: "Razer Basilisk V3 Gaming Mouse", 
    category: "accessories", 
    image: p22_img, 
    new_price: 59.99, 
    old_price: 79.99 
  },
  { 
    id: 23, 
    name: "Sony WH-1000XM5 Headphones", 
    category: "accessories", 
    image: p23_img, 
    new_price: 379.99, 
    old_price: 399.99 
  },


  // Laptops

  { 
    id: 24, 
    name: "MacBook Pro 16\" M3 Pro - 2024", 
    category: "laptops", 
    image: p24_img, 
    new_price: 2499.99, 
    old_price: 2699.99 
  },
  { 
    id: 25, 
    name: "Dell XPS 15 OLED (2024)", 
    category: "laptops", 
    image: p25_img, 
    new_price: 1899.99, 
    old_price: 1999.99 
  },
  { 
    id: 26, 
    name: "HP Spectre x360 14", 
    category: "laptops", 
    image: p26_img, 
    new_price: 1599.99, 
    old_price: 1699.99 
  },
  { 
    id: 27, 
    name: "ASUS Zenbook Pro Duo", 
    category: "laptops", 
    image: p27_img, 
    new_price: 2299.99, 
    old_price: 2399.99 
  },
  { 
    id: 28, 
    name: "Microsoft Surface Laptop Studio", 
    category: "laptops", 
    image: p28_img, 
    new_price: 1799.99, 
    old_price: 1999.99 
  },
  { 
    id: 29, 
    name: "Lenovo Yoga 9i Gen 8", 
    category: "laptops", 
    image: p29_img, 
    new_price: 1399.99, 
    old_price: 1499.99 
  },
  { 
    id: 30, 
    name: "Acer Swift X (AMD Ryzen 7)", 
    category: "laptops", 
    image: p30_img, 
    new_price: 1099.99, 
    old_price: 1199.99 
  },
  { 
    id: 31, 
    name: "Razer Blade 16 (RTX 4080)", 
    category: "laptops", 
    image: p31_img, 
    new_price: 2899.99, 
    old_price: 3099.99 
  },
  { 
    id: 32, 
    name: "Alienware x17 R2 Gaming Laptop", 
    category: "laptops", 
    image: p32_img, 
    new_price: 2699.99, 
    old_price: 2899.99 
  },
  { 
    id: 33, 
    name: "Apple MacBook Air M2 - 13\"", 
    category: "laptops", 
    image: p33_img, 
    new_price: 1099.99, 
    old_price: 1199.99 
  },


  // Extra P
  // hones & Accessories
  { id: 34, 
    name: "Realme GT 5 Pro",
    category: "phones", 
    image: p34_img, 
    new_price: 599.99, 
    old_price: 699.99 
  },
  { id: 35, 
    name: "Nothing Phone (2)", 
    category: "phones", 
    image: p35_img, 
    new_price: 649.99, 
    old_price: 749.99 },
  { id: 36, 
    name: "Ugreen 65W USB-C GaN Charger", 
    category: "accessories", 
    image: p36_img, 
    new_price: 49.99, 
    old_price: 69.99 
  },
];

export default all_product;
