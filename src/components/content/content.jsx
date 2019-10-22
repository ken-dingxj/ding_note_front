import React, { Component } from 'react'
import { connect } from 'react-redux'
import './content.less'
import { Icon } from 'antd';
import { Button } from 'antd';

class Content extends React.Component{
    render() {
        return(
            <div className="content">
                <div className="content-notebook">
                    <div className="content-notebook-add">
                        <span>全部笔记本</span>
                        <Icon type="plus-square"/>
                    </div>
                    <div className="content-notebook-list">
                        <div>
                            <span></span>
                        </div>
                    </div>
                    <div className="content-notebook-foot">
                        <div><Icon type="delete" /></div>
                        <div><Icon type="star" /></div>
                        <div><Icon type="team" /></div>
                    </div>
                </div>
                <div className="content-note">
                    <div className="content-note-add">
                        <span>全部笔记</span>
                        <Icon type="plus-square" />
                    </div>
                    <div className="content-notebook-list"></div>
                </div>
                <div className="content-edite">
                    <div className="content-edite-title">
                        <span>编辑笔记</span>
                        <Button type="primary">保存笔记</Button>
                    </div>
                    <div className="content-edite-main"></div>
                </div>
            </div>
        )
    }
}
export default connect()(Content)
