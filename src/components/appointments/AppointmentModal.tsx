import React, { useState, useCallback, useRef } from "react";
import { X } from "lucide-react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { format } from "date-fns";
// import { es } from 'date-fns/locale';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: Date;
  onSubmit: (appointmentData: AppointmentData) => void;
}

interface AppointmentData {
  date: Date;
  clientName: string;
  phone: string;
  email?: string;
  location: string;
  coordinates?: google.maps.LatLngLiteral;
}

const GOOGLE_MAPS_API_KEY = import.meta.env.GOOGLE_MAPS_API_KEY /*"AIzaSyDNTNVk8vR0dPku0I9ZVUJjzb2j2i0oOLY";*/
const defaultCenter = { lat: 19.4326, lng: -99.1332 }; // Mexico City

const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  selectedDate,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<AppointmentData>({
    date: selectedDate,
    clientName: "",
    phone: "",
    email: "",
    location: "",
  });
  const [coordinates, setCoordinates] =
    useState<google.maps.LatLngLiteral>(defaultCenter);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const geocoder = useRef<google.maps.Geocoder>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "location" && value) {
      geocodeAddress(value);
    }
  };

  const geocodeAddress = useCallback(
    (address: string) => {
      if (!geocoder.current) {
        geocoder.current = new google.maps.Geocoder();
      }

      geocoder.current.geocode({ address }, (results, status) => {
        if (status === "OK" && results?.[0]?.geometry?.location) {
          const location = results[0].geometry.location;
          const newCoordinates = {
            lat: location.lat(),
            lng: location.lng(),
          };
          setCoordinates(newCoordinates);
          map?.panTo(newCoordinates);
        }
      });
    },
    [map]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...formData, coordinates });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Nueva Cita</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Fecha
              </label>
              <input
                type="datetime-local"
                name="date"
                value={format(formData.date, "yyyy-MM-dd'T'HH:mm")}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    date: new Date(e.target.value),
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre del Cliente
              </label>
              <input
                type="text"
                name="clientName"
                value={formData.clientName}
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
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ubicación
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div className="h-64">
              <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
                <GoogleMap
                  mapContainerClassName="w-full h-full rounded-md"
                  center={coordinates}
                  zoom={15}
                  onLoad={setMap}
                >
                  <Marker position={coordinates} />
                </GoogleMap>
              </LoadScript>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
