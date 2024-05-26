import { BASE_PATH } from '../base';
import { AuthModel } from './../models/auth-model';
import { BaseApi } from "./base-api";

export class AuthApi extends BaseApi{

    public login(authModel: AuthModel){
        return this.axiosClient.post(BASE_PATH+'/auth/login',authModel)
    }

    public register(){

    }
}