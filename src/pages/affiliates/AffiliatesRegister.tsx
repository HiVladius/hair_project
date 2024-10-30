import React, { useState } from 'react';
import { Upload } from 'lucide-react';

interface AffiliateFormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  position: string;
  specialties: string[];
  bankAccount: string;
  proofOfAddress: File | null;
}

const SPECIALTIES = [
  'Peinado',
  'Corte',
  'Tinte',
  'Manicure',
  'Pedicure',
  'Maquillaje',
  'Tratamientos Capilares',
  'Depilación',
  'Masajes',
];

const AffiliateRegister = () => {
  const [formData, setFormData] = useState<AffiliateFormData>({
    name: '',
    phone: '',
    email: '',
    address: '',
    position: '',
    specialties: [],
    bankAccount: '',
    proofOfAddress: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSpecialtyChange = (specialty: string) => {
    setFormData((prev) => ({
      ...prev,
      specialties: prev.specialties.includes(specialty)
        ? prev.specialties.filter((s) => s !== specialty)
        : [...prev.specialties, specialty],
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setFormData((prev) => ({ ...prev, proofOfAddress: file }));
    } else {
      alert('Por favor, sube un archivo PDF');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Registro de Afiliado</h2>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nombre Completo
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Teléfono
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Dirección
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Puesto a Desarrollar
          </label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Especialidades
          </label>
          <div className="grid grid-cols-2 gap-4">
            {SPECIALTIES.map((specialty) => (
              <label key={specialty} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.specialties.includes(specialty)}
                  onChange={() => handleSpecialtyChange(specialty)}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-sm text-gray-700">{specialty}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            CLABE Interbancaria
          </label>
          <input
            type="text"
            name="bankAccount"
            value={formData.bankAccount}
            onChange={handleInputChange}
            pattern="[0-9]{18}"
            maxLength={18}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Comprobante de Domicilio (PDF)
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="proof-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span>Subir archivo</span>
                  <input
                    id="proof-upload"
                    name="proof-upload"
                    type="file"
                    accept=".pdf"
                    className="sr-only"
                    onChange={handleFileChange}
                    required
                  />
                </label>
              </div>
              <p className="text-xs text-gray-500">PDF hasta 10MB</p>
              {formData.proofOfAddress && (
                <p className="text-sm text-green-600">
                  Archivo seleccionado: {formData.proofOfAddress.name}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Registrar Afiliado
          </button>
        </div>
      </form>
    </div>
  );
};

export default AffiliateRegister;