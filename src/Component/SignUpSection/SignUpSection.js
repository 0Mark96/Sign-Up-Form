import style from './SignUpSection.module.scss'
import TrialInfo from '../TrialInfo/TrialInfo'
import SignUpForm from '../SignUpForm/SignUpForm'

const SignUpSection = () => {
    const {signUp_section} = style
  return (
    <section className={signUp_section}>
      <TrialInfo />
      <SignUpForm />
    </section>
  )
}

export default SignUpSection