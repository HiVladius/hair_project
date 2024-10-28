import React from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isToday,
} from 'date-fns';

interface CalendarMonthViewProps {
  currentDate: Date;
}

const CalendarMonthView: React.FC<CalendarMonthViewProps> = ({
  currentDate,
}) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Get day names in Spanish
  const weekDays = [
    'domingo',
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado',
  ];

  // Calculate the starting position (0-6) of the first day of the month
  const startingDayIndex = monthStart.getDay();

  // Create array for empty cells before the first day
  const emptyCells = Array(startingDayIndex).fill(null);

  return (
    <div className="h-full flex flex-col bg-white rounded-lg shadow">
      <div className="grid grid-cols-7 gap-px bg-gray-200 border-b">
        {weekDays.map((day) => (
          <div
            key={day}
            className="py-2 px-3 text-center text-sm font-medium text-gray-700 bg-white capitalize"
          >
            {day.slice(0, 3)}
          </div>
        ))}
      </div>
      <div className="flex-1 grid grid-cols-7 gap-px bg-gray-200">
        {emptyCells.map((_, index) => (
          <div key={`empty-${index}`} className="bg-gray-50 min-h-[100px]" />
        ))}
        {daysInMonth.map((day) => {
          const isCurrentMonth = isSameMonth(day, currentDate);
          const isCurrentDay = isToday(day);

          return (
            <div
              key={day.toISOString()}
              className={`bg-white p-2 min-h-[100px] ${
                !isCurrentMonth ? 'text-gray-400' : ''
              }`}
            >
              <span
                className={`inline-flex items-center justify-center w-6 h-6 text-sm ${
                  isCurrentDay
                    ? 'bg-indigo-600 text-white rounded-full'
                    : 'text-gray-700'
                }`}
              >
                {format(day, 'd')}
              </span>
              {/* Add appointment slots here */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarMonthView;