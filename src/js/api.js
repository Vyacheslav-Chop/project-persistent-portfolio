import axios from 'axios';

// Функції для роботи з бекендом
export async function sendFormData(value) {
  const { data } = await axios.post(
    'https://portfolio-js.b.goit.study/api/requests',
    value
  );
  return data;
}

// export async function testSendFormData(value) {
//   const result = await sendFormData(value);
//   console.log(result);
// }
