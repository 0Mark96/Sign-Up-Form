// function to validate signup form

export const validateForm = (state) => {
    const {firstName,lastName,email,password} = state
    const errors = {}
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ ;
    
    if(!firstName){
       errors.firstName_err= 'First Name cannot be empty'
    }
    if(!lastName){
       errors.lastName_err = 'Last Name cannot be empty'
    }
    if(!email){
     errors.email_err = 'Email cannot be empty'
    }else if (!regex.test(email)){
        errors.email_err = 'Looks like this is not an email'
     }
    if(!password){
     errors.password_err = 'Password cannot be empty'
    }
    return {...state, formErrors:errors}
   }