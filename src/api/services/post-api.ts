import { BASE_PATH } from "../base";
import { BaseApi } from "./base-api";

export class PostApi extends BaseApi{

    public GetAllPosts() {
        return this.axiosClient.get(BASE_PATH+'/posts/getPostDetailsBySort')
    }

}