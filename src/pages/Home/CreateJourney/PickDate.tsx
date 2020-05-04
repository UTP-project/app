import React, {useMemo, useState, useRef} from 'react';
import {CalendarList, DateObject, PeriodMarking} from 'react-native-calendars';
import {View, StyleSheet, Text} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import {StackNavigationProp} from '@react-navigation/stack';
import {CompositeNavigationProp} from '@react-navigation/native';

import {CreateJourneyParamList} from '.';
import {HomeStackParamList} from '..';
import {dateFormat} from '../../../common/utils';
import useReady from '../../../components/useReady';

export type DateRange = [string | undefined, string | undefined];

type PickDateNavigationProp = CompositeNavigationProp<
  StackNavigationProp<CreateJourneyParamList, 'Date'>,
  StackNavigationProp<HomeStackParamList>
>;

type Props = {
  navigation: PickDateNavigationProp;
};

const PickDate = ({navigation}: Props) => {
  const ready = useReady();

  const today = useRef(dateFormat(new Date()));
  const [dateRange, setDateRange] = useState<DateRange>([undefined, undefined]);

  const getPeriod = (start: string | undefined, end: string | undefined) => {
    if (!start) {
      return {};
    }
    const period: {
      [date: string]: PeriodMarking;
    } = {};
    if (!end) {
      period[start] = {startingDay: true, color: '#A5D6A7'};
    } else {
      const startDate = new Date(start);
      const endDate = new Date(end);
      for (
        let day = new Date(start);
        day <= new Date(end);
        day.setDate(day.getDate() + 1)
      ) {
        period[dateFormat(day)] = {
          startingDay: day.getTime() === startDate.getTime(),
          endingDay: day.getTime() === endDate.getTime(),
          color: '#A5D6A7',
        };
      }
    }
    return period;
  };

  const periodDay = useMemo(() => getPeriod(dateRange[0], dateRange[1]), [
    dateRange,
  ]);

  const handleDayPress = ({dateString}: DateObject) => {
    if (dateRange[0] && !dateRange[1]) {
      // [string, undefined]
      const newDateRange = [dateRange[0], dateString];
      if (new Date(newDateRange[0]) > new Date(newDateRange[1])) {
        [newDateRange[0], newDateRange[1]] = [newDateRange[1], newDateRange[0]];
      }
      setDateRange(newDateRange as DateRange);
    } else {
      // [undefined, undefined] | [string, string]
      setDateRange([dateString, undefined]);
    }
  };

  return (
    <>
      {ready && (
        <>
          <View style={styles.header}>
            <View>
              <Icon
                name="arrow-back"
                color="#fff"
                size={28}
                containerStyle={styles.icon}
                onPress={() => {
                  navigation.navigate('HomeTab');
                }}
              />
            </View>
            <View style={styles.headerCenter}>
              <Text style={styles.centerText}>选择日期</Text>
            </View>
            <Button
              title="下一步"
              type="clear"
              titleStyle={styles.rightText}
              disabledTitleStyle={styles.disabledStyle}
              disabled={Boolean(
                dateRange.filter((date) => date === undefined).length
              )}
              onPress={() => {
                navigation.navigate('Info');
              }}
            />
          </View>
          <CalendarList
            pastScrollRange={0}
            minDate={today.current}
            current={today.current}
            markingType="period"
            markedDates={periodDay}
            theme={{
              'stylesheet.day.period': {
                base: {
                  overflow: 'hidden',
                  height: 34,
                  alignItems: 'center',
                  width: 38,
                },
              },
            }}
            onDayPress={handleDayPress}
          />
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 64,
    backgroundColor: '#4DB6AC',
  },
  icon: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCenter: {
    flex: 1,
    marginLeft: 32,
  },
  headerRight: {
    paddingHorizontal: 6,
    paddingVertical: 12,
  },
  centerText: {
    color: '#fff',
    fontSize: 20,
  },
  rightText: {
    color: '#fff',
  },
  disabledStyle: {
    color: '#cfcfcf',
  },
});

export default PickDate;
