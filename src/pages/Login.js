import React from 'react';

import SpacingWrapper from '../shared/components/UIElements/SpacingWrapper';

let USERS = [
    {
        userId: 'u1',
        name: 'TheChosenWang',
        lists: 2
    },
    {
        userId: 'u2',
        name: 'NotChosenWang',
        lists: 2
    },
    {
        userId: 'u3',
        name: 'Someone',
        lists: 1
    },
    {
        userId: 'u4',
        name: 'No One',
        lists: 0
    }
]


const Login = () => {
    return (
    <React.Fragment>
        <SpacingWrapper>
            <h2>login</h2>
        </SpacingWrapper>
    </React.Fragment>);
};

export default Login;
