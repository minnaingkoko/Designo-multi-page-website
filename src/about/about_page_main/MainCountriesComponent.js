import { Link } from "react-router-dom"
const Countries = (props) => {
    return (
<div className="infoCard">
            <img src={props.src} className="additionalInfo__img additionalInfo__img__about" alt={props.alt} />
            <div className="additionalInfo__container">
                <h2 className="additionalInfo__title">{props.title}</h2>
                <Link to="/locations" tabIndex="0" className="hero__btn hero__btn__about" aria-label={props.label}>{props.summary}</Link>
            </div>
        </div>
    )
}
export default Countries