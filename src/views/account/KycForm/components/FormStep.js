import React from 'react'
import { useDispatch } from 'react-redux'
import { Menu } from 'components/ui'
import { HiCheckCircle, HiLockClosed } from 'react-icons/hi'
import useThemeClass from 'utils/hooks/useThemeClass'
import { setCurrentStep } from '../store/stateSlice'
import { setStepStatus } from '../store/dataSlice'

const steps = [
    { label: 'Pickup location', value: 0 },
    { label: 'Destination', value: 1 },
    { label: 'Package Details', value: 2 },
    { label: 'Carrier Partner', value: 3 },
    { label: 'Other Details', value: 4 },
    { label: 'Submit', value: 4 },
    // New steps
    // { label: 'Payment', value: 6 },
    // { label: 'Confirmation', value: 7 },
]


const FormStep = ({ currentStep, currentStepStatus, stepStatus  , setShowError }) => {
    const { textTheme } = useThemeClass()
    const dispatch = useDispatch()

    const onStepChange = (step , setShowError) => {
        console.log("cureentShetp:::::" , stepStatus[step].status);
        const selectedStepStatus = stepStatus[step].status

        if (
            selectedStepStatus === 'complete' ||
            selectedStepStatus === 'current'
        ) {
            dispatch(setCurrentStep(step))
            return
        }

        if (step !== currentStep && step < currentStep) {
            if (currentStepStatus === 'pending') {
                dispatch(setStepStatus('complete'))
            }
            dispatch(setCurrentStep(step))
        }

        if(selectedStepStatus == "pending"){
            setShowError(true)
        }
    }

    return (
        <Menu variant="transparent" className="px-16">
            {steps.map((step) => (
                <Menu.MenuItem
                    key={step.value}
                    eventKey={step.value.toString()}
                    className={`mb-2`}
                    onClick={() => onStepChange(step.value , setShowError)}
                    isActive={currentStep === step.value}
                >
                    <span className="text-2xl ltr:mr-2 rtl:ml-2">
                        {stepStatus[step.value].status === 'complete' && (
                            <HiCheckCircle className={textTheme} />
                        )}
                        {stepStatus[step.value].status === 'current' && (
                            <HiCheckCircle className="text-gray-400" />
                        )}
                        {stepStatus[step.value].status === 'pending' &&
                            currentStep === step.value && (
                                <HiCheckCircle className="text-gray-400" />
                            )}
                        {stepStatus[step.value].status === 'pending' &&
                            currentStep !== step.value && (
                                <HiLockClosed className="text-gray-400" />
                            )}
                        {stepStatus[step.value].status === 'invalid' && (
                            <HiCheckCircle className="text-gray-400" />
                        )}
                    </span>
                    <span>{step.label}</span>
                </Menu.MenuItem>
            ))}
        </Menu>
    )
}

export default FormStep
