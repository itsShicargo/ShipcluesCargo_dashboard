import {
    Input,
    Button,
    DatePicker,
    Select,
    FormItem,
    FormContainer,
    Upload,
    Switcher,
} from 'components/ui'
import { Field, Form, Formik } from 'formik'
import { useState } from 'react'
// import { components } from 'react-select'
import * as Yup from 'yup'
import Addform from './Addform'

// const { SingleValue } = components

const dimension = [
    { value: 'cm', label: 'cm' },
    { value: 'Inch', label: 'Inch' },
]

const surface = [
    { value: 'surface', label: 'surface' },
    { value: 'Air', label: 'Air' },
]

const validationSchema = Yup.object().shape({
    noofbox: Yup.string().required('No of box is required'),
    weight: Yup.string().required('Weight per unit (in kg) is required'),
    length: Yup.string().required('Length is required'),
    width: Yup.string().required('Width is required'),
    height: Yup.string().required('Height is required'),
    invoicevalue: Yup.string().required('Invoice value is required'),
    invoicenumber: Yup.string().required('Invoice Number is required'),
    mode: Yup.string().required('Mode is required'),
    orderreadydate: Yup.date().required('Order Ready Date is required').nullable(),
})

const AddressInfomation = ({
    data = {
        noofbox: '',
        weight: '',
        dimensions: '',
        length: '',
        width: '',
        height: '',
        invoicedate: '',
        invoicevalue: '',
        invoicenumber: '',
        mode: '',
        orderreadydate: '',
    },
    onNextChange,
    onBackChange,
    currentStepStatus,
    showError
}) => {
    const onNext = (values, setSubmitting) => {
        console.log('valllllllllllll', values)
        onNextChange?.(values, 'AddressInfomation', setSubmitting)
    }

    const onCheck = (value, field, form) => {
        form.setFieldValue(field.name, value)
    }

    const onBack = () => {
        onBackChange?.()
    }

    const onSwitcherToggle = () => {}

    return (
        <>
            <div className="mb-8">
                <img
                    className="mb-2 m-auto"
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
                    console.log('datatatataatat', values)
                    localStorage.setItem('invoicedate', values.invoicedate);
                    localStorage.setItem('orderreadydate', values.orderreadydate);
                    setSubmitting(true);
                    setTimeout(() => {
                        onNext(values, setSubmitting)
                    }, 1000)
                }}
            >
                {({ values, touched, errors, isSubmitting, setFieldValue }) => {
                    console.log("val", values);
                    return (
                        <Form>
                            <FormContainer>
                                <div className="md:grid grid-cols-6 gap-3 border-t-4 border-indigo-500 p-4 rounded-lg">
                                    <FormItem
                                        label="No of box"
                                        invalid={errors.noofbox && touched.noofbox}
                                        errorMessage={errors.noofbox}
                                    >
                                        <Field
                                            type="number"
                                            autoComplete="off"
                                            className="input-box"
                                            name="noofbox"
                                            placeholder="No of box"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        label="Weight"
                                        asterisk
                                        invalid={errors.weight && touched.weight}
                                        errorMessage={errors.weight}
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            className="input-box"
                                            name="weight"
                                            placeholder="Weight"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        label="Dimensions In"
                                        asterisk
                                        invalid={errors.dimensions && touched.dimensions}
                                        errorMessage={errors.dimensions}
                                    >
                                        <Select
                                            placeholder="CM"
                                            options={dimension}
                                            name="dimensions"
                                            onChange={option => setFieldValue('dimensions', option.value)}
                                        />
                                    </FormItem>
                                    <FormItem
                                        label="Length"
                                        asterisk
                                        invalid={errors.length && touched.length}
                                        errorMessage={errors.length}
                                    >
                                        <Field
                                            type="number"
                                            autoComplete="off"
                                            className="input-box"
                                            name="length"
                                            placeholder="length"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        label="Width"
                                        asterisk
                                        invalid={errors.width && touched.width}
                                        errorMessage={errors.width}
                                    >
                                        <Field
                                            type="number"
                                            autoComplete="off"
                                            className="input-box"
                                            name="width"
                                            placeholder="width"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        label="Height"
                                        asterisk
                                        invalid={errors.height && touched.height}
                                        errorMessage={errors.height}
                                    >
                                        <Field
                                            type="number"
                                            autoComplete="off"
                                            className="input-box"
                                            name="height"
                                            placeholder="height"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                                <Addform />
                                <h3 className="mb-2 mt-2">Invoice information</h3>
                                <div className="md:grid grid-cols-4 gap-4 border-t-4 border-indigo-500 p-8 rounded-lg">
                                    <FormItem
                                        label="Invoice Date"
                                        asterisk
                                        invalid={errors.invoicedate && touched.invoicedate}
                                        errorMessage={errors.invoicedate}
                                    >
                                        <Field name="invoicedate">
                                            {({ field }) => (
                                                <DatePicker
                                                    {...field}
                                                    placeholder="Invoice Date"
                                                    onChange={date => setFieldValue('invoicedate', date)}
                                                />
                                            )}
                                        </Field>
                                    </FormItem>
                                    <FormItem
                                        label="Invoice value"
                                        asterisk
                                        invalid={errors.invoicevalue && touched.invoicevalue}
                                        errorMessage={errors.invoicevalue}
                                    >
                                        <Field
                                            type="number"
                                            autoComplete="off"
                                            className="input-box"
                                            name="invoicevalue"
                                            placeholder="Invoice value"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        label="Invoice Number"
                                        asterisk
                                        invalid={errors.invoicenumber && touched.invoicenumber}
                                        errorMessage={errors.invoicenumber}
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            className="input-box"
                                            name="invoicenumber"
                                            value={values.invoicenumber}
                                            placeholder="Invoice Number"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        label="Mode"
                                        asterisk
                                        invalid={errors.mode && touched.mode}
                                        errorMessage={errors.mode}
                                    >
                                        <Select
                                            placeholder="Surface"
                                            options={surface}
                                            name="mode"
                                            onChange={option => setFieldValue('mode', option.value)}
                                        />
                                    </FormItem>
                                </div>
                                <div className="md:grid grid-cols-3 gap-4 p-8">
                                    <FormItem
                                        label="Order Ready Date"
                                        asterisk
                                        invalid={errors.orderreadydate && touched.orderreadydate}
                                        errorMessage={errors.orderreadydate}
                                    >
                                        <Field name="orderreadydate">
                                            {({ field }) => (
                                                <DatePicker
                                                    {...field}
                                                    placeholder="Order Ready Date"
                                                    onChange={date => setFieldValue('orderreadydate', date)}
                                                />
                                            )}
                                        </Field>
                                    </FormItem>
                                    <div>
                                        <Upload draggable />
                                    </div>
                                    <div className="flex items-center justify-end gap-2">
                                        <Switcher
                                            defaultChecked
                                            onChange={onSwitcherToggle}
                                        />
                                        <p className="text-end">Is To-Pay</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-5">
                                    <Switcher
                                        defaultChecked
                                        onChange={onSwitcherToggle}
                                    />
                                    <p className="text-end">COD</p>
                                </div>
                            </FormContainer>
                            <div className="flex justify-end gap-2">
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
                                    {currentStepStatus === 'complete' ? 'Save' : 'Next'}
                                </Button>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
            {/* {showError && <p variant="solid">Error:::::::::::::::::::::::::</p>} */}
        </>
    )
}

export default AddressInfomation