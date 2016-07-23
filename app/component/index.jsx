/*
 react 相关
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
/*
 redux 相关
 */
import { connect } from 'react-redux';

import less from 'less/dist/less.min'


/*
 组件入口文件
 */
class Index extends Component {
    constructor(props) {
        super(props);
        /*this.state = this.props.state;*/

    }

    render() {

        return (
            <div className="page">
                <ArticleList></ArticleList>
            </div>
        );
    }

    componentDidMount() {
    }

    //在接收到新的 props 或者 state，将要渲染之前调用
    shouldComponentUpdate(nextProps, nextState) {
    }

    //在初始化渲染执行之后立刻调用一次
    componentDidUpdate() {
        less.modifyVars({
            '@bgcolor': 'red'
        });

    }

    componentWillUnmount() {
    }
}
;

/*
 文章列表
 */
export class ArticleList extends Component {
    render() {
        return (
            <h1>mooc!!!</h1>
        );
    }
}

export default connect((state) => {
    return {state};
})(Index); //连接redux