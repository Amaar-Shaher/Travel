import { create } from "apisauce";
import authStorage from "../auth/storage";

const apiClient = create({
  baseURL: "http://192.168.0.230:8000",
});

apiClient.addAsyncRequestTransform(async (request) => {
  const token = await authStorage.getToken();

  if (!token) return;
  request.headers["Authorization"] = `JWT ${token}`;
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

};

export default apiClient;
