import '../../header/Header.css'
//import  '../Web.css'
import '../../sharedStyles/Appwebdesign.css'
import HeroShared from "../../sharedComponents/HeroShared"
const Webdesignerheader = () => {
    return (
        <div className="hero__container hero__containerWeb">
            <HeroShared title="Web design" 
            summary="We build websites that serve as powerful marketing tools
                    and bring memorable brand experiences."/>
        </div>
    )
}
export default Webdesignerheader