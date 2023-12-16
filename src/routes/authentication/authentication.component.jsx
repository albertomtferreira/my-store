import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import {AuthenticationContainer} from './authentication.styles.jsx';


const Authentication = () =>{

  return[
    <AuthenticationContainer key='AuthenticationContainer' >
      <SignInForm/>
      <SignUpForm/>
    </AuthenticationContainer>
  ]
}

export default Authentication;