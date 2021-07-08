import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance, AxiosError } from 'axios';
import NotificationService from 'src/services/NotificationService';
import ErrorResponseService from 'src/services/ErrorResponseService';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}

const api = axios.create({ baseURL: 'http://localhost:8080/api/v1/' });

export default boot(({ app }) => {
  api.interceptors.response.use((res) => res, (error: AxiosError) => {
    const message = ErrorResponseService.getErrorMessage(error.response?.data);
    NotificationService.showError(message);
    return Promise.reject(error);
  });

  // api.interceptors.request.use((config) => {
  //   const { token }: IAuthState = store.state.auth;

  //   if (token) {
  //     config.headers = {
  //       Authorization: `Bearer ${token}`,
  //     };
  //   }

  //   return config;
  // });
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { axios, api };
