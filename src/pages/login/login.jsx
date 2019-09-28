import React, { Component } from 'react'
import { connect } from 'react-redux'
import NormalLoginForm from '@/components/NormalLoginForm/NormalLoginForm'
import './login.less'

class Login extends React.Component{
    state={
        msg:"登陆"
    }
    render() {
        return(
            <div className="login-container">
                <div className="login-container-form">
                    <NormalLoginForm></NormalLoginForm>
                </div>

            </div>
        )
    }
}
export default connect()(Login)
