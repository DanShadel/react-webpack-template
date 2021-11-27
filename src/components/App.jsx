import React from 'react';
import styled from 'styled-components'
import { Provider } from 'react-redux';
import store from '../main.js';
import Navbar from './Navbar.jsx';
import Intro from './Intro.jsx';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #191414;
`;

const App = () => {
    return (
        <Provider store={store}>
            <Container>
                <Navbar />
            </Container>
        </Provider >
    );
};

export default App;