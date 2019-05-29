import React, { Component } from "react";
/*
异步加载模块
 */
// export default function asyncComponent(importComponent) {
//     class AsyncComponent extends Component{
//         constructor(props) {
//             super(props);
//             this.state = {
//                 component: null
//             };
//         }
//         async componentDidMount() {
//             const { default: component } = await importComponent();
//             this.setState({ component });
//         }
//         render() {
//             const C = this.state.component;
//             return C ? <C {...this.props} /> : null;
//         }
//     }
//     return AsyncComponent;
// }
const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidMount() {
            console.log(importComponent)
            importComponent() //我们传进来的函数返回我们想要的组件B
                .then(cmp => {
                    this.setState({component: cmp.default}); //把组件B存起来
                });
        }

        render() {
            const C = this.state.component; //渲染的时候把组件B拿出来
            return C ? <C {...this.props}/> : null; //返回的其实就是组件B，并且把传给A的属性也转移到B上
        }
    }
};

export default asyncComponent;

