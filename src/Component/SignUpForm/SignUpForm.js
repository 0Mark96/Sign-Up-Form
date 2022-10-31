// ----------- USE REDUCER HOOK-------

import { useReducer} from "react"
import style from './SignUpForm.module.scss'
import InputForm from "../InputForm/InputForm"
import BtnForm from "../BtnForm/BtnForm"
import {validateForm} from './validationForm'


const SignUpForm = () => {
    const {form_container,agreement} = style
    
    const initialState = {
        firstName : '',
        lastName:'',
        email:'',
        password:'',
        formErrors:{}
    }
    
    const reducer = (state,action) => {
        switch(action.type) {
            case 'INPUT CHANGE':
                return { ...state,[action.name]:action.value }
            case 'VALIDATE FORM': 
                return validateForm(state);
            case 'REMOVE ERROR' : 
                return {...state,formErrors:{...state.formErrors,[action.name + '_err']:''}}
            default: 
                return state;
        }
    }

    const [inputState, dispatch] = useReducer(reducer,initialState)

    // On input change, add value in state and remove sentences error
    const handleChange = (e)=>{
        const {name,value} = e.target
        dispatch({type:'INPUT CHANGE', name:name, value:value})
        dispatch({type:'REMOVE ERROR', name:name})
    }
    // On submit validate form
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch({type:'VALIDATE FORM'})
    }
    //sentences error
    const {firstName_err,lastName_err,email_err,password_err} = inputState.formErrors

  return (
    <form className={form_container}>
        <InputForm type="text" placeHolder='First Name' name='firstName' isError={firstName_err} handleChange={handleChange} value={inputState.firstName}>{firstName_err}</InputForm>
        <InputForm type="text" placeHolder='Last Name' name='lastName' isError={lastName_err} handleChange={handleChange} value={inputState.lastName}>{lastName_err}</InputForm>
        <InputForm type="email" placeHolder='Email Address' name='email' isError={email_err} handleChange={handleChange} value={inputState.email}>{email_err}</InputForm>
        <InputForm type="password" placeHolder='Password' name='password' isError={password_err} handleChange={handleChange} value={inputState.password}>{password_err}</InputForm>
        <BtnForm handleSubmit={handleSubmit}>CLAIM YOUR FREE TRIAL</BtnForm>
        <p className={agreement}>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
    </form>
  )
}

export default SignUpForm






// ----------------------------------------USE STATE HOOK--------------------------------------------


// import InputForm from "../InputForm/InputForm"
// import BtnForm from "../BtnForm/BtnForm"
// import style from './SignUpForm.module.scss'
// import { useState } from "react"

// const SignUpForm = () => {
//     const {form_container,agreement} = style
    
//     const validateForm = (state) => {
//         const {firstName,lastName,email,password} = state
//         const errors = {}
//         const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ ;
        
//         if(!firstName){
//            errors.firstName= 'First Name cannot be empty'
//         }
//         if(!lastName){
//            errors.lastName = 'Last Name cannot be empty'
//         }
//         if(!email){
//          errors.email = 'Email cannot be empty'
//         }else if (!regex.test(email)){
//             errors.email = 'Looks like this is not an email'
//          }
//         if(!password){
//          errors.password = 'Password cannot be empty'
//         }
//         return errors
//        }

//     const [inputFields, setInputFields] = useState({
//         firstName : '',
//         lastName:'',
//         email:'',
//         password:'',
//     })

//     const [formErrors, setFormErrors] = useState({}) 

//     const handleChange = (e)=>{
//         const {name,value} = e.target
//         setInputFields((prev)=>({
//                                   ...prev,
//                                   [name]:value,
//                                 })
//                        )
//         setFormErrors((prev)=>({
//             ...prev,
//             [name]:''
//         }))
//     }

//     const handleSubmit = (e)=>{
//         e.preventDefault()
//         setFormErrors(validateForm(inputFields))
//     }



//   return (
//     <form className={form_container}>
//         <InputForm type="text" placeHolder='First Name' name='firstName' isError={formErrors.firstName} handleChange={handleChange}>{formErrors.firstName}</InputForm>
//         <InputForm type="text" placeHolder='Last Name' name='lastName' isError={formErrors.lastName} handleChange={handleChange}>{formErrors.lastName}</InputForm>
//         <InputForm type="email" placeHolder='Email Address' name='email' isError={formErrors.email} handleChange={handleChange}>{formErrors.email}</InputForm>
//         <InputForm type="password" placeHolder='Password' name='password' isError={formErrors.password} handleChange={handleChange}>{formErrors.password}</InputForm>
//         <BtnForm handleSubmit={handleSubmit}>CLAIM YOUR FREE TRIAL</BtnForm>
//         <p className={agreement}>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
//     </form>
//   )
// }

// export default SignUpForm


