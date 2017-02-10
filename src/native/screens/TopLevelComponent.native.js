import React from 'react';
import { connect } from "react-redux";
import  SampleAction from '../../common/actions/SampleAction';
import TopLevelScreenComponent from '../../common/components/TopLevelScreenComponent'
import { StyleSheet, Text, View, Button } from 'react-native';

class TopLevelComponentNative extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            message: 'Welcome to top level component of this app.',
            dispatchMessage: 'Dispatch an action to:',
            passActionDispatchValue: 1,
            failActionDispatchValue: 0,
        };
        this.passDispatchedAction = this.passDispatchedAction.bind(this);
        this.failDispatchedAction = this.failDispatchedAction.bind(this);
    }

    passDispatchedAction() {
        this.props.dispatch(SampleAction(this.state.passActionDispatchValue))
    }

    failDispatchedAction() {
        this.props.dispatch(SampleAction(this.state.failActionDispatchValue))

    }

    render() {

        return (
            <View style={styles.container}>
                <TopLevelScreenComponent
                    passDispatchedAction={this.passDispatchedAction}
                    failDispatchedAction={this.failDispatchedAction}
                    message={this.props.sampleReducer.message} />
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
    row: {
        flexDirection: 'row',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    biggerText: {
        fontSize: 17
    },
    button: {
        margin: 5
    }
});

function mapStateToProps(state) {
    return ({
        sampleReducer: state.sampleReducer
    })
}

export default connect(mapStateToProps)(TopLevelComponentNative);