import React, { Component } from 'react'
import { connect } from 'react-redux'
import './content.less'
import { Icon } from 'antd';

class Content extends React.Component{
    render() {
        return(
            <div className="content">
                <div className="content-notebook">
                    <div className="content-notebook-add">
                        <div>全部笔记本</div>
                        <div><Icon type="plus-square" /> </div>
                    </div>
                    <div className="content-notebook-list"></div>
                    <div className="content-notebook-foot"></div>
                </div>
                <div className="content-note">
                    <div className="content-note-add"></div>
                    <div className="content-notebook-list"></div>
                </div>
                <div className="content-edite">
                    <div className="content-edite-title"></div>
                    <div className="content-edite-main"></div>
                </div>
            </div>
        )
    }
}
export default connect()(Content)
