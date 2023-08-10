import '../../sharedStyles/Appwebdesign.css'
import AdditionalInfoCard from '../../sharedComponents/AdditionalInfo'
import Change from '../../assets/graphic-design/desktop/image-change.jpg'
import BoxedWater from '../../assets/graphic-design/desktop/image-boxed-water.jpg'
import Science from '../../assets/graphic-design/desktop/image-science.jpg'

const Graphicdesignmain = () => {
    return (
        <div className="main__container">
            <div className="additionalInfo additionalInfo__web">
                <AdditionalInfoCard src={Change} alt="change graphic design" className="change"
                    title="Tim Brown" summary="A book cover designed for Tim Brown’s new release, ‘Change’" />
                    <AdditionalInfoCard src={BoxedWater} alt="boxed water graphic design" className="boxedwater"
                    title="Boxed water" summary="A simple packaging concept made for Boxed Water" />
                    <AdditionalInfoCard src={Science} alt="science graphic design" className="science"
                    title="Science!" summary="A poster made in collaboration with the Federal Art Project" />
            </div>
        </div>
    )
}
export default Graphicdesignmain


 

 
 

  
 