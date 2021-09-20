import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import FormUI from '../shared/Form/FormUI';
import { AuthContext } from '../shared/context/auth-context';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../shared/util/validators';

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


const Signup = () => {
    const auth = useContext(AuthContext);


    const SignupHandler = event => {
        event.preventDefault();
        alert('Signup clicked.');
        auth.login();
    }

    return (
    <React.Fragment>
        <FormUI
            id="signup"
            title="Sign-up"
            buttonText="Sign-up"
            onSubmit={SignupHandler}
            icon
            defaultStyle
            inputs={[
                {
                    title: 'Name',
                    id: 'name',
                    type: 'name',
                    validators: [VALIDATOR_REQUIRE()],
                    errorText: 'The field cannot be empty.'
                },
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

export default Signup;
