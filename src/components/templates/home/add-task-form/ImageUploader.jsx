import { useState } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import Loading from '../../../molecules/Loading'

const ImageUploader = ({ setFieldValue, setImagePreview, imagePreview, fileInputRef }) => {
    const [isImageLoading, setIsImageLoading] = useState(false)

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setIsImageLoading(true)
            const reader = new globalThis.FileReader()
            reader.onloadend = () => {
                setFieldValue('image', file)
                setImagePreview(reader.result)
                setIsImageLoading(false)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()
        const file = e.dataTransfer.files[0]
        if (file) {
            setIsImageLoading(true)
            const reader = new globalThis.FileReader()
            reader.onloadend = () => {
                setFieldValue('image', file)
                setImagePreview(reader.result)
                setIsImageLoading(false)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleDragOver = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }

    const deleteImg = () => {
        setImagePreview('')
        setFieldValue('image', '')
        if (fileInputRef.current) {
            fileInputRef.current.value = ''
        }
    }

    return (
        <div>
            <div
                style={{
                    border: '2px dashed #ccc',
                    padding: '20px',
                    textAlign: 'center',
                    position: 'relative'
                }}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                <input
                    type='file'
                    accept='image/*'
                    style={{ display: 'none' }}
                    id='fileInput'
                    ref={fileInputRef}
                    onChange={(e) => {
                        handleImageChange(e)
                    }}
                />
                <label htmlFor='fileInput' className='img-uploader-box'>
                    {isImageLoading
                        ? <Loading />
                        : imagePreview
                            ? (
                                <div>
                                    <img
                                        src={imagePreview}
                                        alt='Preview'
                                    />
                                    <MdDeleteForever onClick={deleteImg} className='delete-icon' />
                                </div>
                            )
                            : (
                                <p style={{ margin: '0', color: 'black' }}>
                                    Arrastra la imagen aqui o haz click para cargarla desde algun directorio
                                </p>
                            )}
                </label>
            </div>
        </div>
    )
}

export default ImageUploader