import '../css/constants.css'
import '../css/common.css'
import '../css/recommendations.css'
import { canada, italy, greece } from './images.js';

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
                                    <img src = {canada} 
                                    className = "recImage"
                                    loading = "lazy"
                                    alt = "Canada"/>
                                </div>
                                <div className = "recommendation">
                                    <img src = {italy} 
                                    className = "recImage"
                                    loading = "lazy"
                                    alt = "Italy"/>
                                </div>
                                <div className = "recommendation">
                                    <img src = {greece} 
                                    className = "recImage"
                                    loading = "lazy"
                                    alt = "Gereece"/>
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