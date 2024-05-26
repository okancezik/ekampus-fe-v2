import { BASE_PATH } from "../base";
import { AddPostRequestModel } from "../models/add-post-request-model";
import { BaseApi } from "./base-api";

export class PostApi extends BaseApi{

    public async GetAllPosts() {
        return await this.axiosClient.get(BASE_PATH+'/posts/getPostDetailsBySort')
    }

    public async Add(data:AddPostRequestModel) {
        return await this.axiosClient.post(BASE_PATH+'/posts/add',data)
    }

}