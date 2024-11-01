import React, { useState } from "react";
import { Pencil, Trash2, Save, X } from "lucide-react";

import PreviewModal from "../../components/clients/modal/PreviewModal";
import { Product } from '../../types/clients';



const ClientProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newProduct, setNewProduct] = useState<Partial<Product>>({});
  const [showPreview, setShowPreview] = useState(false);

  const calculateTotal = (input: number, output: number) => {
    return input - output;
  };

  const handleAddProduct = () => {
    if (!newProduct.name || newProduct.input === undefined) return;
    setShowPreview(true);
  };

  const handleConfirmAdd = () => {
    const product: Product = {
      id: Date.now().toString(),
      name: newProduct.name!,
      input: newProduct.input!,
      output: newProduct.output || 0,
      stock: newProduct.input! - (newProduct.output || 0),
      total: calculateTotal(newProduct.input!, newProduct.output || 0),
    };

    setProducts([...products, product]);
    setNewProduct({});
    setShowPreview(false);
  };

  const handleEditProduct = (id: string) => {
    setEditingId(id);
  };

  const handleSaveEdit = (id: string) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        const updatedProduct = {
          ...product,
          ...newProduct,
          stock:
            (newProduct.input ?? product.input) -
            (newProduct.output ?? product.output),
          total: calculateTotal(
            newProduct.input ?? product.input,
            newProduct.output ?? product.output
          ),
        };
        return updatedProduct;
      }
      return product;
    });

    setProducts(updatedProducts);
    setEditingId(null);
    setNewProduct({});
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof Product
  ) => {
    const value = field === "name" ? e.target.value : Number(e.target.value);
    setNewProduct({ ...newProduct, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900">
          Productos de Clientes
        </h2>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Entrada
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Salida
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Existencias
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Add new product row */}
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Nuevo
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="text"
                    value={newProduct.name || ""}
                    onChange={(e) => handleInputChange(e, "name")}
                    className="w-full px-2 py-1 text-sm border rounded"
                    placeholder="Nombre del producto"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="number"
                    value={newProduct.input || ""}
                    onChange={(e) => handleInputChange(e, "input")}
                    className="w-24 px-2 py-1 text-sm border rounded"
                    placeholder="0"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="number"
                    value={newProduct.output || ""}
                    onChange={(e) => handleInputChange(e, "output")}
                    className="w-24 px-2 py-1 text-sm border rounded"
                    placeholder="0"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {newProduct.input !== undefined
                    ? newProduct.input - (newProduct.output || 0)
                    : 0}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {newProduct.input !== undefined
                    ? calculateTotal(newProduct.input, newProduct.output || 0)
                    : 0}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={handleAddProduct}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    <Save className="w-5 h-5" />
                  </button>
                </td>
              </tr>

              {/* Existing products */}
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingId === product.id ? (
                      <input
                        type="text"
                        defaultValue={product.name}
                        onChange={(e) => handleInputChange(e, "name")}
                        className="w-full px-2 py-1 text-sm border rounded"
                      />
                    ) : (
                      <span className="text-sm text-gray-900">
                        {product.name}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingId === product.id ? (
                      <input
                        type="number"
                        defaultValue={product.input}
                        onChange={(e) => handleInputChange(e, "input")}
                        className="w-24 px-2 py-1 text-sm border rounded"
                      />
                    ) : (
                      <span className="text-sm text-gray-900">
                        {product.input}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingId === product.id ? (
                      <input
                        type="number"
                        defaultValue={product.output}
                        onChange={(e) => handleInputChange(e, "output")}
                        className="w-24 px-2 py-1 text-sm border rounded"
                      />
                    ) : (
                      <span className="text-sm text-gray-900">
                        {product.output}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.stock}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.total}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                    {editingId === product.id ? (
                      <>
                        <button
                          onClick={() => handleSaveEdit(product.id)}
                          className="text-green-600 hover:text-green-900"
                        >
                          <Save className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => setEditingId(null)}
                          className="text-gray-600 hover:text-gray-900"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEditProduct(product.id)}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          <Pencil className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDeleteProduct(product.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showPreview && (
        <PreviewModal
          product={newProduct}
          onConfirm={handleConfirmAdd}
          onCancel={() => setShowPreview(false)}
        />
      )}
    </div>
  );
};

export default ClientProducts;
