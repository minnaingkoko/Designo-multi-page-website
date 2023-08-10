import  '../sharedStyles/Footer.css'
const Aside = (props) => {
    return (
        
            <div className="aside__container">
                <h4 className="aside__title">{props.title}</h4>
                <p className="aside__summary">{props.summary}
                </p>
                <button className="aside__btn" aria-label="Contact us and find out how our expertise can help your business grow">Get in touch</button>
            </div>
        
    )
}

export default Aside