import { useInView } from 'react-intersection-observer'
import '../sharedStyles/Appwebdesign.css'
const AdditionalInfoCard = (props) => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
    });
    return (
        <div ref={ref} className={`infoCard ${inView ? "animate_me" : ""}`}>
            <img src={props.src} className="additionalInfo__img__designs" alt={props.alt} loading="lazy" />
            <div className="additionalInfo__container">
                <h2 className="additionalInfo__title">{props.title}</h2>
                <p className="additionalInfo__desc">{props.summary}</p>
            </div>
        </div>
    )
}
export default AdditionalInfoCard