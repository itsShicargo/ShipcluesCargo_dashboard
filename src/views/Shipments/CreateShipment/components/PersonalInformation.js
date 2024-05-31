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
                <img
                    className='"mb-2 m-auto'
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAADrElEQVR4nO2by2tUMRSHP0s7QsGFpUrRhUtdCbpTW9fWByK4tUv/ASso+ALtC7t335Ub0bWoC2sR0aUbd9LptBRfSLX4AK+LnIvX29w7SSa5kxnmB+Fc8jjn5ExykpxkoIceXHESqANJ5KkOjIcwQCd0Pk3LIQyQMo8dpXr2VahIlOgDasAcsAqsA3eBAYO2K0KrGMKLGblLluWgpmshZjUMZw0MMI6aW1UY4HlG7qJl+TJwoqwjDal4FBiV70/AYQMjkBEUG4z06st9b5PvIeA1cA/o965aZJhBP6Q25fs+5c7SdQRkfU/R0G+gpmPNgb+xXjWUERrAR2Be8g6ipkICTPgQlIPO9xSlGQf+XqbmeWHynuJR4Coo63uKkPqkhgN/ax+gwwNU5/cBhxyUMEGZDqlPCuZkmxkgAV7J9wHPsheE6pa1/PK2sKW1J5h4+DWhw55l3xQ6AewpqNNAdf6WZ9lWuIH6NYqU6Jp9QBG+CB1qSZ1IYWOAnSEVaRd6BjCo0zOA0CIDrAodbV0dbxgTuu6D2QjKm64VlOvOEp2QjGOF26XBj4Ly7Fmi3Z2yTcaxwu/SYNCgbqz7gjwSIDGNCXbtXsDUAJ+FmqwEscYKU2RHaN12BJgY4CJNgpAekZ1qf5qU51FH6WqER8LsrGkD4vUF/+kVYgR0FGJ0gqFjhU64LoJvW7RxnQKVxgpjnAIXhB5DhcR0Kd3qlgVrjRCjAVJUEiuM0QBRxArzOCKCX1q0cfUBJmeLFWCawBcmWeyXRu9CC6oA0TvBKDGAstpv/jmgZuiIEWCDb9JwR2hBgeE0BaBLp0HPABZ1bWICOiyx9XzerjwnPETNnXOG9fM+QOcT2pHXsg/oqrCYzfufVn3AC7b+Ou3Kc8I1YTRlWL/rlsEPQkcM66e3MjHeGBVd8pTiOMpyb1GHkHnUo6oqor++0ybqwGX1BLCG+lXT42i7O+EjzdkYAOByjkHZC6+Ykb4+s7487QceE6+Ds4FzHwZbaRwREiAxPdrqGoP50ThGJBDmDxOngKfAV0lPUP8vqgqVyE/jdfk1fopij3vHtxIamMofk7yVPANTlL0K+QVcQj2sHAYmUZGkqpY2G/nTrgYoi9xOaurnl8+QyUR+K1HlQmwI892asl1StuFToA/5IZygbnuZWlp3h99W+T4N8Eao7r5uIlcnBNotnzOoYfYTuIJ6Ab4XuCp5CWqJ6lb5QPkyZHO13qnyATgNPEM5nA3UpiS45V3l/wXPvTfQZzf6mwAAAABJRU5ErkJggg=="
                    alt="icon"
                />
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
                                <div className="flex justify-end gap-2">
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
