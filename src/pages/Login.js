import React from 'react';

import FormUI from '../shared/Form/FormUI';
import { validate, VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../shared/util/validators';
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
    const LoginHandler = event => {
        event.preventDefault();
        alert('Log-in clicked.');
    }

    return (
    <React.Fragment>
            <FormUI
                id="login"
                title="Login"
                buttonText="Log-in"
                onSubmit={LoginHandler}
                icon
                defaultStyle
                inputs={[
                    {
                        title: 'Email',
                        id: 'email',
                        type: 'email',
                        validators: [VALIDATOR_EMAIL()],
                        errorText: 'Please enter a valid email.'
                    },
                    {
                        title: 'Password',
                        id: 'password',
                        type: 'password',
                        validators: [VALIDATOR_MINLENGTH(5)],
                        errorText: 'Password must be at least 5 characters.',
                    }
                ]}
            />
    </React.Fragment>);
};

export default Login;
