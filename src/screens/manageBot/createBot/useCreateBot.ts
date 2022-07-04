import { ChangeEvent, useState } from 'react'
import { CreateBotDto } from '../dtos'

export const useCreateBot = () => {
    const [name, setName] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [imageFile, setImageFile] = useState<File | undefined>()
    const [previewImage, setPreviewImage] = useState<string | undefined>('')

    const inputAvatar = async (e: ChangeEvent<HTMLInputElement>) => {
        try {
            if (!e.target.files) return
            const url = URL.createObjectURL(e.target.files[0])
            setImageFile(e.target.files[0])
            setPreviewImage(url)
        } catch (e) {
            console.log(e)
        }
    }



    const clearImages = () => {
        setImageFile(undefined)
        setPreviewImage(undefined)
    }
    const clearAll = () => {
        clearImages()
        setName('')
        setDescription('')
    }

    const getContent = () => {
        const content: CreateBotDto = {
            name,
            description,
            // avatarUrl: previewImage,
        }
        clearAll()
        return content
    }

    return {
        clearAll,
        getContent,
        name,
        setName,
        inputAvatar,
        description,
        setDescription,
        previewImage,
        setPreviewImage,
    }
}