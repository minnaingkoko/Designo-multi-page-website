import '../header/Header.css'
//import  '../Web.css'
import '../sharedStyles/Appwebdesign.css'

const HeroSharedComponent = (props) => {
    return(
        <div className="hero hero__web">
                <h1 className="hero__title">
                   {props.title}
                </h1>
                <p className="hero__summary">
                    {props.summary}
                </p>
                <p className="hero__summary hero__summary2">
                    {props.summary2}
                </p>
            </div>
    )
}
export default HeroSharedComponent