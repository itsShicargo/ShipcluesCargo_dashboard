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

// const PhoneControl = ({ children, ...props }) => {
//     const selected = props.getValue()[0]
//     return (
//         <SingleValue {...props}>
//             {selected && <span>{selected.dialCode}</span>}
//         </SingleValue>
//     )
// }

const validationSchema = Yup.object().shape({
    PersonName: Yup.string().required('Contact Person Name'),
    PersonNumber: Yup.string()
        .min(10)
        .max(10)
        .required('Contact Person Number'),
    // email: Yup.string().email('Invalid email').required('Email Required'),
    nationality: Yup.string().required('Please select your werehouse'),
})

const Identification = ({
    data = {
        PersonName: '',
        PersonNumber: '',
        email: '',
        residentCountry: '',
        nationality: '',
    },
    onNextChange,
    onBackChange,
    currentStepStatus,
    showError,
}) => {
    const onNext = (values, setSubmitting) => {
        onNextChange?.(values, 'personalInformation', setSubmitting)
    }

    const onCheck = (value, field, form) => {
        form.setFieldValue(field.name, value)
    }

    const onBack = () => {
        onBackChange?.()
    }

    return (
        <>
            {showError && (
                <Alert showIcon className="mb-4" type="danger">
                    Kindly ensure all mandatory fields are completed.
                </Alert>
            )}
            <div className="mb-8">

                
                <img
                    className='"mb-2 m-auto'
                    src="data:image/png;base64,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"
                    alt="icon"
                />
                <h3 className="mb-2 mt-2 text-center text-xs">
                    Destination Warehouse
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
                                        label="Contact Person Name"
                                        invalid={
                                            errors.PersonName &&
                                            touched.PersonName
                                        }
                                        errorMessage={errors.PersonName}
                                    >
                                        <Field
                                            type="text"
                                            className="input-box"
                                            autoComplete="off"
                                            value={values.PersonName}
                                            name="PersonName"
                                            placeholder="Contact Person Name"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        className="form-header"
                                        asterisk
                                        label="Contact Person Number"
                                        invalid={
                                            errors.PersonNumber &&
                                            touched.PersonNumber
                                        }
                                        errorMessage={errors.PersonNumber}
                                    >
                                        <Field
                                            type="number"
                                            className="input-box"
                                            value={values.PersonNumber}
                                            autoComplete="off"
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
                                            value={values.email}
                                            autoComplete="off"
                                            name="email"
                                            placeholder="Contact Person Email"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                                {/* <div>
            <Switcher defaultChecked onChange={onSwitcherToggle} />hwee </div> */}
                                <div className="flex mt-44 justify-end gap-2">
                                    <Button
                                        className="next-btn"
                                        type="button"
                                        onClick={onBack}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        loading={isSubmitting}
                                        variant="solid"
                                        type="submit"
                                        className="next-btn"
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

            {/* {showError && 
            <p  variant="solid">Error:::::::::::::::::::::::::</p>
           } */}
        </>
    )
}

export default Identification
