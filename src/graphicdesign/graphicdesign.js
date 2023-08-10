import Graphicdesignheader from './graphic_design_header/GraphicDesignHeader'
import Graphicdesignmain from './graphic_design_main/GraphicDesignMain'
import MainSubDesign from './graphic_design_main/MainSubDesign'
import MainFooter from '../webdesign/web_design_footer/WebDesignFooter'
const GraphicDesign = () => {
    return (
        <div className="graphicDesign">
           <Graphicdesignheader />
           <div className="mainSection mainSectionWeb">
                <Graphicdesignmain/>
                <MainSubDesign />
            </div>
            <MainFooter/>
        </div>
    )
}
export default GraphicDesign