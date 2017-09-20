import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

import Lesson from './lesson';

import { getweekDayAlias, getMonthAlias } from './../../utils/date';

const DaySchedule = ({date, isHightlighted, lessons}) => (
    lessons && lessons.length && <View style={ styles.wrapper }>
        <Text style={ styles.header } >
            {getweekDayAlias(date.getDay())}, {getMonthAlias(date.getMonth())} {date.getDate()}
        </Text>
        <View style={ styles.lessonsWrapper } >
            {
                lessons.map((lesson, index) => (
                    lesson && <Lesson
                        index={ index + 1 }
                        lesson={ lesson }
                        key={ index }
                        isHighlighted={ isHightlighted }
                    />
                ))
            }
        </View>
    </View> || null
);

export default DaySchedule;

DaySchedule.propTypes = {
    isHightlighted: PropTypes.func.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    lessons: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
        paddingLeft: 30,
        backgroundColor: '#fff',
        elevation: 2,
        marginVertical: 3,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    lessonsWrapper: {
        padding: 5,
        paddingLeft: 20,
    }
});