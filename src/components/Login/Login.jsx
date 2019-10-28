import React from "react";
import {reduxForm} from "redux-form";

const Login = (props) => {
    let reduxLoginForm = reduxForm({
        form: 'login'
    })(LoginForm)
    return(
        <form>
            <div><input placeholder={'Login'}/></div>
            <div><input placeholder={'password'}/></div>
            <div><input type={"checkbox"}/> remember me</div>
            <button>Login</button>
        </form>
    )
}


const LoginForm = (props) => {
    return <div>
        <h1>reduxLoginForm</h1>
        <Login/>
    </div>
}
export default LoginForm