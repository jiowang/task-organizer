import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import FormUI from '../shared/Form/FormUI';
import { AuthContext } from '../shared/context/auth-context';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../shared/util/validators';

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
    const auth = useContext(AuthContext)

    const LoginHandler = event => {
        event.preventDefault();
        alert('Log-in clicked.');
        auth.login();
    }

    const extraButton = <span className='pl-3'>
        <Link
            to='/signup'
            className={'btn btn-danger btn-xl'}
        >
            Sign-up
        </Link>
    </span>

    return (
    <React.Fragment>
        <FormUI
            id="login"
            title="Login"
            buttonText="Log-in"
            onSubmit={LoginHandler}
            icon
            defaultStyle
            extraButton={extraButton}
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
