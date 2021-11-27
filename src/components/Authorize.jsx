import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';
import { getUserAction } from '../actions/userActions';


const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    width: 100%;
    font-size: 5rem;
    color: #ecebe8;

`;

const GetStarted = styled.div`
    background-color: #1DB954;
    width: 8rem;
    height: 2rem;
    color: #ecebe8;
    border-radius: 20px;
    margin-right: 4%;
    margin-top: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Authorize = ({ getUserAction }) => {
    return (
        <Container>
            <Title> Log in with Spotify</Title>
            <GetStarted onClick={() => getUserAction()}>Get Started</GetStarted>
        </Container>
    );
};

const mapDispatchToProps = {
    getUserAction
}

const mapStateToProps = state => {
    return { ...state }
}

export default connect(mapStateToProps, mapDispatchToProps)(Authorize);