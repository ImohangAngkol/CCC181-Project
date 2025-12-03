/**
 * Mock API layer that simulates GET/POST using in-memory arrays.
 * No database; this resets on refresh.
 */

// Sample categories: Organs and Parts
const categories = [
  {
    id: "organs",
    name: "Organs",
    description: "Explore organ-related knowledge, care, and study topics.",
  },
  {
    id: "parts",
    name: "Parts",
    description: "Dive into anatomical parts, components, and practical skills.",
  },
];

// Sample skills to swap
let skills = [
  {
    id: "s1",
    offerSkill: "Graphic Design",
    seekSkill: "Frontend React Basics",
    user: "Alex",
    category: "parts",
  },
  {
    id: "s2",
    offerSkill: "JavaScript Tutoring",
    seekSkill: "Anatomy Study Techniques",
    user: "Bianca",
    category: "organs",
  },
  {
    id: "s3",
    offerSkill: "Public Speaking",
    seekSkill: "UI/UX Wireframing",
    user: "Chris",
    category: "parts",
  },
];

let ratings = [
  { id: "r1", itemId: "s1", stars: 4 },
  { id: "r2", itemId: "s2", stars: 5 },
];

// Simulate network delay
const delay = (ms = 250) => new Promise(res => setTimeout(res, ms));

export async function getCategories() {
  await delay();
  return [...categories];
}

export async function getSkills(filter = {}) {
  await delay();
  const { category } = filter;
  let list = [...skills];
  if (category) list = list.filter(s => s.category === category);
  return list;
}

export async function postSwap(newSwap) {
  await delay();
  const id = `s${skills.length + 1}`;
  const payload = { id, ...newSwap };
  skills = [payload, ...skills];
  return payload;
}

export async function getRatings(itemId) {
  await delay();
  return ratings.filter(r => r.itemId === itemId);
}

export async function postRating(itemId, stars) {
  await delay();
  const id = `r${ratings.length + 1}`;
  const entry = { id, itemId, stars: Math.max(0, Math.min(5, stars)) };
  ratings = [entry, ...ratings];
  return entry;
}
