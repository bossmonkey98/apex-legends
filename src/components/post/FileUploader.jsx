import React, { useRef } from 'react'
import { AddPhotoAlternate} from '@mui/icons-material';

export const FileUploader = ({func}) => {
    //hide input element
    // create reference for hidden element
    // trigger hidden component when clicked on non hidden button
    const { postData, setPostData } = func
    const hiddenFileInput = useRef()

    const handleChange = async (e) => {
        e.preventDefault()
        const file = e.target.files[0]

        const toBase64 = (file) =>
            new Promise((resolve, reject) => {
                const reader = new FileReader()
                reader.readAsDataURL(file)
                reader.onload = () => resolve(reader.result)
                reader.onerror = (error) => reject(error)
            })
        let tobase64File = await toBase64(file)
        setPostData({ ...postData, pic: tobase64File })
    }

    return (
        <>
            <input type="file"
                style={{ display: 'none' }}
                ref={hiddenFileInput}
                onChange={(e)=>handleChange(e)}
            />
            <AddPhotoAlternate className='ico'
                onClick={() => {
                    hiddenFileInput.current.click()
                }}
            />
        </>
    )
}
