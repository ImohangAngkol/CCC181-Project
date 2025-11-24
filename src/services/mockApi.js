// Simulated delay helper
const sleep = (ms = 400) => new Promise(res => setTimeout(res, ms));

// In-memory “database” for demo purposes
let organs = [
  {
    id: 'heart',
    name: 'Heart',
    category: 'Organ',
    parts: ['Atria', 'Ventricles', 'Valves'],
    description: 'Learn and teach topics around the human heart—anatomy, function, and health.',
    rating: 4.2,
    ratingCount: 25,
  },
  {
    id: 'lungs',
    name: 'Lungs',
    category: 'Organ',
    parts: ['Bronchi', 'Alveoli', 'Pleura'],
    description: 'Exchange knowledge about respiration, stamina training, and breathing techniques.',
    rating: 3.8,
    ratingCount: 12,
  },
  {
    id: 'brain',
    name: 'Brain',
    category: 'Organ',
    parts: ['Cortex', 'Cerebellum', 'Brainstem'],
    description: 'Topics on cognition, memory strategies, and neuro basics.',
    rating: 4.5,
    ratingCount: 40,
  },
];

let users = [
  { id: 'u1', email: 'demo@skillswap.com', password: 'password', name: 'Demo User' },
];

export async function getOrgans() {
  await sleep();
  return organs;
}

// Rating formula: newAvg = (oldAvg*count + newRating) / (count + 1)
export async function rateOrgan(organId, rating) {
  await sleep();
  const item = organs.find(o => o.id === organId);
  if (!item) throw new Error('Organ not found');

  const prevTotal = item.rating * item.ratingCount;
  item.ratingCount += 1;
  item.rating = +( (prevTotal + rating) / item.ratingCount ).toFixed(2);
  return { ...item };
}

export async function login(email, password) {
  await sleep();
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    throw new Error('Invalid credentials');
  }
  const token = `mock-token-${user.id}`;
  localStorage.setItem('authToken', token);
  localStorage.setItem('authUser', JSON.stringify({ id: user.id, name: user.name, email: user.email }));
  return { token, user: { id: user.id, name: user.name, email: user.email } };
}

export async function logout() {
  await sleep(200);
  localStorage.removeItem('authToken');
  localStorage.removeItem('authUser');
  return true;
}
