export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  quote: string;
  image: string;
  date: string;
  serviceType: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Aisha Rahman",
    role: "Bride",
    location: "London",
    rating: 5,
    quote:
      "Priya is simply extraordinary. My bridal mehndi was the most breathtaking artwork I have ever seen on skin. Every guest at my wedding complimented it. She understood exactly what I wanted and elevated it beyond imagination. I felt like royalty.",
    image: "/images/testimonial-1.jpg",
    date: "March 2025",
    serviceType: "Gold Radiance Bridal Package",
  },
  {
    id: "2",
    name: "Fatima Al-Hassan",
    role: "Bride",
    location: "Birmingham",
    rating: 5,
    quote:
      "The attention to detail is absolutely unmatched. Priya spent 7 hours on my mehndi and every single stroke was flawless. My photographer said it was the most beautiful mehndi they had ever captured. Worth every penny and more.",
    image: "/images/testimonial-2.jpg",
    date: "January 2025",
    serviceType: "Diamond Opulence Package",
  },
  {
    id: "3",
    name: "Simran Kaur",
    role: "Wedding Planner",
    location: "Manchester",
    rating: 5,
    quote:
      "I've recommended Priya to over 30 of my brides and not one has been anything less than absolutely thrilled. Her professionalism, punctuality, and artistry are unrivalled. She is my go-to mehndi artist for every luxury wedding I plan.",
    image: "/images/testimonial-3.jpg",
    date: "February 2025",
    serviceType: "Corporate & Wedding Events",
  },
  {
    id: "4",
    name: "Nadia Patel",
    role: "Bride",
    location: "Leicester",
    rating: 5,
    quote:
      "I was worried about choosing an artist without seeing them work in person. One video call with Priya and I immediately knew she was the one. The consultation was so thorough and thoughtful. The result? My family cried. It was that beautiful.",
    image: "/images/testimonial-4.jpg",
    date: "December 2024",
    serviceType: "Silver Bloom Bridal Package",
  },
  {
    id: "5",
    name: "Zara Hussain",
    role: "Bride",
    location: "Luton",
    rating: 5,
    quote:
      "Mehndi Élan is not just a service — it is an experience. From the moment Priya arrived, she made me feel calm, pampered, and special. The designs are like wearable art. I genuinely could not stop staring at my own hands.",
    image: "/images/testimonial-5.jpg",
    date: "November 2024",
    serviceType: "Gold Radiance Bridal Package",
  },
  {
    id: "6",
    name: "Kavya Menon",
    role: "Event Organiser",
    location: "Slough",
    rating: 5,
    quote:
      "We booked Mehndi Élan for our Diwali corporate event and it was the highlight of the evening. 200 guests all raving about it. Priya and her team were graceful, efficient, and incredibly talented. We will never use anyone else.",
    image: "/images/testimonial-6.jpg",
    date: "October 2024",
    serviceType: "Corporate Events Package",
  },
];
