import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'
import Logo from './Logo.jsx';
import GitHub from '../assets/GitHub-logo.png';
import Twitter from '../assets/Twitter-logo.png';

const Container = styled.div`
    width: 100%;
    height: 5%;
    background-image: linear-gradient(#828282, #191414);
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

const LogoContainer = styled.div`
	margin: .25em;
	display:flex;
	flex-direction: row;
	justify-content: space-between;
`;

const LogIn = styled.div`
    justify-content: right;
    background-color: #1DB954;
    width: 4rem;
    height: 2rem;
    color: #ecebe8;
    border-radius: 20px;
    margin-right: 4%;
    margin-top: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Navbar = () => {

    return (
        <Container>
            <LogoContainer>
                <Logo img={GitHub} link='https://github.com/DanShadel/SPA' />
                <Logo img={Twitter} link='https://twitter.com/DanShadel' />
            </LogoContainer>
        </Container>
    )
}

const mapDispatchToProps = {
}

const mapStateToProps = state => {
    return { ...state }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

