import axios from 'axios';

const axiosClient = axios.create({
	baseURL: 'http://localhost:1337',
});

export default axiosClient;
