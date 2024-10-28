import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard,
  DollarSign,
  Search,
  FileText,
  Store,
  CreditCard,
  PlusCircle,
  Receipt,
  Wallet,
  Calculator,
  BadgeDollarSign,
  HandCoins
} from 'lucide-react';

const FinanceNavigation = () => {
  const navItems = [
    { path: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { 
      path: 'sales',
      icon: DollarSign,
      label: 'Ventas',
      children: [
        { path: 'search', icon: Search, label: 'Buscar Ventas' },
        { path: 'register', icon: FileText, label: 'Registrar Venta' },
        { path: 'pos', icon: Store, label: 'Punto de venta' },
      ]
    },
    { path: 'payments', icon: CreditCard, label: 'Pagos' },
    { path: 'other-income', icon: PlusCircle, label: 'Otros ingresos' },
    { path: 'expenses', icon: Receipt, label: 'Gastos' },
    { path: 'accounting', icon: Calculator, label: 'Contabilidad' },
    { path: 'payment-methods', icon: Wallet, label: 'Forma de pago' },
    { path: 'payment-promises', icon: HandCoins, label: 'Promesas de pago' },
  ];

  return (
    <nav className="w-64 bg-white rounded-lg shadow p-4">
      <div className="space-y-1">
        {navItems.map((item) => (
          <div key={item.path}>
            {item.children ? (
              <div className="mb-2">
                <div className="flex items-center px-4 py-2 text-gray-700 font-medium">
                  <item.icon className="w-5 h-5 mr-3" />
                  <span>{item.label}</span>
                </div>
                <div className="ml-6 space-y-1">
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

export default FinanceNavigation;