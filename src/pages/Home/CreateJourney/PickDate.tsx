import React, {useMemo, useState, useRef} from 'react';
import {CalendarList, DateObject, PeriodMarking} from 'react-native-calendars';
import {dateFormat} from '../../../common/utils';

export type DateRange = [string | undefined, string | undefined];

const PickDate = () => {
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
  );
};

export default PickDate;
