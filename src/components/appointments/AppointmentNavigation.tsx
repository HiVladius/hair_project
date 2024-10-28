import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Calendar,
  CalendarDays,
  CalendarClock,
  DoorOpen,
  Receipt,
  DoorClosed,
  Users
} from 'lucide-react';

const AppointmentNavigation = () => {
  const navItems = [
    { path: 'list', icon: Calendar, label: 'Citas' },
    { path: 'calendar', icon: CalendarDays, label: 'Calendario' },
    { path: 'daily', icon: CalendarClock, label: 'Vista diaria' },
    { path: 'open-shift', icon: DoorOpen, label: 'Abrir turno' },
    { path: 'cash-closing', icon: Receipt, label: 'Corte de caja' },
    { path: 'close-shift', icon: DoorClosed, label: 'Cerrar caja' },
    { path: 'client-portal', icon: Users, label: 'Portal del cliente' },
  ];

  return (
    <nav className="w-64 bg-white rounded-lg shadow p-4">
      <div className="space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-colors ${
                isActive ? 'bg-indigo-50 text-indigo-600' : ''
              }`
            }
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default AppointmentNavigation;