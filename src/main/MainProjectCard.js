import {  Link } from "react-router-dom"
const MainProjectCards = (props) => {
   // console.log(props)
    return (

        <div className={`${props.className} project`}>
            <img className="project_img" src={props.src} alt={props.alt}
                sizes="(min-width: 1090px) 30vw,
             (min-width: 650px) 40vw,  50vw"
                srcSet={props.srcSet}/>
           
           <div className="project__summary">
                <h2 className="project__summary__title">{props.name}</h2>
                <Link to={props.Link} className="project__btn" aria-label={props.label}>View projects
                 <img src={props.src2} className="project__btn__img" alt={props.src2} />
                </Link>
            </div>

        </div>

    )
}
export default MainProjectCards

