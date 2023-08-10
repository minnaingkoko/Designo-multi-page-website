import AppdesignHeader from './app_design_header/Appdesignheader'
import Appdesignmain from './app_design_main/AppDesignMain'
import MainSubApp from './app_design_main/MainSubApp'
import MainFooter from '../webdesign/web_design_footer/WebDesignFooter'
const Appdesign = () => {
    return (
        <div className="appdesign">
            <AppdesignHeader />
            <div className="mainSection mainSectionWeb">
                <Appdesignmain />
                <MainSubApp />
            </div>
            <MainFooter />
        </div>
    )
}
export default Appdesign