import PropTypes from 'prop-types'
import Label from '../../../atoms/formsParts/Label'
import { ErrorMessage, Field } from 'formik'

export const ForgotPasswordFormMap = ({ formFields, errors, touched }) => {
    return (
        <div className='form-columns'>
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
                    </div>
                    {errors[data.id] && touched[data.id] && (
                        <ErrorMessage className='form-message error-message' component="div" name={data.id} />
                    )}
                </div>
            ))}
        </div>
    )
}

ForgotPasswordFormMap.propTypes = {
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