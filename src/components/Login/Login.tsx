import React from "react";
import {Field, InjectedFormProps, reduxForm} from 'redux-form'




const Login: React.FC = (props) => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
type FormDataType = {
    login: string
    password: string
    remember: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={'login'} component={"input"}/>
            </div>
            <div>
                <Field placeholder={'Password'} type={'password'} name={"password"} component={"input"}/>
            </div>
            <div>
                <label><Field type={"checkbox"} name={"remember"} component={"input"}/> remember me</label>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export default Login