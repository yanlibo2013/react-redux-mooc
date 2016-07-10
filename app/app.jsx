import React from 'react'
import {render}from 'react-dom'
import { Provider } from 'react-redux'
import route from './config/route';
import store from './config/store';
import './css/resets.less'; //重置浏览器默认样式
import './css/style.less'; //css文件

const root = document.getElementById('app')

//Provider置于最顶层
render(
    <Provider store={store}>
        {route}
    </Provider>, root)
