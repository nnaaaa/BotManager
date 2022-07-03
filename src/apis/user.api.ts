import { AxiosClient } from "apis"

export class UserAPI{
    static namepsace = 'user'

    static async getProfile() {
        return AxiosClient.get(
            `${UserAPI.namepsace}/getProfile`,
        )
    }
}

