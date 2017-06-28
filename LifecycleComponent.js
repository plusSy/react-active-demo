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
export default class LifecycleComponent extends Component{

    constructor(props){     //完成组件的初始化
        super(props);       //先让父组件完成初始化
        console.log('---constructor--完成组件的初始化--');
        this.state={
            count:0
        }
    }

    componentWillMount(){       //组件被装载之前
        console.log('---componentWillMount--组件被装载之前--')
    }

    componentDidMount(){        //组件装载之后
        console.log('---componentDidMount--组件装载之后 --')
    }

    componentWillReceiveProps(nextProps){        //组件数据更新
        console.log('---componentWillReceiveProps--组件数据更新 --')
    }

    shouldComponentUpdate(nextProps,nextState){        //组件是否更新
        console.log('---shouldComponentUpdate--组件是否更新 --');
        return true;
    }

    componentWillUpdate(nextProps,nextState){      //组件被更新之前
        console.log('---componentWillUpdate--组件被更新之前 --')
    }

    componentDidUpdate(prevProps,prevState){      //组件被更新之后
        console.log('---componentDidUpdate--组件被更新之后 --')
    }

    componentWillUnmount(){     //组件被移除之前
        console.log('---componentWillUnmount--组件被移除之前 --')
    }
    render(){
        console.log('---render--组件渲染--');
        return<View>
            <Text
                style={{color:'red',fontSize:20}}
                onPress={()=>{
                    this.setState({
                        count: this.state.count+1,
                    })
                }}
            >有本事点击我呀！</Text>
            <Text
                style={{color:'blue',fontSize:20,textAlign:'center'}}
            >
                 被点击了{this.state.count}次！
            </Text>
        </View>
    }
}