import ContactHeader from "../contact/contact_page_header/ContactPageHeader"
import Mainsubabout from "../about/about_page_main/MainSubAbout"
import MainFooter from '../sharedComponents/MainFooter'
const Contact = () => {
    return (
        <div className="contactHeader">
            <ContactHeader />
            <div className="countrycard__contact">
                <Mainsubabout />
            </div>
            <div className="footer footer__contact">                
                <MainFooter />
            </div>

        </div>
    )
}
export default Contact