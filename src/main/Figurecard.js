const FigureCard = (props) => {
    return (
        <figure>
            <img src={props.src} alt={props.alt} className="additionalInfo__img" />
            <figcaption>
                <h3>
                    {props.title}
                </h3>
                <p>
                    {props.summary}
                </p>
            </figcaption>
        </figure>
    )
}
export default FigureCard