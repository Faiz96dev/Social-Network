import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from '../Common/FormsControls/FormsControls'
import {requiredField} from '../../utils/validators/validator'
const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'Login'} name={"login"} component={Input} validate={[requiredField]} /></div>
            <div><Field placeholder={'password'} name={"password"}  validate={[requiredField]} component={Input}/></div>
            <div><Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me</div>
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const Login = (props) => {
const onSubmit = (formData) =>{
    console.log(formData)
}
    return <div>
        <h1>login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
export default Login