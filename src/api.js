import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL='https://66be2a8f74dfc195586ec5ba.mockapi.io/api/v1/campers/adverts';

export const fetchAllCampers= async(page=1)=>{
    try {
        const response=await axios.get(`https://66be2a8f74dfc195586ec5ba.mockapi.io/api/v1/campers/adverts?page=${page}&limit=4`);
        return response.data;
    } catch (error) {
        toast.error('Something went wrong');
    }
}
