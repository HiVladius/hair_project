import { PreviewModalProps } from "../../../types/clients";

const PreviewModal: React.FC<PreviewModalProps> = ({
  product,
  onConfirm,
  onCancel,
}) => {
  const stock = (product.input || 0) - (product.output || 0);
  const total = stock;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Confirmar nuevo producto
        </h3>
        <div className="space-y-3 mb-6">
          <div className="grid grid-cols-2 gap-2">
            <span className="text-gray-600">Nombre:</span>
            <span className="font-medium">{product.name}</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <span className="text-gray-600">Entrada:</span>
            <span className="font-medium">{product.input}</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <span className="text-gray-600">Salida:</span>
            <span className="font-medium">{product.output || 0}</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <span className="text-gray-600">Existencias:</span>
            <span className="font-medium">{stock}</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <span className="text-gray-600">Total:</span>
            <span className="font-medium">{total}</span>
          </div>
        </div>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
