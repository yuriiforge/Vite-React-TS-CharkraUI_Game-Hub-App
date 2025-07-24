import axios, { type AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: import.meta.env.VITE_RAWIO_API_KEY,
  },
});

class ApiClient {
  async getAll<T>(route: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await axiosInstance.get<T>(route, config);
    return response.data;
  }

  async getOne<T>(route: string): Promise<T> {
    const response = await axiosInstance.get<T>(route);
    return response.data;
  }
}

export const apiClient = new ApiClient();
