import { BASE_PATH } from "../base";
import { BaseApi } from "./base-api";

export class StudentApi extends BaseApi{
    public async getStudentDetails(id:number){
        return await this.axiosClient.get(BASE_PATH+'/students/getByIdStudent?id='+id);
    }
}