import {
    Input,
    Button,
    Select,
    FormItem,
    FormContainer,
    Alert,
} from 'components/ui'
import { Field, Form, Formik } from 'formik'
import { countryList } from 'constants/countries.constant'
import * as Yup from 'yup'
import './form.css'

// const { SingleValue } = components

// const PhoneSelectOption = ({ innerProps, data, isSelected }) => {
//     return (
//         <div
//             className={`cursor-pointer flex items-center justify-between p-2 ${
//                 isSelected
//                     ? 'bg-gray-100 dark:bg-gray-500'
//                     : 'hover:bg-gray-50 dark:hover:bg-gray-600'
//             }`}
//             {...innerProps}
//         >
//             <div className="flex items-center gap-2">
//                 <span>
//                     ({data.value}) {data.dialCode}
//                 </span>
//             </div>
//         </div>
//     )
// }

const validationSchema = Yup.object().shape({
    nationality: Yup.string().required('Please select your werehouse'),
    personName: Yup.string().required('Contact Person Name'),
    PersonNumber: Yup.string().min(10).max(10).required('Contact Person Number'),
    // email: Yup.string().email('Invalid email').required('Email Required'),
    // werehouse: Yup.string().required('Please select your werehouse'),
})

const PersonalInformation = ({
    data = {
        personName: '',
        PersonNumber: '',
        email: '',

    },

    onNextChange,
    currentStepStatus,
    showError,
}) => {
    const onNext = (values, setSubmitting) => {
        onNextChange?.(values, 'personalInformation', setSubmitting)
    }

    return (
        <>
            {showError && (
                <Alert showIcon className="mb-4" type="danger">
                Kindly ensure all mandatory fields are completed.
                </Alert>
            )}

            <div className="mb-8">
                <img  className='"mb-2 m-auto' src='/img/createshipment/source.png' alt='icon' />
                <h3 className="mb-2 mt-2 text-center text-xs">
                    Source Warehouse
                </h3>
            </div>
            <Formik
                initialValues={data}
                enableReinitialize={true}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true)
                    setTimeout(() => {
                        onNext(values, setSubmitting)
                    }, 1000)
                }}
            >
                {({ values, touched, errors, isSubmitting }) => {
                    return (
                        <Form>
                            <FormContainer>
                                <FormItem
                                    label="Select werehouse"
                                    invalid={
                                        errors.nationality &&
                                        touched.nationality
                                    }
                                    errorMessage={errors.nationality}
                                >
                                    <Field name="nationality">
                                        {({ field, form }) => (
                                            <Select
                                                className="select-box"
                                                placeholder="Select werehouse"
                                                field={field}
                                                form={form}
                                                options={countryList}
                                                value={countryList.filter(
                                                    (country) =>
                                                        country.value ===
                                                        values.nationality
                                                )}
                                                onChange={(country) =>
                                                    form.setFieldValue(
                                                        field.name,
                                                        country.value
                                                    )
                                                }
                                            />
                                        )}
                                    </Field>
                                </FormItem>
                                <div className="md:grid grid-cols-3 gap-4">
                                    <FormItem
                                        className="form-header"
                                        asterisk
                                        label="Contact Person Name "
                                        invalid={
                                            errors.personName &&
                                            touched.personName
                                        }
                                        errorMessage={errors.personName}
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            className="input-box"
                                            value={values.personName}
                                            name="personName"
                                            placeholder="Contact Person Name"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        className="form-header"
                                        asterisk
                                        label="Contact Person Number "
                                        invalid={
                                            errors.PersonNumber &&
                                            touched.PersonNumber
                                        }
                                        errorMessage={errors.PersonNumber}
                                    >
                                        <Field
                                            type="number"
                                            className="input-box"
                                            autoComplete="off"
                                            asterisk
                                            value={values.PersonNumber}
                                            name="PersonNumber"
                                            placeholder="Contact Person Number"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        className="form-header"
                                        label="Contact Person Email "
                                        // invalid={
                                        //     errors.email && touched.email
                                        // }
                                        // errorMessage={errors.email}
                                    >
                                        <Field
                                            type="text"
                                            className="input-box"
                                            autoComplete="off"
                                            value={values.email}
                                            name="email"
                                            placeholder="Contact Person Email"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                                <div className="flex mt-44 justify-end gap-2">
                                    <Button
                                        className="next-btn"
                                        loading={isSubmitting}
                                        variant="solid"
                                        type="submit"
                                    >
                                        {currentStepStatus === 'complete'
                                            ? 'Save'
                                            : 'Next'}
                                    </Button>
                                </div>
                            </FormContainer>
                        </Form>
                    )
                }}
            </Formik>
        </>
    )
}

export default PersonalInformation
