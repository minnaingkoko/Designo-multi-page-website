import Button from "../sharedComponents/ButtonComponent"
const HeroComponent = (props) => {
    return (
        <>
            <div className="hero">
                <h1 className="hero__title">{props.title}</h1>
                <p className="hero__summary">
                    {props.summary}
                </p>               
                <Button title="Learn more" label="Find out more about our services." />
            </div>
            <div className="hero__imageDisplay"></div>
        </>
    )
}
export default HeroComponent