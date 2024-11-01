
import { NavLink } from 'react-router-dom';
import { 
  Receipt, 
  FileText, 
  CreditCard, 
  Mail, 
  Scissors, 
  File, 
  Wallet, 
  Clock, 
  Calendar
} from 'lucide-react';

const SettingsNavigation = () => {
  const navItems = [
    { path: 'billing', icon: Receipt, label: 'Facturación' },
    // { path: 'electronic-invoice', icon: FileText, label: 'Factura electrónica' },
    // { path: 'register-payment', icon: CreditCard, label: 'Registrar pago' },
    // { path: 'mail-server', icon: Mail, label: 'Servidor de correo' },
    { path: 'services', icon: Scissors, label: 'Servicios' },
    // { path: 'templates', icon: File, label: 'Plantillas' },
    // { path: 'payment-gateway', icon: Wallet, label: 'Pasarela de pago' },
    // { path: 'service-hours', icon: Clock, label: 'Horario de servicio' },
    // { path: 'booking-portal', icon: Calendar, label: 'Portal de reservas' },
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

export default SettingsNavigation;