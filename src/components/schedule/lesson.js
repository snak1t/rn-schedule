import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const Lesson = ({ index, isHighlighted, lesson }) => (
    <View style={ StyleSheet.flatten([styles.wrapper, isHighlighted(lesson) && styles.hightlight ]) } >
        <View style={ styles.indexWrapper } ><Text style={ styles.index } >{ index }</Text></View>
        <View style={ styles.nameWrapper } >
            <Text style={ styles.name } >
                { lesson.isPractice ? 'упр.' : 'лек.' } { lesson.name }
            </Text>
        </View>
        <View style={ styles.roomsWrapper } >
            { lesson.room && lesson.room.map && lesson.room
                .map(room => <Text style={ styles.room } key={room}>{ room }</Text>)
            }
        </View>
    </View>
);

export default Lesson;

Lesson.propTypes = {
    index: PropTypes.number.isRequired,
    lesson: PropTypes.object.isRequired,
    isHighlighted: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight: 50,
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    hightlight: {
        backgroundColor: '#FAFAD2',
    },
    indexWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
    },
    index: {

    },
    nameWrapper: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        flex: 1
    },
    name: {

    },
    roomsWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80
    },
    room: {

    }
});