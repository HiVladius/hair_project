import  { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CalendarMonthView from '../../components/appointments/calendar/CalendarMonthView';
import CalendarWeekView from '../../components/appointments/calendar/CalendarWeekView';
import CalendarDayView from '../../components/appointments/calendar/CalendarDayView';
import { ViewType,  } from '../../types/calendar.ts';

const AppointmentCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<ViewType>('month');

  const handlePrevious = () => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (view === 'month') {
        newDate.setMonth(prev.getMonth() - 1);
      } else if (view === 'week') {
        newDate.setDate(prev.getDate() - 7);
      } else {
        newDate.setDate(prev.getDate() - 1);
      }
      return newDate;
    });
  };

  const handleNext = () => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (view === 'month') {
        newDate.setMonth(prev.getMonth() + 1);
      } else if (view === 'week') {
        newDate.setDate(prev.getDate() + 7);
      } else {
        newDate.setDate(prev.getDate() + 1);
      }
      return newDate;
    });
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  const formatDateRange = () => {
    const formatter = new Intl.DateTimeFormat('es', {
      month: 'long',
      year: 'numeric',
      day: 'numeric',
    });

    if (view === 'month') {
      return new Intl.DateTimeFormat('es', { month: 'long', year: 'numeric' }).format(currentDate);
    } else if (view === 'week') {
      const weekStart = new Date(currentDate);
      weekStart.setDate(currentDate.getDate() - currentDate.getDay());
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekStart.getDate() + 6);
      return `${formatter.format(weekStart)} - ${formatter.format(weekEnd)}`;
    } else {
      return formatter.format(currentDate);
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={handlePrevious}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            onClick={handleToday}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Hoy
          </button>
          <h2 className="text-xl font-semibold text-gray-900 capitalize">
            {formatDateRange()}
          </h2>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setView('month')}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              view === 'month'
                ? 'bg-indigo-600 text-white'
                : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
            }`}
          >
            Mes
          </button>
          <button
            onClick={() => setView('week')}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              view === 'week'
                ? 'bg-indigo-600 text-white'
                : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
            }`}
          >
            Semana
          </button>
          <button
            onClick={() => setView('day')}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              view === 'day'
                ? 'bg-indigo-600 text-white'
                : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
            }`}
          >
            Día
          </button>
        </div>
      </div>

      <div className="flex-1 min-h-0">
        {view === 'month' && <CalendarMonthView currentDate={currentDate} />}
        {view === 'week' && <CalendarWeekView currentDate={currentDate} />}
        {view === 'day' && <CalendarDayView currentDate={currentDate} />}
      </div>
    </div>
  );
};

export default AppointmentCalendar;