import { SignUpRequestModel } from './../models/sign-up-request-model';
import { BASE_PATH } from '../base';
import { AuthModel } from './../models/auth-model';
import { BaseApi } from "./base-api";

export class AuthApi extends BaseApi{

    public async login(authModel: AuthModel){
        return await this.axiosClient.post(BASE_PATH+'/auth/login',authModel)
    }

    public async register(signUpRequestModel:SignUpRequestModel){
        return await this.axiosClient.post(BASE_PATH+'/auth/register',signUpRequestModel)
    }
}