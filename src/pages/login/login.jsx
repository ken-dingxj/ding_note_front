import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import NormalLoginForm from '@/components/NormalLoginForm/NormalLoginForm'
import './login.less'

class Login extends Component{
    static propTypes = {

    }
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