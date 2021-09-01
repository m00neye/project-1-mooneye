import React from 'react'
import {
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SideBtnWrap,
    SidebarRoute,
    SidebarLink
} from './SidebarElements'; 

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen = {isOpen} onClick = {toggle}>
            <Icon onClick = {toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick = {toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="products" onClick = {toggle}>
                        Products
                    </SidebarLink>
                    <SidebarLink to="services" onClick = {toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to="contact" onClick = {toggle}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/contact">Contact Us</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
