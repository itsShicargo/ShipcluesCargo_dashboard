import {
    Input,
    Select,
    FormItem,
    FormContainer,
} from 'components/ui'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

// const { SingleValue } = components

const dimension = [
    { value: 'cm', label: 'cm' },
    { value: 'Inch', label: 'Inch' },
]

const validationSchema = Yup.object().shape({
    personName: Yup.string().required('Contact Person Name'),
    PersonNumber: Yup.string().required('Contact Person Number'),
    email: Yup.string().email('Invalid email').required('Email Required'),
    nationality: Yup.string().required('Please select your werehouse'),
    noofbox: Yup.string().required('No of box'),
    weight: Yup.string().required('weight per unit (in kg.'),
    dimensions: Yup.string().required('Dimensions'),
    length: Yup.string().required('Length *'),
    width: Yup.string().required('width'),
    height: Yup.string().required('height'),
    invoicedate: Yup.string().required('Invoice Date '),
    invoicevalue: Yup.string().required('Invoice value '),
    invoiceNumber: Yup.string().required('Invoice Number'),
    mode: Yup.string().required('Mode'),
    orderreadydate: Yup.string().required('Order Ready Date'),
})

const Abc = ({

    

    data = {
        personName: '',
        PersonNumber: '',
        email: '',
        noofbox: '',
        weight: '',
        dimensions: '',
        length: '',
        width: '',
        height: '',
        invoicedate: '',
        invoicevalue: '',
        invoiceNumber: '',
        mode: '',
        orderreadydate: '',
    },
    onNextChange,
    onBackChange,
    currentStepStatus,
}) => {
    const onNext = (values, setSubmitting) => {
        onNextChange?.(values, 'Abc', setSubmitting)
    }

    // const onCheck = (value, field, form) => {
    //     form.setFieldValue(field.name, value)
    // }

    // const onBack = () => {
    //     onBackChange?.()
    // }

    

    return (
        <>
            <div className="mb-8">
                

               

       

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
                                <div className="md:grid grid-cols-6 gap-3  pl-4 ">
                                    <FormItem
                                        label="No of box"
                                        invalid={
                                            errors.noofbox && touched.noofbox
                                        }
                                        errorMessage={errors.noofbox}
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                             className="input-box"
                                            name="noofbox"
                                            placeholder="No of box"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        label="Weight*"
                                        invalid={
                                            errors.weight && touched.weight
                                        }
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
                                        label="Dimensions In *"
                                        invalid={
                                            errors.dimensions &&
                                            touched.dimensions
                                        }
                                        errorMessage={errors.dimensions}
                                    >
                                        <Select
                                       
                                            placeholder="CM"
                                            options={dimension}
                                        ></Select>
                                    </FormItem>
                                    <FormItem
                                        label="Length *"
                                        invalid={
                                            errors.length && touched.length
                                        }
                                        errorMessage={errors.length}
                                    >
                                        <Field
                                            type="numbert"
                                            autoComplete="off"
                                             className="input-box"
                                            name="length"
                                            placeholder="length"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        label="Width *"
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
                                        label="Height *"
                                        invalid={
                                            errors.height && touched.height
                                        }
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

                                {/* invoice filed */}
                               

                              

                                {/* Order Ready Date  */}
                                

                                
                            </FormContainer>
                            

                          
                        </Form>
                    )
                }}
            </Formik>
        </>
    )
}



export default Abc
