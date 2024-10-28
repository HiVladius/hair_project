import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Search, 
  Scissors, 
  Package, 
  FolderTree, 
  Users, 
  Building2, 
  Warehouse,
  ShoppingCart,
  ClipboardCheck,
  Settings,
  Tags,
  UserCog,
  History
} from 'lucide-react';

const InventoryNavigation = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(true);

  const navItems = [
    { path: 'search', icon: Search, label: 'Buscador' },
    { path: 'services', icon: Scissors, label: 'Servicios' },
    { path: 'products', icon: Package, label: 'Productos' },
    { path: 'categories', icon: FolderTree, label: 'Categorías' },
    { path: 'suppliers', icon: Users, label: 'Proveedores' },
    { path: 'branches', icon: Building2, label: 'Sucursales' },
    { path: 'warehouse', icon: Warehouse, label: 'Almacén' },
    { path: 'purchase-orders', icon: ShoppingCart, label: 'Orden de compra' },
    { path: 'reception-orders', icon: ClipboardCheck, label: 'Orden de recepción' },
    {
      path: 'settings',
      icon: Settings,
      label: 'Ajustes',
      isSubmenu: true,
      children: [
        { path: 'attributes', icon: Tags, label: 'Atributos' },
        { path: 'staff-items', icon: UserCog, label: 'Artículos Staff' },
      ],
    },
    { path: 'movement-history', icon: History, label: 'Historial de movimientos' },
  ];

  return (
    <nav className="w-64 bg-white rounded-lg shadow p-4">
      <div className="space-y-1">
        {navItems.map((item) => (
          <div key={item.path}>
            {item.isSubmenu ? (
              <div>
                <button
                  onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                  className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-colors"
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  <span>{item.label}</span>
                </button>
                {isSettingsOpen && item.children && (
                  <div className="ml-6 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.path}
                        to={`${item.path}/${child.path}`}
                        className={({ isActive }) =>
                          `flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-colors ${
                            isActive ? 'bg-indigo-50 text-indigo-600' : ''
                          }`
                        }
                      >
                        <child.icon className="w-4 h-4 mr-3" />
                        <span>{child.label}</span>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
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
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default InventoryNavigation;