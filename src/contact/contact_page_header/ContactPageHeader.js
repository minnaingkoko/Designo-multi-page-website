import HeroShared from "../../sharedComponents/HeroShared"
import ContactForm from "./ContactForm"
const ContactPageHeader = () => {
    return (
        <div>
            <div className="hero__container hero__contact">
                <HeroShared title="Contact us"
                    summary=" 
                Ready to take it to the next level? Let’s talk about your project or idea and find out how 
                we can help your business grow. If you are looking for unique digital experiences that’s 
                relatable to your users, drop us a line."/>
                <ContactForm />
            </div>
            
        </div>
    )
}
export default ContactPageHeader
