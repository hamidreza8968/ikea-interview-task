import axiosClient from './axiosClient';

export const apiGet = async <T>(endpoint: string): Promise<T> => {
    const response = await axiosClient.get<T>(endpoint);
    return response.data;
};
