/**
 * Created by applesyl on 2017/6/28.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import HelloComponent from './HelloComponent'
import LifecycleComponent from './LifecycleComponent'

export default class setup extends Component {
    constructor(props){     //完成组件的初始化
        super(props);       //先让父组件完成初始化
        this.state=({
            remove: false,
        })
    }

    render() {
        var view = this.state.remove?null:<LifecycleComponent/>;
        var text = this.state.remove?'让他复活':'让他gêr屁';
        return (
            <View style={styles.container}>
                <HelloComponent
                    name="Word"
                />
                <Text
                    style={{color:'red',fontSize:20}}
                    onPress={()=>{
                        this.setState({
                            remove: !this.state.remove
                        })
                    }}
                >
                    {text}
                </Text>
                {view}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
