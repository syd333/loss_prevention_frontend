import React, { useState, useRef } from "react";
import { useDispatch, useSelector, connect } from "react-redux";



const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);

    const dispatch = useDispatch();

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangeEmail = e => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangeBio = e => {
        const bio = e.target.value;
        setBio(bio);
    };

    const onChangePassword = e => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleSignup = e => {
        e.preventDefault();

        setSuccessful(false);
        dispatch()
    }

    return (
        <div className="signup">
            signup
        </div>
    )
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps)(Signup);