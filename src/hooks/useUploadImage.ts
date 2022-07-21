import { FileAPI } from "apis/rest/file.api"
import { ChangeEvent, useState } from "react"


export const useUploadImage = (setImageUrl: (url:string)=>void) => {
    const [isLoading,setIsLoading] = useState(false)

    const onUpload = async (e: ChangeEvent<HTMLInputElement>) => {
        try {
            if (e.target && e.target.files) {
                setIsLoading(true)
                const res = await FileAPI.uploadImage(e.target.files[0])
                setImageUrl(res.data)
            }
        }
        catch (e) {
            console.error(e)
        }
        finally {
            setIsLoading(false)
        }
    }

    return {onUpload,isLoading}
}