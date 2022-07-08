import { AxiosClient } from 'apis/rest'

export class UserAPI {
    static namepsace = 'user'

    static async getProfile() {
        return AxiosClient.get(`${UserAPI.namepsace}/getProfile`)
    }
}
