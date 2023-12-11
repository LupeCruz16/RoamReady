import './login.css'
import { Link } from 'react-router-dom';
import LoginPlane from '../../assets/images/loginPlane.jpg'
import InputField from './../../components/InputField.js'
import SmallButton from './../../components/Buttons/SmallButton.js'

function Login () {
    return (
        <div className = "loginSection">
            <div className = "paddingGlobal">
                <div className = "largeContainer">
                    <div className = "paddingSection-M">
                        <div className = "loginContent">
                            <img src = {LoginPlane} className = "loginPlaneImg" loading = "lazy" alt = "Plane"/>
                            <div className = "login">
                                <div className = "textSizeS textAlign-Left">Welcome to RoamReady!</div>
                                <div className = "textSizeM textAlign-Left">Log In</div>
                                <InputField inputHeader = "Email" placeHolderText = "Email or Username"/>
                                <InputField inputHeader = "Password" placeHolderText = "Password"/>
                                <div className = "loginButton">
                                    <SmallButton href = "tbd.com" buttonText = "Log In" backgroundColor = 'var(--bg-200)'/>
                                </div>
                                <div>
                                    <div className = "paddingXS"></div>
                                    <div className = "textSizeS textAlign-Left">
                                        Not a member yet?&nbsp;
                                        <Link to = "/SignUp" className = "registerNowLink">
                                            <strong>Register now</strong>
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

export default Login;