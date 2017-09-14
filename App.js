import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import store from './src/store';

import Menu from './src/containers/Menu';
import MenuContent from './src/containers/MenuContent';

/**
 * This component needed by `react-redux`.
 */
export default () => <Provider store={ store } ><App /></Provider>;

const App = () => (
    <View style={ styles.container } >
        <Menu><MenuContent /></Menu>
        <Text>Paste your components here</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
});
