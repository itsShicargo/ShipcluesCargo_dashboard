import React from "react";
import { Input, Button, FormItem, FormContainer, Alert } from "components/ui";
import { PasswordInput, ActionLink } from "components/shared";
import useTimeOutMessage from "utils/hooks/useTimeOutMessage";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import useAuth from "utils/hooks/useAuth";
import Select from "react-select";

const dimension = [
  { value: "1 - 10 orders", label: "1 - 10 orders" },
  { value: "11 - 100 orders", label: "11 - 100 orders" },
  { value: "101 - 1000 orders", label: "101 - 1000 orders" },
  { value: "1001 - 500 orders", label: "1001 - 500 orders" },
  { value: "More than 5000 orders", label: "More than 5000 orders" },
];



// validation error massage here ...
const validationSchema = Yup.object().shape({
  firstName: Yup.string().min(2).max(25).required("Please enter firstname"),
  lastName: Yup.string().min(2).max(25).required("Please enter  lastname"),
  companyName: Yup.string()
    .min(2)
    .max(25)
    .required("Please enter company name"),
  brandName: Yup.string().min(2).max(25).required("Please enter  brand name"),
  // monthlyOrder: Yup.string().required('Please enter monthly order'),
  email: Yup.string().email().required("Please enter  email"),
  password: Yup.string().min(6).required("Please enter  password"),
  phone: Yup.string().min(10).required("Please enter  phonenumber"),
});

const SignUpForm = (props) => {
  const { disableSubmit = false, className, signInUrl = "/sign-in" } = props;

  // const [monthlyorderdata, setMonthlyorderdata] = useState(options[0].value)

  const { signUp } = useAuth();

  const [message, setMessage] = useTimeOutMessage();

  const onSignUp = async (values, setSubmitting) => {
    const {
      firstName,
      lastName,
      companyName,
      brandName,
      monthlyOrder,
      password,
      email,
      phone,
    } = values;

    console.log("vallll", values);
    setSubmitting(true);
    const result = await signUp({
      firstName,
      lastName,
      companyName,
      brandName,
      monthlyOrder,
      password,
      email,
      phone,
    });

    if (result.status === "failed") {
      setMessage(result.message);
    }

    setSubmitting(false);
  };

  return (
    <div className={className}>
      {message && (
        <Alert className="mb-4" type="danger" showIcon>
          {message}
        </Alert>
      )}
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          companyName: "",
          brandName: "",
          monthlyOrder: "",
          email: "",
          password: "",

          // countryCode:"",
          // phoneNum: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          if (!disableSubmit) {
            onSignUp(values, setSubmitting);
          } else {
            setSubmitting(false);
          }
        }}
      >
        {({ values, touched, errors, isSubmitting }) => (
          <Form>
            <FormContainer>
              <div className="flex gap-5 flex-col md:flex-row">
                <FormItem
                  label="First Name"
                  invalid={errors.firstName && touched.firstName}
                  errorMessage={errors.firstName}
                >
                  <Field
                    type="text"
                    autoComplete="off"
                    name="firstName"
                    placeholder="First Name"
                    component={Input}
                  />
                </FormItem>
                <FormItem
                  label="Last Name"
                  invalid={errors.lastName && touched.lastName}
                  errorMessage={errors.lastName}
                >
                  <Field
                    type="text"
                    autoComplete="off"
                    name="lastName"
                    placeholder="last Name"
                    component={Input}
                  />
                </FormItem>
              </div>

              {/*Comapnay_Name  */}
              <div className="flex gap-5 flex-col md:flex-row">
                <FormItem
                  label="Company Name"
                  invalid={errors.companyName && touched.companyName}
                  errorMessage={errors.companyName}
                >
                  <Field
                    type="text"
                    autoComplete="off"
                    name="companyName"
                    placeholder="Enter company name "
                    component={Input}
                  />
                </FormItem>
                {/* Brand_Name */}

                <FormItem
                  label="Brand Name"
                  invalid={errors.brandName && touched.brandName}
                  errorMessage={errors.brandName}
                >
                  <Field
                    type="text"
                    autoComplete="off"
                    name="brandName"
                    placeholder="Enter brand name "
                    component={Input}
                  />
                </FormItem>
              </div>

              {/* Monthly_Order */}

              <FormItem
                label="Monthly Order"
                invalid={errors.dimensions && touched.dimensions}
                errorMessage={errors.dimensions}
              >
                <Select
                  placeholder="Please Select"
                  options={dimension}
                ></Select>
              </FormItem>

              {/* email */}

              <FormItem
                label="Email"
                invalid={errors.email && touched.email}
                errorMessage={errors.email}
              >
                <Field
                  type="email"
                  autoComplete="off"
                  name="email"
                  placeholder="Email"
                  component={Input}
                />
              </FormItem>
              {/* Password */}
              <FormItem
                label="Password"
                invalid={errors.password && touched.password}
                errorMessage={errors.password}
              >
                <Field
                  autoComplete="off"
                  name="password"
                  placeholder="Password"
                  component={PasswordInput}
                />
              </FormItem>
              {/* Phone number */}
              <FormItem
                label="Phone"
                invalid={errors.email && touched.email}
                errorMessage={errors.email}
              >
                <Field
                  type="number"
                  autoComplete="off"
                  name="phone"
                  placeholder="123 - 456 - 789 "
                  component={Input}
                />
              </FormItem>

              <Button
                block
                loading={isSubmitting}
                variant="solid"
                type="submit"
              >
                {isSubmitting ? "Creating Account..." : "Sign Up"}
              </Button>
              <div className="mt-4 text-center">
                <span>Already have an account? </span>
                <ActionLink to={signInUrl}>Sign in</ActionLink>
              </div>
            </FormContainer>
          </Form>
        )}
      </Formik>
    </div>
    
  );
};

export default SignUpForm;
