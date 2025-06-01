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
    category: "Phones",
    image: p2_img,
    new_price: 25999.99,
    old_price: 29999.99,
    brand: "Apple",
    description: "The iPhone 15 Pro Max features a 6.7-inch Super Retina XDR display, A17 Pro chip, and a 48MP main camera for the ultimate performance and photography experience."
  },
  {
    id: 2,
    name: "Apple - iPhone 14 128GB - Blue",
    category: "Phones",
    image: p1_img,
    new_price: 19999.99,
    old_price: 23999.99,
    brand: "Apple",
    description: "iPhone 14 delivers blazing-fast performance with the A15 Bionic chip and excellent low-light photography with its dual-camera system."

  },
  {
    id: 3,
    name: "Google Pixel 8 Pro - 128GB",
    category: "Phones",
    image: p3_img,
    new_price: 12999.99,
    old_price: 14999.99,
    description: "The Google Pixel 8 Pro features a Tensor G3 chip, Pro camera system, and exclusive AI-powered photo editing tools for crisp, vibrant images."
  },
  {
    id: 4,
    name: "OnePlus 12 - 256GB",
    category: "Phones",
    image: p4_img,
    new_price: 9999.99,
    old_price: 12999.99,
    brand: "OnePlus",
    description: "The OnePlus 12 packs a Snapdragon 8 Gen 2 chip, 120Hz AMOLED display, and ultra-fast charging for power users."
  },
  {
    id: 5,
    name: "iPhone 14 - 128GB",
    ategory: "Phones",
    image: p5_img,
    new_price: 18999.99,
    old_price: 22999.99,
    brand: "Google",
    description: "Experience the iPhone 14 with an A15 Bionic chip, durable design, and advanced safety features including crash detection and emergency SOS."
  },
  {
    id: 6,
    name: "Samsung - Galaxy A36 5G 128GB - Black",
    category: "Phones",
    image: p6_img,
    new_price: 4999.99,
    old_price: 5999.99,
    brand: "Samsung",
    description: "The Galaxy A36 5G features a 6.5-inch display, 5G connectivity, and a versatile camera system, offering a balance of performance and affordability."
  },
  {
    id: 7,
    name: "HMD - Vibe 128GB - Charcoal",
    category: "Phones",
    image: p7_img,
    new_price: 2499.99,
    old_price: 2999.99,
    brand: "HMD",
    description: "This smartphone offers a 6.5-inch display, dual-camera setup, and a long-lasting battery, providing essential features at an accessible price point."
  },
  {
    id: 8,
    name: "Motorola Edge+ 2023",
    category: "Phones",
    image: p8_img,
    new_price: 6199.99,
    old_price: 7199.99,
    brand: "Motorola",
    description: "The Edge+ 2023 boasts a 6.7-inch OLED display, Snapdragon 8 Gen 2 processor, and a triple-camera system, delivering flagship performance and photography capabilities."
  },
  {
    id: 9,
    name: "Apple - iPhone 13 5G 128GB - Starlight",
    category: "Phones",
    image: p9_img,
    new_price: 9999.99,
    old_price: 11999.99,
    brand: "Apple",
    description: "Featuring a 6.1-inch Super Retina XDR display, A15 Bionic chip, and dual-camera system, the iPhone 13 offers strong performance and 5G connectivity."
  },

  // Tablets
  {
    id: 10,
    name: "iPad Pro 12.9-inch - M2",
    category: "Tablets",
    image: p10_img,
    new_price: 29999.99,
    old_price: 35999.99,
    brand: "Apple",
    description: "Apple's iPad Pro features a 12.9-inch Liquid Retina XDR display, M2 chip, and support for the Apple Pencil (2nd generation), offering powerful performance for professionals."
  },
  {
    id: 11,
    name: "Samsung Galaxy Tab S9 Ultra",
    category: "Tablets",
    image: p11_img,
    new_price: 17999.99,
    old_price: 20999.99,
    brand: "Samsung",
    description: "This tablet boasts a 14.6-inch Dynamic AMOLED 2X display with a 120Hz refresh rate, powered by the Snapdragon 8 Gen 2 processor. It includes an S Pen and offers up to 1TB of storage."
  },

  {
    id: 12,
    name: "Lenovo Tab P12 Pro",
    category: "Tablets",
    image: p12_img,
    new_price: 10999.99,
    old_price: 13999.99,
    brand: "Lenovo",
    description: "The Tab P12 Pro features a 12.6-inch AMOLED display, Snapdragon 870 processor, and a quad-speaker system, providing an immersive multimedia experience."
  },

  {
    id: 13,
    name: "iPad Air 10.9-inch (2022)",
    category: "Tablets",
    image: p13_img,
    new_price: 7999.99,
    old_price: 9999.99,
    brand: "Tablets",
    description: "This iPad Air model offers a 10.9-inch Liquid Retina display, M1 chip, and support for the Apple Pencil (2nd generation), balancing performance and portability."
  },
  {
    id: 14,
    name: "Apple - 11 - inch iPad - 128GB - Silver",
    category: "Tablets",
    image: p14_img,
    new_price: 9999.99,
    old_price: 11999.99,
    brand: "Apple",
    description: "Featuring an 11-inch Liquid Retina display and A14 Bionic chip, this iPad provides a smooth and responsive user experience for various tasks."
  },
  {
    id: 15,
    name: "Amazon - Fire HD 10 Kids tablet - Blue",
    category: "Tablets",
    image: p15_img,
    new_price: 4999.99,
    old_price: 5999.99,
    brand: "Amazon",
    description: "Designed for children, this tablet includes a 10.1-inch display, robust parental controls, and a durable case, making it suitable for young users."
  },


  // Accesso
  // ries
  {
    id: 16,
    name: "Apple AirPods Pro (2nd Gen)",
    category: "Accessories",
    image: p16_img,
    new_price: 2499.99,
    old_price: 3999.99,
    brand: "Apple",
    description: "These earbuds offer active noise cancellation, adaptive transparency, and spatial audio, delivering an immersive listening experience."
  },
  {
    id: 17,
    name: "Samsung Galaxy Buds2 Pro",
    category: "Accessories",
    image: p17_img,
    new_price: 2499.99,
    old_price: 2999.99,
    brand: "Samsung",
    description:"The Buds2 Pro feature active noise cancellation, 24-bit Hi-Fi audio, and a comfortable fit, providing high-quality sound in a compact design."
  },
  {
    id: 18,
    name: "Anker Soundcore Liberty 4",
    category: "Accessories",
    image: p18_img,
    new_price: 999.99,
    old_price: 1799.99,
    brand: "Anker",
    description: "These earbuds offer adaptive noise cancellation, spatial audio, and a comfortable fit, delivering a premium audio experience."
  },
  {
    id: 19,
    name: "Sony - ULT FIELD 1 Wireless Speaker",
    category: "Accessories",
    image: p19_img,
    new_price: 699.99,
    old_price: 899.99,
    brand: "Sony",
    description: "This portable speaker provides powerful sound, a durable design, and long battery life, making it ideal for on-the-go use."
  },
  {
    id: 20,
    name: "Samsung Wireless Charger Duo",
    category: "Accessories",
    image: p20_img,
    new_price: 699.99,
    old_price: 799.99,
    brand: "Samsung",
    description: "This charger allows simultaneous charging of two devices, such as a smartphone and smartwatch, with fast charging support."
  },
  {
    id: 21,
    name: "Logitech Wireless Keyboard",
    category: "Accessories",
    image: p21_img,
    new_price: 599.99,
    old_price: 799.99,
    brand: "Logitech",
    description: "A compact and reliable keyboard offering wireless connectivity and long battery life, suitable for various devices."
  },
  {
    id: 22,
    name: "Razer V3 Gaming Mouse",
    category: "Accessories",
    image: p22_img,
    new_price: 1099.99,
    old_price: 1599.99,
    brand: "Razer",
    description: "Designed for gamers, this mouse features customizable buttons, high-precision tracking, and RGB lighting."
  },
  {
    id: 23,
    name: "Sony WH-1000XM5 Headphones",
    category: "Accessories",
    image: p23_img,
    new_price: 4999.99,
    old_price: 5499.99,
    brand: "Sony",
    description: "These over-ear headphones offer industry-leading noise cancellation, exceptional sound quality, and all-day comfort."
  },


  // Laptops
  {
    id: 24,
    name: "MacBook Pro 16\" M3 Pro - 2024",
    category: "Laptops",
    image: p24_img,
    new_price: 17999.99,
    old_price: 19999.99,
    brand: "Apple",
    description: "Apple's MacBook Pro features a 16-inch Liquid Retina XDR display, M3 Pro chip, and up to 22 hours of battery life, catering to professional users."
  },
  {
    id: 25,
    name: "Dell XPS 15 OLED (2024)",
    category: "Laptops",
    image: p25_img,
    new_price: 15999.99,
    old_price: 18999.99,
    brand: "Dell",
    description: "The XPS 15 offers a 15.6-inch OLED display, Intel Core i7 processor, and dedicated graphics, providing powerful performance in a sleek design."
  },
  {
    id: 26,
    name: "HP Spectre x360 14",
    category: "Laptops",
    image: p26_img,
    new_price: 25999.99,
    old_price: 30999.99,
    brand: "HP",
    description: "This 2-in-1 laptop features a 14-inch OLED display, Intel Evo platform, and a convertible design, balancing performance and versatility."
  },
  {
    id: 27,
    name: "ASUS Zenbook Pro Duo",
    category: "Laptops",
    image: p27_img,
    new_price: 13999.99,
    old_price: 15999.99,
    brand: "Asus",
    description: "The Zenbook Pro Duo includes dual 4K displays, Intel Core i9 processor, and dedicated graphics, catering to creative professionals."
  },
  {
    id: 28,
    name: "Microsoft Surface Laptop ",
    category: "Laptops",
    image: p28_img,
    new_price: 22999.99,
    old_price: 24999.99,
    brand: "Microsoft",
    description: "Featuring a sleek design, high-resolution display, and Intel processors, the Surface Laptop offers a premium Windows experience."
  },
  {
    id: 29,
    name: "Lenovo Yoga 9i Gen 8",
    category: "Laptops",
    image: p29_img,
    new_price: 19999.99,
    old_price: 22999.99,
    brand: "Lenovo",
    description: "This convertible laptop features a 14-inch OLED display, Intel Core i7 processor, and a 360-degree hinge, offering flexibility and performance."
  },
  //here
  {
    id: 30,
    name: "Acer Swift X (AMD Ryzen 7)",
    category: "Laptops",
    image: p30_img,
    new_price: 7999.99,
    old_price: 8999.99,
    brand: "Acer",
    description: "The Swift X combines an AMD Ryzen 7 processor, NVIDIA GeForce RTX graphics, and a lightweight design, suitable for creators on the go."
  },
  {
    id: 31,
    name: "Razer Blade 16 (RTX 4080)",
    category: "Laptops",
    image: p31_img,
    new_price: 25999.99,
    old_price: 28999.99,
    brand: "Razer",
    description: "This gaming laptop boasts a 16-inch QHD+ 240Hz OLED display, Intel Core i9-14900HX processor, and NVIDIA GeForce RTX 4080 GPU, delivering top-tier gaming performance. "
  },
  {
    id: 32,
    name: "Alienware Gaming Laptop",
    category: "Laptops",
    image: p32_img,
    new_price: 32999.99,
    old_price: 35999.99,
    brand: "Alienware",
    description: "Alienware's gaming laptop features high-performance components, customizable RGB lighting, and advanced cooling solutions for immersive gaming."
  },
  {
    id: 33,
    name: "Apple MacBook Air M2 - 13\"",
    category: "Laptops",
    image: p33_img,
    new_price: 12999.99,
    old_price: 15999.99,
    brand: "Apple",
    description: "he MacBook Air offers a 13.6-inch Liquid Retina display, M2 chip, and up to 18 hours of battery life, combining portability and performance."
  },


  // Extra Phones & Accessories
  {
    id: 34,
    name: "Realme GT 5 Pro",
    category: "Phones",
    image: p34_img,
    new_price: 3999.99,
    old_price: 4999.99,
    brand: "Realme",
    description: "This smartphone features a 6.7-inch AMOLED display, Snapdragon 8 Gen 2 processor, and a triple-camera system, offering flagship-level performance."
  },
  {
    id: 35,
    name: "Apple Watch Series 10",
    category: "Accessories",
    image: p35_img,
    new_price: 7999.99,
    old_price: 8499.99,
    brand: "Apple",
    description: "The latest Apple Watch includes health monitoring features, a larger display, and improved performance, enhancing the wearable experience."
  },
  {
    id: 36,
    name: "Ugreen 65W USB-C GaN Charger",
    category: "Accessories",
    image: p36_img,
    new_price: 299.99,
    old_price: 399.99,
    brand: "Ugreen",
    description: "This compact charger offers fast charging for multiple devices, utilizing GaN technology for efficiency and portability."
  },
];

export default all_product;
