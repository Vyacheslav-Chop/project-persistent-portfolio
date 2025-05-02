import axios from 'axios';

// Функції для роботи з бекендом
export async function sendFormData(value) {
  const { data } = await axios.post(
    'https://portfolio-js.b.goit.study/api/requests',
    value
  );
  return data;
}

// запит на відгуки

export async function fetchReviews() {
  try {
    const { data } = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );

    return data;
  } catch (error) {
    return [];
  }
}
