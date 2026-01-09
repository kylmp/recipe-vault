import { CreateAxiosDefaults } from 'axios'

export const axiosConfig: CreateAxiosDefaults = {
  timeout: 30000,
  baseURL: import.meta.env.VITE_BASE_URL || ''
};
