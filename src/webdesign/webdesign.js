import Webdesignerheader from './web_design_header/WebDesignHeader'
import Webdesignmain from './web_design_main/WebDesignMain'
import MainSub3 from './web_design_main/MainSub3'
import MainFooter from './web_design_footer/WebDesignFooter'
const Webdesign = () => {
    return (
        <div className="web">
            <Webdesignerheader />
            <div className="mainSection mainSectionWeb">
                <Webdesignmain />
                <MainSub3/>
            </div>
            <MainFooter />
        </div>
    )
}
export default Webdesign