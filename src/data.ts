import figmaCover from "./assets/course-figma.png";
import digitalCover from "./assets/course-digital.png";
import dataCover from "./assets/course-data.png";
import productivityCover from "./assets/course-productivity.png";
import financeCover from "./assets/course-finance.png";
import startupCover from "./assets/course-startup.png";

export type Course = {
  slug: string;
  title: string;
  category: string;
  cover: string;
  lessons: number;
  duration: string;
  comments: number;
  rating: string;
  description: string;
};

export const courses: Course[] = [
  {
    slug: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    category: "UI/UX Design",
    cover: figmaCover,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: "4.5",
    description:
      "Learn the foundations of interface design, create polished screens, and turn your ideas into interactive prototypes.",
  },
  {
    slug: "build-digital-asset",
    title: "Build Digital Asset",
    category: "Digital Illustration",
    cover: digitalCover,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: "4.5",
    description:
      "Explore a playful approach to making digital assets, from your first sketches to finished visual systems.",
  },
  {
    slug: "the-power-of-big-data",
    title: "The Power of Big Data",
    category: "Data Science",
    cover: dataCover,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: "4.5",
    description:
      "Find meaningful insights in data and learn how to tell clear stories with your discoveries.",
  },
  {
    slug: "balancing-productivity-and-self-care",
    title: "Balancing Productivity and Self-Care",
    category: "Productivity",
    cover: productivityCover,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: "4.5",
    description:
      "Build a sustainable routine that helps you do meaningful work while making space to recharge.",
  },
  {
    slug: "mastering-money-management",
    title: "Mastering Money Management",
    category: "Business",
    cover: financeCover,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: "4.5",
    description:
      "Make confident financial decisions and create a practical plan for your personal goals.",
  },
  {
    slug: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    category: "Entrepreneurship",
    cover: startupCover,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: "4.5",
    description:
      "Shape an idea, validate it with real people, and learn the building blocks of a growing business.",
  },
];

export const filters = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Business",
];
