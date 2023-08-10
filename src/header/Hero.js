//import HeroBackground from "../assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg"
import HeroComponent from './HeroComponent'
const Hero = () => {
    return (
        <div className="hero__container">
            <HeroComponent title="Award-winning custom designs and digital branding solutions"
                           summary=" With over 10 years in the industry, we are experienced 
                                     in creating fully responsive websites, app design,
                                     and engaging brand experiences. Find out more about our services." 
             />
        </div>
    )
}
export default Hero