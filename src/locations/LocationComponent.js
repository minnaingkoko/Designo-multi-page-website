const LocationComponent = (props) => {
    return (
        <div className="hero__container hero__container__about hero__about__spacer
        hero__location__spacer hero__container__about__main">
            <div className="country__img hero_image_about hero_image_location">
                <img src={props.src} sizes={props.sizes} srcSet={props.srcSet} alt={props.alt} />
            </div>

            <div className="hero hero__web hero__location">
                
                <h3 className="title">{props.title}</h3>
                <address className="address location__address address1">
                    <span className="subtitle">{props.subtitle}</span> <br />
                    {props.line1}<br />
                    {props.line2}
                </address>
                <address className="address location__address address2">
                    <span className="subtitle">Contact</span> <br />
                    {props.phone}<br />
                    {props.email}
                </address>
                                
            </div>


        </div>
    )
}
export default LocationComponent
