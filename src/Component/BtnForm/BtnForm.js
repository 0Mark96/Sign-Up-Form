import style from './BtnForm.module.scss'

const BtnForm = ({children,handleSubmit}) => {
    const {btn_form} = style
  return (
    <button type='submit' className={btn_form} onClick={handleSubmit}>{children}</button>
  )
}

export default BtnForm