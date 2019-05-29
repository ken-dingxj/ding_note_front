import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Login extends Component{
    static propTypes = {

    }
    state={
        msg:"登陆"
    }
    render() {
        return(
            <div>
                {this.state.msg}
            </div>
        )
    }
}
export default connect()(Login)