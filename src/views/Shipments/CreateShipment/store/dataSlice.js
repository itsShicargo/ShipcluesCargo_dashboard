import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetAccountFormData } from 'services/AccountServices'

export const getForm = createAsyncThunk(
    'accountDetailForm/data/getForm',
    async (data) => {
        const response = await apiGetAccountFormData(data)
        return response.data
    }
)

const dataSlice = createSlice({
    name: 'accountDetailForm/data',
    initialState: {
        formData: {
            personalInformation: {
                residentCountry: '',
                personName: '',
                PersonNumber: '',
                email: '',
                nationality:'',
            },
            identification: {
                PersonName: '',
                PersonNumber: '',
                email: '',
                nationality: '',
            },
            
            addressInformation: {
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
            // financialInformation: {
            //     taxResident: '',
            //     tin: '',
            //     noTin: false,
            //     noTinReason: '',
            //     occupation: '',
            //     annualIncome: '',
            //     sourceOfWealth: '',
            //     companyInformation: {
            //         companyName: '',
            //         contactNumber: '',
            //         country: '',
            //         addressLine1: '',
            //         addressLine2: '',
            //         city: '',
            //         state: '',

            //     },
            // },
        },
        stepStatus: {
            0: { status: 'pending' },
            1: { status: 'pending' },
            2: { status: 'pending' },
            3: { status: 'pending' },
            4: { status: 'pending' },
        },
    },
    reducers: {
        setFormData: (state, action) => {
            state.formData = { ...state.formData, ...action.payload }
        },
        setStepStatus: (state, action) => {
            state.stepStatus = { ...state.stepStatus, ...action.payload }
        },
    },
    extraReducers: {
        [getForm.fulfilled]: (state, action) => {
            state.formData = action.payload.formData
            state.stepStatus = action.payload.formStatus
        },
    },
})

export const { setFormData, setStepStatus } = dataSlice.actions

export default dataSlice.reducer
