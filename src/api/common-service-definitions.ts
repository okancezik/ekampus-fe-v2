import { AxiosInstance } from 'axios';
import { PostApi } from "./services/post-api"
import { AuthApi } from './services/auth-api';
import { StudentApi } from './services/student-api';

export interface ServicesProps{
    axiosClient:AxiosInstance;
}

const getV1Services = (props:ServicesProps)=>{
    return {
        PostApi: new PostApi(props.axiosClient),
        AuthApi: new AuthApi(props.axiosClient),
        StudentApi: new StudentApi(props.axiosClient)
    }
}

export {getV1Services}