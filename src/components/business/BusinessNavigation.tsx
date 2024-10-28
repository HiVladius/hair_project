
import { NavLink } from 'react-router-dom';
import { 
  Building2, 
  Receipt, 
  Key, 
  BookOpen, 
  TicketCheck, 
  Users, 
  BookText
} from 'lucide-react';

const BusinessNavigation = () => {
  const navItems = [
    { path: 'company', icon: Building2, label: 'Mi empresa' },
    { path: 'invoices', icon: Receipt, label: 'Mis facturas' },
    { path: 'licenses', icon: Key, label: 'Licencias' },
    { path: 'manual', icon: BookOpen, label: 'Manual de sistema' },
    { path: 'tickets', icon: TicketCheck, label: 'Tickets' },
    { path: 'staff', icon: Users, label: 'Staff' },
    { path: 'wiki', icon: BookText, label: 'Wiki' },
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

export default BusinessNavigation;