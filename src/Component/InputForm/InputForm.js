import style from './InputForm.module.scss'
import classnames from 'classnames'

const InputForm = ({type='text', name, placeHolder, children, isError, handleChange, value}) => {
    const {input_wrapper, input_form,err_img,err_input_border,notice_err} = style
    
  return (
    <div className={classnames(input_wrapper,{[err_img]:isError})}>
        <input type={type} name={name} value={value} placeholder={placeHolder} className={classnames(input_form,{[err_input_border]:isError})} onChange={handleChange} autoComplete='on'/>
        <p className={notice_err}>{children}</p>
    </div>
         )
}

export default InputForm

