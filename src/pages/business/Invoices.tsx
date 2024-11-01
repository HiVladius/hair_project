const Invoices = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Mis facturas</h2>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="min-w-full divide-y divide-gray-200">
          <thead className="min-w-full divide-y divide-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                N Ref
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sucursal
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                $ Monto
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Hora
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Empleado
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                1
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Sucursal 1
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                $ 100.00
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                10:00
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Empleado 1
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                2
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Sucursal 2
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                $ 200.00
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                11:00
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Empleado 2
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                3
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Sucursal 3
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                $ 300.00
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                12:00
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Empleado 3
              </td>
            </tr>
          </tbody>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
