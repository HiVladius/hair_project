interface LocalitationModalProps {
    isOpen: boolean;
    onClose: () => void;
    location: string;
}

const LocalitationModal: React.FC<LocalitationModalProps> = ({ isOpen, onClose, location }) => {
  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-4 rounded">
          <h2 className="text-xl font-bold mb-4">Localizame</h2>
          <p>{location}</p>
          <button
            onClick={onClose}
            className="mt-4 bg-blue-400 text-white px-4 py-2 rounded"
          ></button>
        </div>
      </div>
    </>
  );
};

export default LocalitationModal;
