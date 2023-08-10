import { Link } from "react-router-dom"
import Logo from '../assets/shared/desktop/logo-dark.png'
import facebook from '../assets/shared/desktop/icon-facebook.svg'
import instagram from '../assets/shared/desktop/icon-instagram.svg'
import twitter from '../assets/shared/desktop/icon-twitter.svg'
import pinterest from '../assets/shared/desktop/icon-pinterest.svg'
import youtube from '../assets/shared/desktop/icon-youtube.svg'
import '../sharedStyles/Footer.css'

const MainFooter = () => {
    return (
        <div className="mainFooter">
            <div className="footerLogo__container">
                <Link to="/" tabIndex="0">
                    <img src={Logo} alt="designo landing page" className="footerLogo" />
                </Link>
            </div>

            <div className="footer__menu">
                <ul className="footer__menuList">
                    <li><Link tabIndex="0" to="/about" className="nav__links">our company</Link></li>
                    <li><Link tabIndex="0" to="/locations" className="nav__links">locations</Link></li>
                    <li><Link tabIndex="0" to="/contact" className="nav__links">contact</Link></li>
                </ul>
            </div>

            <address className="address1 address">
                <span className="office">Designo Central Office</span><br />
                <span>3886 Wellington Street</span><br />
                <span>Toronto, Ontario M9C 3J5</span><br />
            </address>

            <address className="address2 address">
                <span className="office"> Contact Us (Central Office)</span><br />
                <span> P : +1 253-863-8967</span><br />
                <span> M : contact@designo.co</span><br />
            </address>

            <div className="socials">
                <div>
                    <a href="/" tabIndex="0"> <img src={facebook} alt="facebook page" />  </a>
                </div>

                <div>
                    <a href="/" tabIndex="0"> <img src={instagram} alt="instagram page" />  </a>
                </div>

                <div>
                    <a href="/" tabIndex="0"> <img src={twitter} alt="twitter page" />  </a>
                </div>

                <div>
                    <a href="/" tabIndex="0"> <img src={pinterest} alt="pinterest page" />  </a>
                </div>

                <div>
                    <a href="/" tabIndex="0"> <img src={youtube} alt="youtube page" />  </a>
                </div>
            </div>

        </div>
    )
}
export default MainFooter