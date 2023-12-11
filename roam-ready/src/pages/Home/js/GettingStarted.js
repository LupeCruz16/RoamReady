import SmallButton from '../../../components/Buttons/SmallButton.js'
import '../css/gettingStarted.css'

function GettingStarted () {
    return (
        <div className = "gettingStartedSection backgroundColor-Secondary">
            <div className = "svgIcon">
                <svg 
                    viewBox="0 0 32 32" 
                    enable-background="new 0 0 32 32" 
                    id="_x3C_Layer_x3E_" version="1.1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="#000000">
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                    <g id="Airplane_x2C__plane_x2C__flight_x2C__takeoff"> <g id="XMLID_102_"> 
                    <line fill="none" id="XMLID_886_" stroke="#263238" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="1.5" x2="5.295" y1="20.71" y2="19.474"></line> 
                    <line fill="none" id="XMLID_885_" stroke="#263238" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="1.5" x2="7.295" y1="8.728" y2="6.774"></line> 
                    <line fill="none" id="XMLID_884_" stroke="#263238" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="4.529" x2="10.295" y1="24.652" y2="22.774"></line> 
                    <path d=" M14.398,18.689l-1.339,3.767c-0.139,0.391,0.231,0.771,0.625,0.643l1.258-0.408c0.1-0.033,0.188-0.096,0.249-0.181l5.854-8.01" fill="none" id="XMLID_144_" stroke="#263238" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path> 
                    <path d=" M25.597,8.714l-5.506,1.789l-7.974-5.61c-0.126-0.096-0.29-0.116-0.442-0.066l-1.531,0.497c-0.304,0.1-0.437,0.468-0.265,0.738 l4.03,6.45l-6.115,1.986c-0.637,0.208-1.329,0.086-1.854-0.333l-1.783-1.408c-0.129-0.104-0.306-0.132-0.467-0.079l-0.97,0.314 c-0.333,0.109-0.456,0.506-0.24,0.783l1.948,2.532c1.3,1.67,3.499,2.354,5.505,1.702l19.668-6.391 c0.685-0.223,1.057-0.954,0.834-1.638C30.3,9.563,29.967,9.25,29.547,9.123l-1.632-0.458C27.152,8.451,26.349,8.47,25.597,8.714z" fill="none" id="XMLID_1011_" stroke="#263238" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path> 
                    </g> </g> </g>
                </svg>
            </div>
            <div className = "paddingGlobal">
                <div className = "largeContainer">
                    <div className = "paddingSection-L">
                        <div className = "gettingStartedContent ">
                            <div className = "textSizeL textColor-Secondary">Let's Get Started</div>
                            <div className = "paddingXS"></div>
                            <SmallButton 
                            href = 'somewhere.com'
                            buttonText= 'Randomize my trip'
                            backgroundColor= 'var(--primary-200)'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GettingStarted;