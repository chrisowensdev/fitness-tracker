import {useState} from 'react';

const Login = props => {
    const { login } = props;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const _handleUsernameInput = (input) => {
        setUsername(input);
    }

    const _handlePasswordInput = (input) => {
        setPassword(input);
    }

    const handleSubmit = () => {
        login(username, password);
    }

    return(
        <>
        <form>
            <label>Username:
                <input type="text" name="username" onChange={e => _handleUsernameInput(e.target.value)}/>
            </label>
            <label>Password:
                <input type="password" name="password" onChange={e => _handlePasswordInput(e.target.value)}/>
            </label>
            <button type="button" onClick={handleSubmit}>Submit</button>
        </form>
        </>
    )
}

export default Login;