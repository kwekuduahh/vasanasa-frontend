import axios from 'axios';

//lively-renewal-0a08dcffa9.strapiapp.com/

const axiosClient = axios.create({
	baseURL: 'https://lively-renewal-0a08dcffa9.strapiapp.com',
});

export default axiosClient;
