import { AxiosInstance } from 'axios';
import { PostApi } from "./services/post-api"

export interface ServicesProps{
    axiosClient:AxiosInstance;
}

const getV1Services = (props:ServicesProps)=>{
    return {
        PostApi: new PostApi(props.axiosClient)
    }
}

export {getV1Services}