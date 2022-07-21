import { AxiosResponse } from "axios"
import { AxiosClient } from "./axios"

export class FileAPI{
    static namespace = 'file'
    static async uploadImage(file: File) {
        const formData = new FormData()
        formData.append('image', file)

        const res = await AxiosClient.post<FormData, AxiosResponse<string>>(
            `${FileAPI.namespace}/uploadImage`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        )
        return res
    }
}