import "./../sharedStyles/Appwebdesign.css"
const Button = (props) => {
    return (
        <button className="btn__component" type="submit" aria-label={props.label} tabIndex="0">
            {props.title}
        </button>
    )
}
export default Button