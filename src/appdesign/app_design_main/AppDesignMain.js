import '../../sharedStyles/Appwebdesign.css'
import AdditionalInfoCard from '../../sharedComponents/AdditionalInfo'
import Airfilter from '../../assets/app-design/desktop/image-airfilter.jpg'
import Eyecam from '../../assets/app-design/desktop/image-eyecam.jpg'
import Faceit from '../../assets/app-design/desktop/image-faceit.jpg'
import Todo from '../../assets/app-design/desktop/image-todo.jpg'
import LoopStudio from '../../assets/app-design/desktop/image-loopstudios.jpg'
const Appdesignmain = () => {
    return (
        <div className="main__container">
            <div className="additionalInfo additionalInfo__web">

                <AdditionalInfoCard src={Airfilter} alt="airfilter website design" className="airfilter"
                    title="Airfilter" summary="Solving the problem of poor indoor air quality by filtering the air" />

                <AdditionalInfoCard src={Eyecam} alt=" Eyecam website design" className="eyecam"
                    title="Eyecam" summary=" Product that lets you edit your favorite photos and videos at any time" />


                <AdditionalInfoCard src={Faceit} alt="Faceit website design" className="faceit"
                    title="Faceit" summary="Get to meet your favorite internet superstar with the faceit app" />

                <AdditionalInfoCard src={Todo} alt="Todo website design" className="todo"
                    title="Todo" summary="A todo app that features cloud sync with light and dark mode" />

                <AdditionalInfoCard src={LoopStudio} alt="Loopstudios website design" className="loopstudios"
                    title="Loopstudios" summary="A VR experience app made for Loopstudios" />

            </div>

        </div>
    )
}
export default Appdesignmain