import expressImg from '../../assets/web-design/desktop/image-express.jpg'
import transferImg from '../../assets/web-design/desktop/image-transfer.jpg'
import photonImg from '../../assets/web-design/desktop/image-photon.jpg'
import builderImg from '../../assets/web-design/desktop/image-builder.jpg'
import blogrImg from '../../assets/web-design/desktop/image-blogr.jpg'
import campImg from '../../assets/web-design/desktop/image-camp.jpg'
import AdditionalInfoCard from '../../sharedComponents/AdditionalInfo'
import '../../sharedStyles/Appwebdesign.css'
import '../Web.css';


const Webdesignmain = () => {    
   
    return (
        <div className="main__container">
            <div className="additionalInfo additionalInfo__web">

                <AdditionalInfoCard src={expressImg} alt="express website design" className="express"
                    title="Express" summary="A multi-carrier shipping website for ecommerce businesses" />

                <AdditionalInfoCard src={transferImg} alt="transfer international website design" className="transfer"
                    title="Transfer" summary="Site for low-cost money transfers and sending money within seconds" />

                <AdditionalInfoCard src={photonImg} alt="photon international website design" className="photon"
                    title="Photon" summary="A state-of-the-art music player with high-resolution audio and DSP effects" />

                <AdditionalInfoCard src={builderImg} alt="builder international website design" className="builder"
                    title="Builder" summary="Connects users with local contractors based on their location" />

                <AdditionalInfoCard src={blogrImg} alt="blogr international website design" className="blogr"
                    title="Blogr" summary="Blogr is a platform for creating an online blog or publication" />

                <AdditionalInfoCard src={campImg} alt="Camp international website design" className="camp"
                    title="Camp" summary="Get expert training in coding, data, design, and digital marketing" />

            </div>

        </div>
    )
}
export default Webdesignmain