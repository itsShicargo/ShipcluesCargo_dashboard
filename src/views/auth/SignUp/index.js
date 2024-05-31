import React from 'react'
import SignUpForm from './SignUpForm'
// import Logo from 'components/template/Logo'

const SignUp = () => {
    return (
        <>
            <div className="mb-4">
                
                  <div className='flex justify-center items-center mb-4'>
                    <img width={{width:"50%"}} src="/img/logo/logo-light-mode.svg" alt='logo' />
                  </div>

                {/* <p>Get started with a free account</p> */}
            </div>
            <SignUpForm disableSubmit={false} />
        </>
    )
}

export default SignUp
