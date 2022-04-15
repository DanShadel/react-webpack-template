import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';
import { slideUp } from '../helpers/animations';

const Container = styled.div`
    width: 100%;
    height: fit-content;
    animation: ${slideUp} .5s linear;
`;

const Home = ({ }) => {
    return (
        <Container>
            Home component
        </Container>
    )
}

const mapDispatchToProps = {}

const mapStateToProps = state => {
    return { ...state }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);