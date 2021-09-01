import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              {/* <FooterLinkTitle> Link Title</FooterLinkTitle> */}
              <FooterLink to="/signin">About Us</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              {/* <FooterLinkTitle> Link Title</FooterLinkTitle> */}

              <FooterLink to="/signin">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              {/* <FooterLinkTitle> Link Title</FooterLinkTitle> */}

              <FooterLink to="/signin">Contact Us</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              {/* <FooterLinkTitle> Link Title</FooterLinkTitle> */}
              {/* <FooterLink to = "/signin">About Us</FooterLink> */}
              {/* <FooterLink to = "/signin">How it Works</FooterLink> */}
              {/* <FooterLink to = "/signin">Testimonials</FooterLink> */}
              {/* <FooterLink to = "/signin">Careers</FooterLink> */}
              <FooterLink to="/signin">Investore</FooterLink>
              {/* <FooterLink to = "/signin">Terms of Service</FooterLink> */}
              {/* <FooterLink to = "/signin">Contact Us</FooterLink> */}
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              {" "}
              moon eye{" "}
            </SocialLogo>
            <WebsiteRights>
              mooneye@ {new Date().getFullYear()} All Rights Reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-lable="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-lable="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-lable="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-lable="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="//www.twitter.com"
                target="_blank"
                aria-lable="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
