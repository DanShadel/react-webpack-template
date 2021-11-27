import React from 'react';
import styled from 'styled-components'
import { Provider } from 'react-redux';
import store from '../main.js';
import Navbar from './Navbar.jsx';
import { Routes } from './Routes.jsx';
import { BrowserRouter as Router } from "react-router-dom";


const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #191414;
`;

// #access_token=BQA1JRbkQd5b0Gfpq2FA5hot02LUdmQ5E1b52mUvO1k-mZhyvSGjqodS4np1RdJokOqVMGC7KeJikK4NEjCAdHtc2SYVMFOMx-TT_v1bbR_ji722teLiRcYrfqeO6Z00rWpcMgj7SGj8h79ULTDP1XvsZGYw&token_type=Bearer&expires_in=3600


const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Container>
                    <Navbar />
                    <Routes />
                </Container>
            </Router>
        </Provider >
    );
};

export default App;