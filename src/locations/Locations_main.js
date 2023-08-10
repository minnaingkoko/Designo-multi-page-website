import CanadaMapTablet from "../assets/locations/tablet/image-map-australia.png"
import AustraliaMapTablet from "../assets/locations/tablet/image-map-australia.png"
import UkMapTablet from "../assets/locations/tablet/image-map-uk.png"

import CanadaMapDesktop from "../assets/locations/desktop/image-map-australia.png"
import AustraliaMapDesktop from "../assets/locations/desktop/image-map-australia.png"
import UkMapDesktop from "../assets/locations/desktop/image-map-united-kingdom.png"

import LocationComponent from "./LocationComponent"
import "./locations.css"
const LocationsMain = () => {

    return (
        <div className="locations__map">
            <LocationComponent className="location__direction" src={CanadaMapTablet}               
                sizes="(min-width: 1090px) 341px, (min-width: 650px) 40vw,  50vw"
                srcSet={`${CanadaMapTablet} 689w, ${CanadaMapDesktop} 375w`} alt="canada map"
                title="Canada" subtitle="Designo Central Office" line1="3886 Wellington Street"
                line2="Toronto, Ontario M9C 3J5" phone="P : +1 253-863-8967" email="M : contact@designo.co"
            />

            <LocationComponent src={AustraliaMapTablet}
                sizes="(min-width: 1090px) 341px, (min-width: 650px) 40vw,  50vw"
                srcSet={`${AustraliaMapTablet} 689w, ${AustraliaMapDesktop} 375w`} alt="australia map"
                title="Australia" subtitle="Designo AU Office" line1="19 Balonne Street"
                line2="New South Wales 2443" phone=" P : (02) 6720 9092" email="M : contact@designo.au"
            />

            <LocationComponent src={UkMapTablet}               
                sizes="(min-width: 1090px) 341px, (min-width: 650px) 40vw,  50vw"
                srcSet={`${UkMapTablet} 689w, ${UkMapDesktop} 375w`} alt="United Kingdom map"
                title="United Kingdom" subtitle="Designo UK Office" line1="13 Colorado Way"
                line2="Rhyd-y-fro SA8 9GA" phone=" P : 078 3115 1400" email="M : contact@designo.uk"
            />

        </div>
    )
}
export default LocationsMain
