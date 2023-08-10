import Canada from "../../assets/shared/desktop/illustration-canada.svg"
import UK from "../../assets/shared/desktop/illustration-united-kingdom.svg"
import Australia from "../../assets/shared/desktop/illustration-australia.svg"
import MainCountries from "./MainCountriesComponent"
const Mainsubabout = () => {
    return(
        <div className="countryCard">
        <MainCountries src={Canada} title="canada" summary="see location" label="go to Canada's location"/>
        <MainCountries src={Australia} title="australia" summary="see location" label="go to Australia's location" />
        <MainCountries src={UK} title="united kingdom" summary="see location" label="go to the United Kingdom's location" />
        </div>
    )
}
export default Mainsubabout