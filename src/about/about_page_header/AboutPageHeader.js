import '../../sharedStyles/Appwebdesign.css'
import HeroShared from "../../sharedComponents/HeroShared"
import HeroMobile from "../../assets/about/mobile/image-about-hero.jpg"
import HeroTablet from "../../assets/about/tablet/image-about-hero.jpg"
import HeroDesktop from "../../assets/about/desktop/image-about-hero.jpg"

import "../about.css"
const Aboutpageheader = () => {
    return (
        
            <div className="hero__container hero__container__about">
                <div className="hero_image_about">
                    <img src={HeroMobile}
                     sizes="(min-width: 1090px) 30vw, (min-width: 550px) 100vw,  100vw"
                     srcSet={`${HeroMobile} 375w, ${HeroTablet} 689w,
                            ${HeroDesktop} 476w`}  alt=""/>
                </div>
                <HeroShared title="About us"
                    summary="
            Founded in 2010, we are a creative agency that produces lasting results for our clients. 
            We’ve partnered with many startups, corporations, and nonprofits alike to craft designs 
            that make real impact. We’re always looking forward to creating brands, products, and 
            digital experiences that connect with our clients' audiences."/>
            </div>            

        
    )
}
export default Aboutpageheader