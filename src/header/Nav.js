import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { useState } from 'react'
import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import About from '../about/About'
import Location from '../locations/Locations'
import Contact from '../contact/Contact'
import Home from '../homepage/home'
import Webdesign from '../webdesign/webdesign'
import Appdesign from '../appdesign/appdesign'
import Graphicdesign from '../graphicdesign/graphicdesign'

import Logo from '../assets/shared/desktop/logo-dark.png'
import Hamburger from '../assets/shared/mobile/icon-hamburger.svg'
import CloseMenu from '../assets/shared/mobile/icon-close.svg'
import './Header.css'

//Function to scroll to top of page when navigating 
//to a new page. at the end of a page focus of page will
//be at the bottom of the page
const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }

const Navigation = () => {
    const [ShowModal, setShowModal] = useState(true)

    const displayModal = () => {
        console.log("Menu close button clicked")
        setShowModal(!ShowModal)

    }

    return (
        <Router>
            <ScrollToTop/>
            <div className="nav__container">
                <div className="nav">
                    <div className="nav__controls">
                        <div className="logoContainer">
                            <Link  tabIndex="0" to="/">
                                <img src={Logo} alt="designo landing page" className="logo"/>
                            </Link>
                        </div>
                    </div>
                    <div className="menu__ctrls">
                        <button  tabIndex="0" className={`menu__ctrls--btn btn--open ${ShowModal ? "closeBtn" : "openBtn"}`}><img src={Hamburger}
                            onClick={displayModal} alt="open modal menu"/></button>
                        <button  tabIndex="0" className={`menu__ctrls--btn btn--close ${ShowModal ? "openBtn" : "closeBtn"}`}><img src={CloseMenu}
                            onClick={displayModal} alt="close modal menu"/> </button>
                    </div>
                </div>

                <div className="modal">
                    <ul className={`modal__menuList ${ShowModal ? "modalHide" : "modalShow"}`}>
                        <li><Link  tabIndex="0" to="/about" onClick={displayModal} className="nav__links">our company</Link></li>
                        <li><Link  tabIndex="0" to="/locations" onClick={displayModal}  className="nav__links">locations</Link></li>
                        <li><Link  tabIndex="0" to="/contact" onClick={displayModal}  className="nav__links">contact</Link></li>
                    </ul>                   

                </div>
            </div>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/locations">
                    <Location />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/webdesign">
                    <Webdesign />
                </Route>
                <Route path="/appdesign">
                    <Appdesign />
                </Route>
                <Route path="/graphicdesign">
                    <Graphicdesign />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}
export default Navigation