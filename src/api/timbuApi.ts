// api/timbuApi.ts
import axios from 'axios';

const API_ID = 'OQBQLIXUQGC2A6S';
const API_KEY = 'eef148a9c86e4ad5800ff9eed427d6e520240715110520781437'; 

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_ID, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data.products; 
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
