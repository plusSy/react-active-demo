/**
 * Created by applesyl on 2017/6/28.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

/**方式1:-通过ES6定义一个组件-**/
// export default class HelloComponent extends Component{
//     render(){
//         return <Text style={{color:'red',fontSize:20}}>Hello {this.props.name}!</Text>
//     }
// }

/**方式2:-通过ES5定义一个组件-**/
var HelloComponent = React.createClass({
    render(){
        return <Text style={{color:'blue',fontSize:20}}>Hello {this.props.name}!</Text>
    }
});

module.exports = HelloComponent;
/**方式3:-通过函数的方式定义一个组件-**/
/**
 * 无状态 不能使用this
 *
 * 函数式接受属性
 * */
// function HelloComponent(props){
//     return <Text style={{color:'#000',fontSize:20}}>Hello {props.name}!</Text>
// }
// module.exports = HelloComponent;