import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday } from 'date-fns';
// import { es } from 'date-fns/locale';
import AppointmentModal from '../AppointmentModal';

interface CalendarMonthViewProps {
  currentDate: Date;
}

interface AppointmentData {
  date: Date;
  clientName: string;
  phone: string;
  email?: string;
  location: string;
  coordinates?: google.maps.LatLngLiteral;
}

const CalendarMonthView: React.FC<CalendarMonthViewProps> = ({ currentDate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [appointments, setAppointments] = useState<AppointmentData[]>([]);

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const weekDays = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  const startingDayIndex = monthStart.getDay();
  const emptyCells = Array(startingDayIndex).fill(null);

  const handleDayClick = (date: Date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const handleAppointmentSubmit = (appointmentData: AppointmentData) => {
    setAppointments((prev) => [...prev, appointmentData]);
  };

  const getDayAppointments = (date: Date) => {
    return appointments.filter((appointment) =>
      format(appointment.date, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
    );
  };

  return (
    <>
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
            const dayAppointments = getDayAppointments(day);

            return (
              <div
                key={day.toISOString()}
                onClick={() => handleDayClick(day)}
                className={`bg-white p-2 min-h-[100px] cursor-pointer hover:bg-gray-50 ${
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
                <div className="mt-1 space-y-1">
                  {dayAppointments.map((appointment, index) => (
                    <div
                      key={index}
                      className="text-xs bg-indigo-100 text-indigo-700 p-1 rounded truncate"
                    >
                      {format(appointment.date, 'HH:mm')} - {appointment.clientName}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedDate={selectedDate}
        onSubmit={handleAppointmentSubmit}
      />
    </>
  );
};

export default CalendarMonthView;