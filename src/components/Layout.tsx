import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  PiggyBank, 
  Package, 
  Settings, 
  Building2, 
  Ticket, 
  Users2
} from 'lucide-react';

const Layout = () => {
  const navItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/appointments', icon: Calendar, label: 'Citas' },
    { path: '/clients', icon: Users, label: 'Clientes' },
    { path: '/finance', icon: PiggyBank, label: 'Finanzas' },
    { path: '/inventory', icon: Package, label: 'Almacén' },
    { path: '/settings', icon: Settings, label: 'Ajustes' },
    { path: '/business', icon: Building2, label: 'Empresa' },
    { path: '/coupons', icon: Ticket, label: 'Cupones' },
    { path: '/affiliate', icon: Users2, label: 'Afiliado' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800">Salon Manager</h1>
        </div>
        <nav className="mt-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors ${
                  isActive ? 'bg-indigo-50 text-indigo-600 border-r-4 border-indigo-600' : ''
                }`
              }
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
      
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;