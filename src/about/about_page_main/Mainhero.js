import '../../sharedStyles/Appwebdesign.css'
import HeroShared from "../../sharedComponents/HeroShared"
import TalentMobile from "../../assets/about/mobile/image-world-class-talent.jpg"
import TalentTablet from "../../assets/about/tablet/image-world-class-talent.jpg"
import TalentDesktop from "../../assets/about/desktop/image-world-class-talent.jpg"
import "../about.css"
const Mainhero = () => {
    return (
        <div className="hero__container hero__container__about hero__about__spacer
        hero__container__about__main">
            <div className="hero_image_about">
                <img src={TalentMobile}
                    sizes="(min-width: 1090px) 30vw, (min-width: 550px) 100vw,  100vw"
                    srcSet={`${TalentMobile} 375w, ${TalentTablet} 689w,
                            ${TalentDesktop} 476w`} alt="world class talent" />
            </div>

            <HeroShared title="World-class talent"
                summary="We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully 
                crafted from concept to launch, ensuring success in its given market. We are constantly updating 
                our skills in a myriad of platforms."
                
               summary2="Our team is multi-disciplinary and we are not merely interested in form — content and meaning 
                are just as important. We give great importance to craftsmanship, service, and prompt delivery. 
                Clients have always been impressed with our high-quality outcomes that encapsulates their 
                brand’s story and mission."/>


        </div>
    )
}
export default Mainhero