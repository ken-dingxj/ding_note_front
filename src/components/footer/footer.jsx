import React, { Component } from 'react'
import { connect } from 'react-redux'
import './footer.less'

class Foot extends React.Component{
    render() {
        return (
            <div className="footer">
                <span>© 2019 by dingxuejin</span>
            </div>
        )
    }
}
export default connect()(Foot)
