import React from 'react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import {
    Input,
    Button,
    Checkbox,
    FormItem,
    FormContainer,
    Alert,
} from 'components/ui'
import { PasswordInput, ActionLink } from 'components/shared'
import axios from 'axios'

const validationSchema = Yup.object().shape({
    userName: Yup.string().required('Please enter your user name'),
    password: Yup.string().required('Please enter your password'),
    rememberMe: Yup.bool(),
})

const SignInForm = (props) => {
    const [message, setMessage] = React.useState('')

    const onSignIn = async (values, setSubmitting) => {
        try {
            const LOGIN_API_URL = 'https://65.0.103.217:8000/sellers/login/'
            const resp = await axios.post(LOGIN_API_URL, values)
            if (resp.data) {
                // Handle successful login
                console.log('Login successful:', resp.data) // Log the response data
                setMessage('') // Clear any previous error messages
            }
        } catch (error) {
            // Handle login failure
            setMessage(error.response.data.message || error.toString())
        }
        setSubmitting(false)
    }



    return (
        <>
            <div className={props.className}>
                {message && (
                    <Alert className="mb-4" type="danger" showIcon>
                        {message}
                    </Alert>
                )}
                <Formik
                    initialValues={{
                        userName: '',
                        password: '',
                        rememberMe: false,
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        onSignIn(values, setSubmitting)
                    }}
                >
                    {({ touched, errors, isSubmitting }) => (
                        <Form>
                            <FormContainer>
                                <FormItem
                                    label="User Name"
                                    invalid={
                                        errors.userName && touched.userName
                                    }
                                    errorMessage={errors.userName}
                                >
                                    <Field
                                        type="text"
                                        autoComplete="off"
                                        name="userName"
                                        placeholder="User Name"
                                        component={Input}
                                    />
                                </FormItem>
                                <FormItem
                                    label="Password"
                                    invalid={
                                        errors.password && touched.password
                                    }
                                    errorMessage={errors.password}
                                >
                                    <Field
                                        autoComplete="off"
                                        name="password"
                                        placeholder="Password"
                                        component={PasswordInput}
                                    />
                                </FormItem>
                                <div className="flex justify-between mb-6">
                                    <Field
                                        className="mb-0"
                                        name="rememberMe"
                                        component={Checkbox}
                                        children="Remember Me"
                                    />
                                    <ActionLink to="/forgot-password">
                                        Forgot Password?
                                    </ActionLink>
                                </div>
                                <Button
                                    block
                                    loading={isSubmitting}
                                    variant="solid"
                                    type="submit"
                                >
                                    {isSubmitting ? 'Signing in...' : 'Sign In'}
                                </Button>
                                <div className="mt-4 text-center">
                                    <span>Don't have an account yet? </span>
                                    <ActionLink to="/sign-up">
                                        Sign up
                                    </ActionLink>
                                </div>
                            </FormContainer>
                        </Form>
                    )}
                </Formik>
            </div>
            <div className="fixed bottom-0  left-64  w-full py-4">
                <div className="container mx-auto flex justify-center items-center">
                    <span className="mr-2">
                        Copyright &copy; 2024, ShipClues.
                    </span>
                    <span>
                        Made With <i className="fa fa-heart pulse"></i> in
                        India.
                    </span>
                </div>
            </div>

            {/* <div className="fixed bottom-0 left-0 w-full py-4 md:left-64 md:py-0 md:bottom-auto md:relative">
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-center md:items-start">
                    <span className="mr-2 mb-2 md:mb-0">
                        Copyright &copy; 2024, ShipClues.
                    </span>
                    <span className="md:ml-2">
                        Made With <i className="fa fa-heart pulse"></i> in
                        India.
                    </span>
                </div>
            </div> */}
        </>

        
    )
}

export default SignInForm
