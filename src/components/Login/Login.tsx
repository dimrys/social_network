import React, {FormEvent} from "react";
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {Input} from "../comon/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {logIn} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import { Redirect } from "react-router-dom";
import style from  "./../comon/FormsControls/FormsControls.module.css"


type MapDispathType = {
    logIn: (email: string, password: string, rememberMe: boolean) => void
}
type MapStatePropsType = {
    isAuth: boolean
}
type  LoginPropsType = MapStatePropsType & MapDispathType

const Login: React.FC<LoginPropsType> = (props) => {
    const onSubmit = (formData: FormDataType) => {
        props.logIn(formData.email, formData.password, formData.remember)
    }

    if(props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm {...props} onSubmit={onSubmit}/>
        </div>
    )
}
type FormDataType = {
    email: string
    password: string
    remember: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"}
                       validate={[required]}
                       name={'email'}
                       component={Input}
                />
            </div>
            <div>
                <Field placeholder={'Password'}
                       validate={[required]}
                       type={'password'}
                       name={"password"}
                       component={Input}
                />
            </div>
            <div>
                <label><Field type={"checkbox"} name={"remember"} component={Input}/> remember me</label>
            </div>
            {
                props.error && <div className={style.formSummaryError}>
                    {props.error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {logIn})(Login)