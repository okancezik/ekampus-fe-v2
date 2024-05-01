import axios from "axios";
import { useAtom } from "jotai";
import { loadingAtom } from "../store/global-atoms";
import { getV1Services } from "../api/common-service-definitions";

export const useAxiosServiceClient = () => {
  const [, setLoading] = useAtom(loadingAtom);

  axios.interceptors.request.use((config) => {
    setLoading(true);
    console.log("req: ", config);
    return config;
  });

  axios.interceptors.response.use(
    (response) => {
      if (!response.data.success) {
        setLoading(false);
        return Promise.reject(response);
      }
      setLoading(false);
      console.log("response: ", response);
      return response;
    },
    (error) => {
      console.log("error on response: ", error);
      setLoading(false);
      return Promise.reject(error);
    }
  );

  const services = getV1Services({
    axiosClient: axios
  });

  return {
    ...services
  }
};
