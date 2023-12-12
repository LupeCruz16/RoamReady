const countries = ["USA", "Canada", "Germany", "France", "Japan"];

function getRandomCountry() {
    const randomIndex = Math.floor(Math.random() * countries.length);
    return countries[randomIndex];
}

export default getRandomCountry;