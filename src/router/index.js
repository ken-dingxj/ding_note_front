import React, {Component} from 'react'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'
import asyncComponent from '@/utils/asyncComponent'
const login = asyncComponent(() => import("@/pages/login/login"))
const home = asyncComponent(() => import("@/pages/home/home"))

export default class RouteConfig extends Component {
    render() {
        return(
            <HashRouter>
                <Switch>
                    <Route path="/home" component= {home}/>
                    <Redirect exact from='/' to='/home'/>
                </Switch>
            </HashRouter>
        )
    }
}

