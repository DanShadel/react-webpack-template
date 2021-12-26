import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';
import { updateAccessTokenAction } from '../actions/userActions';
import { getUserPlaylistsAction, getTracksForPlaylistAction } from '../actions/playlistActions';
import { useHistory } from "react-router-dom";

const Playlist = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    height: 10%;
    border:1px solid white;
    align-items: center;
    justify-content: space-between;
    margin-left: 10%;
    margin-bottom: 1%;
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    color: white;
`;

const Artwork = styled.div`
    width: auto;
    height: 90%;
    display: flex;
    margin-left: 2%;
`;

const Title = styled.div`
    font-size: 1.5rem;
    text-align: center;

`;

const Count = styled.div`
    width: 10%;
    margin-right: 2%;
`;

const imgStyles = {
    maxWidth: '100%',
    maxHeight: '100%'
};

const onClick = (playlist, history, getTracksForPlaylistAction) => {
    getTracksForPlaylistAction(playlist)
    history.push('/analysis')
}

const Playlists = ({ updateAccessTokenAction, user, playlists, getUserPlaylistsAction, getTracksForPlaylistAction }) => {
    const history = useHistory();
    React.useEffect(() => {
        if (window.location.href.split('#')[1]) {
            const queryString = window.location.href.split('#')[1]
            const accessToken = queryString.split('&')[0].split('=')[1];
            updateAccessTokenAction(accessToken);
        }
    }, []);

    React.useEffect(() => {
        if (user.accessToken) {
            getUserPlaylistsAction()
        }

    }, [user.accessToken])

    return (
        <Container>
            {
                playlists.map((playlist, index) => {
                    return (
                        <Playlist key={index} onClick={() => onClick(playlist, history, getTracksForPlaylistAction)}>
                            <Artwork> <img src={playlist.images[0].url} style={imgStyles} /> </Artwork>
                            <Title>{playlist.name}</Title>
                            <Count>length: {playlist.tracks.total}</Count>
                        </Playlist>
                    );
                })
            }
        </Container>
    );
};

const mapDispatchToProps = {
    updateAccessTokenAction,
    getUserPlaylistsAction,
    getTracksForPlaylistAction,
}

const mapStateToProps = ({ user, playlists }) => {
    return { user, playlists }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlists);