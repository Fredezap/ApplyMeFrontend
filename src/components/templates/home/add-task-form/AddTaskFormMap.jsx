import PropTypes from 'prop-types'
import Label from '../../../atoms/formsParts/Label'
import { ErrorMessage, Field } from 'formik'
import ImageUploader from './ImageUploader'

export const AddTaskFormMap = ({
    formFields,
    errors,
    touched,
    setFieldValue,
    imagePreview,
    setImagePreview,
    fileInputRef
}) => {
    return (
        <div>
            {formFields.map((data, index) => (
                <div className='form-group' key={index}>
                    <Label>{data.label}</Label>
                    <div>
                        <Field
                            className='input'
                            id={data.id}
                            name={data.id}
                            autoComplete={data.label}
                            placeholder={data.placeholder}
                            type={data.type}
                        />
                        {data.id === 'image' &&
                            (<ImageUploader
                                setFieldValue={setFieldValue}
                                imagePreview={imagePreview}
                                setImagePreview={setImagePreview}
                                fileInputRef={fileInputRef}
                            />)
                        }
                    </div>
                    {errors[data.id] && touched[data.id] && (
                        <ErrorMessage className='form-message error-message' component="div" name={data.id} />
                    )}
                </div>
            ))}
        </div>
    )
}

AddTaskFormMap.propTypes = {
    formFields: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            placeholder: PropTypes.string.isRequired
        })
    ).isRequired,
    errors: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired
}