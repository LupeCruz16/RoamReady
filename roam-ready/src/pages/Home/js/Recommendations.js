import '../css/recommendations.css'
import canada from '../../../assets/images/canada.jpg'
import italy from '../../../assets/images/italy.jpg'
import greece from '../../../assets/images/greece.webp'
import XSmallButton from '../../../components/Buttons/XSmallButton.js'

function Recommendations () {
    return (
        <div className = "recommendationsSection">
            <div className = "paddingGlobal">
                <div className = "largerContainer">
                    <div className = "paddingSection-M">
                        <div className  = "recommendationContent">
                            <div className = "textSizeM textAlign-Left">Recomendations</div>
                            <div className = "paddingS"></div>
                            <div className = "recommendationsList">
                                <div className = "recommendation">
                                    <img src = {canada} className = "recImage" loading = "lazy" alt = "Canada"/>
                                    <div className="overlay">
                                        <div className="textSizeS textColor-Secondary">Ontario, Canada</div>
                                        <div className = "paddingS"></div>
                                        <XSmallButton href = 'somewhere.com' buttonText= 'Explore' backgroundColor= 'var(--primary-300)' />
                                    </div>
                                </div>
                                <div className = "recommendation">
                                    <img src = {italy} className = "recImage" loading = "lazy" alt = "Italy"/>
                                    <div className="overlay">
                                        <div className="textSizeS textColor-Secondary">Milan, Italy</div>
                                        <div className = "paddingS"></div>
                                        <XSmallButton 
                                        href = 'somewhere.com'
                                        buttonText= 'Explore'
                                        backgroundColor= 'var(--primary-300)'
                                        />
                                    </div>
                                </div>
                                <div className = "recommendation">
                                    <img src = {greece} className = "recImage" loading = "lazy" alt = "Gereece"/>
                                    <div className="overlay">
                                        <div className="textSizeS textColor-Secondary">Santorini, Greece</div>
                                        <div className = "paddingS"></div>
                                        <XSmallButton href = 'somewhere.com' buttonText= 'Explore' backgroundColor= 'var(--primary-300)'/>
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

export default Recommendations; 