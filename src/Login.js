import React, { useState} from "react";
import api from '../src/services/Api';

const Login = ({onLogin, routerProps}) => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            email,
            password
        };
        api.auth.login(newUser).then((res) => onLogin(res, routerProps));
    }
    return (
        <>
        </>
    )

}

export default Login;