import axios from "axios";


const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {


  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',

  },
  headers: {
    'X-RapidAPI-Key': '1fa5cf8db1msh0a5d26655faa3e1p1574b4jsnc3bdbf64fca1',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
//   headers: {
//     'X-RapidAPI-Key': '8aad38b2a2msha5ad4dff3a35f5ep135457jsn7c3cfc1ad03e',
//     'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
//   }
};

export const getPlacesData = async () => {

    try {
        const {data:{data}} = await axios.get(URL,options);
      
       return data;
    } catch (error) {
        console.log(error.message);

    }
};