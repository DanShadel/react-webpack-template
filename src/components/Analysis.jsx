import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';
import Mural from './Mural';

const Analysis = () => {
    return (
        <Mural />
    );
};

const mapDispatchToProps = {
}

const mapStateToProps = ({ tracks }) => {
    return { tracks }
}

export default connect(mapStateToProps, mapDispatchToProps)(Analysis);