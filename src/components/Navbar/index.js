import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib'
import MainLogo from '../../images/main-logo.png'
// import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';
import {animateScroll as scroll} from 'react-scroll';
import {Nav,
    NavbarContainer,
    NavLogo,MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink,
    NavLogoContainer,
    NavLogoImage,
    Img
} from './NavbarElements';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changedNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect (() => {
        window.addEventListener('scroll',changedNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
     }
    return (
        <>
        <IconContext.Provider value = {{color: '#fff'}}>
            <Nav scrollNav = {scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick = {toggleHome} >
                        <NavLogoContainer>
                            <NavLogoImage>
                                <Img src= {MainLogo} alt = 'logo'/>
                            </NavLogoImage>
                        </NavLogoContainer>
                    </NavLogo>
                    

                    <MobileIcon onClick = {toggle}>
                        <FaBars/>
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/about"
                            smooth= {true}
                            duration = {500}
                            spy = {true}
                            exact= 'true'
                            offset = {-80}
                            activeClass = "active"
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="products"
                            smooth= {true}
                            duration = {500}
                            spy = {true}
                            exact= 'true'
                            offset = {-80}
                            activeClass = "active"
                            >Products</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services"
                            smooth= {true}
                            duration = {500}
                            spy = {true}
                            exact= 'true'
                            offset = {-80}
                            activeClass = "active"
                            >Services</NavLinks>
                        </NavItem>
                        {/* <NavItem>
                            <NavLinks to="contact"
                            smooth= {true}
                            duration = {500}
                            spy = {true}
                            exact= 'true'
                            offset = {-80}
                            activeClass = "active"
                            >Contact</NavLinks>
                        </NavItem> */}
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/contact">Contact Us</NavBtnLink>            
                    </NavBtn>

                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar;
