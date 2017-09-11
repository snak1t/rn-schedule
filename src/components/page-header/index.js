import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';

export default class PageHeader extends React.PureComponent {
    static propTypes = {
        onMenuPress: PropTypes.func.isRequired,
        title: PropTypes.string,
    };

    static defaultProps = {
        title: "Расписание",
    };

    render() {
        return (
            <View style={ styles.wrapper } >
                <TouchableHighlight onPress={ this.props.onMenuPress } activeOpacity={0.7} underlayColor='#fff' >
                    <View style={ styles.imageWrapper } >
                        <Image source={ require('./../../../assets/menu.png') } />
                    </View>
                </TouchableHighlight>
                <View style={ styles.textWrapper } >
                    <Text style={ styles.text } >{ this.props.title }</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: 48,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 40,
        backgroundColor: '#FFFFFF',
        elevation: 10,
    },
    imageWrapper: {
        padding: 8,
    },
    textWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
    },
    text: {
        fontSize: 28,
    }
});