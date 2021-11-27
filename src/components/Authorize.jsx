import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';
import QueryString from 'qs';

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

const authUser = () => {
    const authUrl = 'https://accounts.spotify.com/authorize';
    const spotifyKey = 'cfd2dad3b4654c71a96820ad09b6d61a';

    const queryString = QueryString.stringify({
        client_id: spotifyKey,
        response_type: 'token',
        redirect_uri: 'http://localhost:8080/playlists',
        scope: 'playlist-read-private',
    })

    window.location = authUrl + '?' + queryString;
}

const Authorize = () => {
    return (
        <Container>
            <Title> Log in with Spotify</Title>
            <GetStarted onClick={() => authUser()}>Get Started</GetStarted>
        </Container>
    );
};

const mapDispatchToProps = {

}

const mapStateToProps = state => {
    return { ...state }
}

export default connect(mapStateToProps, mapDispatchToProps)(Authorize);