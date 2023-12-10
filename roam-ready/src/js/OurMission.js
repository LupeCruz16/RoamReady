import '../css/constants.css'
import '../css/common.css'
import '../css/mission.css'

function OurMission () {
    return (
        <div className = "missionSection">
            <div className = "paddingGlobal">
                <div className = "largeContainer">
                    <div className = "paddingSection-M">
                        <div className = "missionContent">
                            <div className = "missionContent-Left">
                                <div className = "textSizeM textAlign-Left">Our Mission</div>
                            </div>
                            <div className = "missionContent-Right">
                                <p className = "textSizeS marginLeft-S textAlign-Left">
                                Traveling is fun, however we run into the issue of where do we go too often. 
                                If you are a thrill seeker who is so spontaneous you would allow our site to give 
                                you your next travel location, then we have got you covered! 
                                <br></br>
                                We are proud to help inspire you and give you our known tips and tricks for 
                                traveling anywhere in the world!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurMission;