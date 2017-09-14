import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, StyleSheet, Text } from 'react-native';

import DaySchedule from './day-schedule';

import { getWeekDays } from './../../utils/date';

export default class Schedule extends React.PureComponent {
    static propTypes = {
        numerator: PropTypes.array.isRequired,
        denominator: PropTypes.array.isRequired,
        isNumerator: PropTypes.bool.isRequired,
        isHighlighted: PropTypes.func.isRequired,
        date: PropTypes.instanceOf(Date).isRequired,
    }

    render = () => {
        const schedule = this.props.isNumerator ? this.props.numerator : this.props.denominator;
        const days = getWeekDays(this.props.date)
            .reduce((acc, next, index) => [...acc, ({ date: next, schedule: schedule && schedule[index] || null })], [])
            .filter(({schedule}) => !!schedule);

        return (
            <ScrollView style={ styles.wrapper }>
                {
                    days.length ? days.map(({ date, schedule }) => (
                            <DaySchedule
                                date={ date }
                                isHightlighted={ this.props.isHighlighted }
                                lessons={ schedule }
                                key={ `sch-d:${date.toISOString()}` }
                            />
                        )) :
                    <Text>Ничего не найдено</Text>
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
    }
})