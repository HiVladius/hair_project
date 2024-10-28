import React from 'react';
import { NavLink } from 'react-router-dom';
import { Package, Users, Tags } from 'lucide-react';

const ClientNavigation = () => {
  const navItems = [
    { path: 'products', icon: Package, label: 'Productos' },
    { path: 'list', icon: Users, label: 'Clientes' },
    { path: 'tags', icon: Tags, label: 'Etiquetas' },
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

export default ClientNavigation;