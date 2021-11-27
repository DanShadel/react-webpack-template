import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';

const Playlists = () => {
    return (
        <div>
            PLAYLISTS!
        </div>
    );
};

const mapDispatchToProps = {

}

const mapStateToProps = state => {
    return { ...state }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlists);