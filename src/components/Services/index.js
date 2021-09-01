import React from 'react';
import Icon1 from '../../images/installation.svg';
import Icon2 from '../../images/best-quality.svg';
import Icon3 from '../../images/support.svg';
import{
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesCard,
    ServicesIcon,
    ServicesP,
    ServicesWrapper,
} from './ServicesElements.js'

const Services = () => {
    return (
        <ServicesContainer id = 'services'>
            <ServicesH1> Our Commitment</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src = {Icon1}/>
                        <ServicesH2>Easy Installation</ServicesH2>
                        <ServicesP>
                            We provide our customers quick and easy installation of our products.
                        </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src = {Icon2}/>
                        <ServicesH2>Quality Assured</ServicesH2>
                        <ServicesP>
                           We build our components safe and secure with greate quality standards to satisfy the needs of every customer and to give a great value for money
                        </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src = {Icon3}/>
                        <ServicesH2>Quick Support</ServicesH2>
                        <ServicesP>
                            We provide complete support and excellent maintenance services for our customers
                        </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
            
        </ServicesContainer>
            
        
    )
}

export default Services
