import  { useState } from 'react';
import { AlertCircle } from 'lucide-react';

interface Affiliate {
  id: string;
  name: string;
  position: string;
  status: 'active' | 'suspended' | 'inactive';
  email: string;
  phone: string;
}

const AffiliateUnregister = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedAffiliate, setSelectedAffiliate] = useState<Affiliate | null>(null);
  const [affiliates] = useState<Affiliate[]>([
    {
      id: '1',
      name: 'Juan Pérez',
      position: 'Estilista Senior',
      status: 'active',
      email: 'juan@example.com',
      phone: '555-0123',
    },
    // Add more sample data as needed
  ]);

  const handleStatusChange = (affiliate: Affiliate, newStatus: 'active' | 'suspended' | 'inactive') => {
    if (newStatus === 'inactive') {
      setSelectedAffiliate(affiliate);
      setShowConfirmation(true);
    } else {
      // Handle status change directly
      console.log(`Changed status of ${affiliate.name} to ${newStatus}`);
    }
  };

  const confirmStatusChange = () => {
    if (selectedAffiliate) {
      console.log(`Confirmed: Changed status of ${selectedAffiliate.name} to inactive`);
      setShowConfirmation(false);
      setSelectedAffiliate(null);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Gestión de Afiliados</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Puesto
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Teléfono
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Estado
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {affiliates.map((affiliate) => (
              <tr key={affiliate.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{affiliate.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{affiliate.position}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{affiliate.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{affiliate.phone}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select
                    value={affiliate.status}
                    onChange={(e) => handleStatusChange(affiliate, e.target.value as any)}
                    className="text-sm rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="active">Activo</option>
                    <option value="suspended">Suspendido</option>
                    <option value="inactive">Baja</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && selectedAffiliate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex items-center mb-4">
              <AlertCircle className="w-6 h-6 text-red-600 mr-2" />
              <h3 className="text-lg font-medium text-gray-900">Confirmar Baja</h3>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              ¿Está seguro que desea dar de baja a {selectedAffiliate.name}? Esta acción no se puede deshacer.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowConfirmation(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                onClick={confirmStatusChange}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
              >
                Confirmar Baja
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AffiliateUnregister;