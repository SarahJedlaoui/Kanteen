import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Content for L'Mida restaurant",
    paragraph:
      "To make it easy for you, we've listed a few creative ideas in this blog for your photo and video content, along with reels to inspire you. Take a look and start crafting your unique storytelling journey!",
    image: "/images/blog/lmida.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
    path: '/lmidaReels',
  },
  {
    id: 2,
    title: "Content for Tokyo Hot Fried Chicken",
    paragraph:
      "To make it easy for you, we've listed a few creative ideas in this blog for your photo and video content, along with reels to inspire you. Take a look and start crafting your unique storytelling journey!",
    image: "/images/blog/tokyo.png",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
    path: '/accommodations',
  },
  {
    id: 3,
    title: "Content For Buvette Pacey",
    paragraph:
      "To make it easy for you, we've listed a few creative ideas in this blog for your photo and video content, along with reels to inspire you. Take a look and start crafting your unique storytelling journey!",
    image: "/images/blog/buvette.png",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
    path: '/accommodations',
  },
];
export default blogData;
