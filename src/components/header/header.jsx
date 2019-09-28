import React, { Component } from 'react'
import { connect } from 'react-redux'
import './header.less'
import { Icon } from 'antd';

class Header extends React.Component{
    render() {
        return(
            <div className="header">
                <div className="header-left">
                    <img src={require('../../asset/images/logo.png')} alt=""/>
                </div>
                <div className="header-rignt">
                    <span>demo</span>
                    <Icon type="down" />
                </div>
                <div className="header-search">
                    <Icon type="search" />
                </div>
            </div>
        )
    }
}
export default connect()(Header)
