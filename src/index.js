import React from 'react';
import ReactDOM  from 'react-dom';
import Route from './router';
import {Provider} from 'react-redux';
import {AppContainer} from 'react-hot-loader';
import store from '@/store'
import * as serviceWorker from './serviceWorker';
import './style/base.less'

//第一种方式
const render=Component=>{
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer>
               <Component/>
            </AppContainer>
        </Provider>,
        document.getElementById('root')
    )
}

render(Route)
serviceWorker.unregister();
