import { Homepage } from '@/components/types/definitions';
import axiosClient from './axios.client';
import { AxiosResponse } from 'axios';

export const getHomepageData = async (): Promise<AxiosResponse<Homepage>> => {
	const response = await axiosClient.get('/v1/Homepage?populate=*');
	return response.data;
};
