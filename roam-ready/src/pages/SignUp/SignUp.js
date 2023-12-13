import './signUp.css'
import { Link } from 'react-router-dom';
import SignUpPlane from '../../assets/images/signupPlane.jpg'
import InputField from './../../components/InputField.js'
import SmallButton from './../../components/Buttons/SmallButton.js'

function SignUp () {    
    return (
        <div className = "signUpSection">
            <div className = "paddingGlobal">
                <div className = "largeContainer">
                    <div className = "paddingSection-M">
                        <div className = "signUpContent">
                            <img src = {SignUpPlane} className = "SignUpPlaneImg" loading = "lazy" alt = "Plane"/>
                            <div className = "signUp">
                                <div className = "textSizeS textAlign-Left">Welcome to RoamReady!</div>
                                <div className = "textSizeM textAlign-Left">Sign Up</div>
                                <InputField inputHeader = "Username*" placeHolderText = "Username"/>
                                <InputField inputHeader = "Email*" placeHolderText = "Email"/>
                                <InputField inputHeader = "Password*" placeHolderText = "Password"/>
                                <InputField inputHeader = " Confirm Password*" placeHolderText = "Confirm Password"/>
                                <div className = "createAccountButton">
                                    <SmallButton type = "submit" buttonText = "Create Account" backgroundColor = 'var(--bg-200)'/>
                                </div>  
                                <div>
                                    <div className = "paddingXS"></div>
                                    <div className = "textSizeS textAlign-Left">
                                        Are you a member?&nbsp;
                                        <Link to = "/Login" className = "loginLink">
                                            <strong>Log in now</strong>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;