import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import styles from '../common/forms_controll/FromControll.module.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"email"} component={"input"}
                />
            </div>
            <div>
                <Field placeholder={"password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"remember me"} component={"input"}/> remember me
            </div>

            {props.error && <div className={styles.FormError}>
                {props.error}
            </div>

            }
            <div>

                <button>
                    Login
                </button>


            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    };
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);