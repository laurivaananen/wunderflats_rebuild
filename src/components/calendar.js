import React from 'react';

const Calendar = () => {
  const today = new Date()
  const month_names = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec',
  }
  const months = [...Array(12).keys()]
    .map(ind => new Date(today.getFullYear(), today.getMonth() + ind))
    .map(date => Object.assign({}, {
      month: date.getMonth(),
      year: date.getFullYear(),
    }))
    .map(date => {
      if (date.month > 1) {
        return Object.assign(date, {available: true})
      } else {
        return Object.assign(date, {available: false})
      }
    })
  return (
    <ul className="list-reset border-grey-lighter border-t border-l">

      {months.map(x => (
        <li className={"h-32 text-center pt-24 relative w-1/6 border-grey-lighter border-b border-r inline-block" + (x.available ? ' available' : ' unavailable')}>
          {month_names[x.month]} {x.year}
        </li>
      ))}
    </ul>
  )
}

export default Calendar;