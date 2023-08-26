import { ReactNode } from "react";
import { IconType } from "react-icons";
import { GiCargoShip } from "react-icons/gi";
import { GrSecure } from "react-icons/gr";
import { LiaHandsHelpingSolid } from "react-icons/lia";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: "/assets/images/thumbnail-shoe1.svg",
    bigShoe: "/assets/images/big-shoe1.png",
  },
  {
    thumbnail: "/assets/images/thumbnail-shoe2.svg",
    bigShoe: "/assets/images/big-shoe2.png",
  },
  {
    thumbnail: "/assets/images/thumbnail-shoe3.svg",
    bigShoe: "/assets/images/big-shoe3.png",
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: "/assets/images/shoe4.svg",
    name: "Nike Air Jordan-01",
    price: "$200.20",
  },
  {
    imgURL: "/assets/images/shoe5.svg",
    name: "Nike Air Jordan-10",
    price: "$210.20",
  },
  {
    imgURL: "/assets/images/shoe6.svg",
    name: "Nike Air Jordan-100",
    price: "$220.20",
  },
  {
    imgURL: "/assets/images/shoe7.svg",
    name: "Nike Air Jordan-001",
    price: "$230.20",
  },
];

interface ServiceProps {
  icon: IconType;
  label: string;
  subtext: string;
}

export const services: ServiceProps[] = [
  {
    icon: GiCargoShip,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    icon: GrSecure,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    icon: LiaHandsHelpingSolid,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: "/assets/images/lithula.png",
    customerName: "Lithula Nethsithu",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: "/assets/images/menula.png",
    customerName: "Menula Methdinu",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];
