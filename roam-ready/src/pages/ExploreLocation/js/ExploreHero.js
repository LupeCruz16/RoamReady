import "../css/exploreHero.css"
import LocationLikesImg from "../../../assets/images/locationLikesImg.webp"
import SmallButton from '../../../components/Buttons/SmallButton.js'

function ExploreHero () {
    return (
        <div className = "exploreHeroSection">
            <div className = "paddingGlobal">
                <div className = "largeContainer">
                    <div className = "paddingSection-M">
                        <div className = "exploreHeroContent marginLeft-S">
                            <div className = "exploreHeroContent-Left">
                                <div className = "textSizeL textAlign-Left">Explore Name</div>
                                <div className = "paddingXS"></div>
                                <div className = "textSizeS textAlign-Left">Information about Location</div>
                                <div className = "paddingS"></div>
                                <SmallButton buttonText = 'Reroll Location' backgroundColor = 'var(--bg-200)' />
                            </div>
                            <img src = {LocationLikesImg} className = "exploreImg" loading = "lazy" alt = "Explore"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExploreHero;