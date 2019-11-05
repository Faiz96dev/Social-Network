import React from "react";
import {Field, reduxForm} from "redux-form";
import {CreateField, Input} from '../Common/FormsControls/FormsControls'
import {requiredField} from '../../utils/validators/validator'
import {connect} from 'react-redux'
import {login} from '../../redux/authReducer'
import {Redirect} from 'react-router-dom'
const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'email'} name={"email"} component={Input} validate={[requiredField]} />
                {/*{CreateField('email', 'email', Input, [requiredField] , {type: 'password'})}*/}
            </div>
            <div><Field type={"password"} placeholder={'password'} name={"password"}  validate={[requiredField]} component={Input}/></div>
            <div><Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me</div>
            {props.error &&   <div className={"form-summary-error"}>Error {props.error}</div>  }
            
            <button>Login</button>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const Login = (props) => {
const onSubmit = (formData) =>{
    props.login(formData.email, formData.password, formData.rememberMe)
}
if (props.isAuth){
    return <Redirect to={"/profile"}/>
}
    return <div>
        <h1>login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default  connect (mapStateToProps, {login} )(Login) 

