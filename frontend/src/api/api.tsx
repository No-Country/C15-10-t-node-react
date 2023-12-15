import axios from 'axios';

export interface Place {
    _id: string;
    name: string;
    slug: string;
    description: string;
    imgs: Array<string>;
    coords: Array<string>;
    reviews: string;     
    price: number;                 // Otros campos que pueda tener tu JSON
}

export default async function getPlaces(): Promise<Place[]> {
  try {
    const response = await axios.get<Place[]>('https://freewind-main-back.vercel.app/places');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Puedes manejar el error de otra manera según tus necesidades
  }
}

