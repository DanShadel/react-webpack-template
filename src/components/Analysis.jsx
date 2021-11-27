import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';

const Analysis = () => {
    return (
        <div>

        </div>
    );
};

const mapDispatchToProps = {
}

const mapStateToProps = ({ tracks }) => {
    return { tracks }
}

export default connect(mapStateToProps, mapDispatchToProps)(Analysis);