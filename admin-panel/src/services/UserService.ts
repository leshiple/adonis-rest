import ApiService, { UserResponseBody } from './ApiService';

export default {
  async fetchUser(id: string): Promise<UserResponseBody | boolean> {
    try {
      const response = await ApiService.fetchUser(id);
      return response.data.body;
    } catch {
      return false;
    }
  },
  async fetchMe(): Promise<UserResponseBody | boolean> {
    try {
      const response = await ApiService.fetchMe();
      return response.data.body;
    } catch {
      return false;
    }
  },
};
