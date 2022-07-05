import { ChangeEvent, useState } from 'react'
import { CreateBotDto, UpdateBotDto } from './dtos'

export const useManageBot = (defaultInfo: Omit<UpdateBotDto, 'botId'>) => {
    const [name, setName] = useState<string>(defaultInfo.name || '')
    const [description, setDescription] = useState<string>(defaultInfo.description || '')
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
