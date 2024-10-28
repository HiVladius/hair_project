import React from 'react';
import { format, addDays, startOfWeek } from 'date-fns';
import { es } from 'date-fns/locale';

interface CalendarWeekViewProps {
  currentDate: Date;
}

const CalendarWeekView: React.FC<CalendarWeekViewProps> = ({ currentDate }) => {
  const weekStart = startOfWeek(currentDate, { locale: es });
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const days = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

  return (
    <div className="h-full flex flex-col bg-white rounded-lg shadow">
      <div className="grid grid-cols-8 gap-px bg-gray-200 border-b">
        <div className="py-2 px-3 text-center text-sm font-medium text-gray-700 bg-white">
          Hora
        </div>
        {days.map((day) => (
          <div
            key={day.toISOString()}
            className="py-2 px-3 text-center text-sm font-medium text-gray-700 bg-white"
          >
            {format(day, 'EEE d', { locale: es })}
          </div>
        ))}
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-8 gap-px bg-gray-200">
          {hours.map((hour) => (
            <React.Fragment key={hour}>
              <div className="bg-white p-2 text-right text-sm text-gray-500">
                {`${hour.toString().padStart(2, '0')}:00`}
              </div>
              {days.map((day) => (
                <div
                  key={`${day.toISOString()}-${hour}`}
                  className="bg-white p-2 min-h-[3rem] border-t border-gray-100"
                >
                  {/* Add appointment slots here */}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarWeekView;