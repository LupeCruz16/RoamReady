import "../css/locationNavBar.css"

function LocationNavBar () {
    return (
        <div className = "backgroundColor-Secondary">
            <div className = "paddingGlobal">
                <div className = "largeContainer">
                    <div className = "locationNavBarContent">
                        <div className = "textSizeS textColor-Secondary">Your Location</div>
                        <div className = "textSizeS textColor-Secondary">Flights</div>
                        <div className = "textSizeS textColor-Secondary">Things To Do</div>
                        <div className = "textSizeS textColor-Secondary">Hotels</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LocationNavBar;