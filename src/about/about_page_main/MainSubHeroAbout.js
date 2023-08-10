import '../../sharedStyles/Appwebdesign.css'
import HeroShared from "../../sharedComponents/HeroShared"
import RealDealMobile from "../../assets/about/mobile/image-real-deal.jpg"
import RealDealTablet from "../../assets/about/tablet/image-real-deal.jpg"
import RealDealDesktop from "../../assets/about/desktop/image-real-deal.jpg"
import "../about.css"
const Mainsubhero = () => {
    const subcontent = `As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own.
    Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every
    opportunity. We make design and technology more accessible and give you tools to measure success.
        `
    const subcontent2 = `We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, 
    we inspire audiences to take action and drive real results.`
    return (
        <div className="hero__container hero__container__about hero__about__spacer hero__about__spacer__bottom">
            <div className="hero_image_about">
                <img src={RealDealMobile}
                    sizes="(min-width: 890px) 30vw, (min-width: 550px) 100vw,  100vw"
                    srcSet={`${RealDealMobile} 375w, ${RealDealTablet} 689w,
                            ${RealDealDesktop} 476w`} alt="the real deal" />
            </div>

            <HeroShared title="The real deal" summary= {subcontent} summary2={subcontent2} />


        </div>
    )
}
export default Mainsubhero
  