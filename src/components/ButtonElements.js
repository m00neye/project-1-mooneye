 import React from 'react'
import styled from 'styled-components'
 import {Link} from 'react-scroll'
//  AD974F
 export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#AD974F' : '#fff')};
    white-space: nowrap;
    padding: ${({big}) => big? '14px 48px' : '12px 30px'};
    color: ${({dark}) => dark? '#fff' : '#AD974F'};
    font-size: ${({fontBig}) => fontBig? '20px' : '16px'};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover{
        color: #AD974F;
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#AD974F')};
    }
 `;