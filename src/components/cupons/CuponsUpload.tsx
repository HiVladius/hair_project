import { useState } from "react";

const CuponsUpload = () => {
  const [files, setfiles] = useState<File[]>([]);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const newFile = Array.from(e.dataTransfer.files);
    setfiles((prevFiles) => [...prevFiles, ...newFile]);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleUpload = () => {
    // Aquí puedes agregar la lógica para subir los archivos y actualizar las páginas correspondientes
    console.log("Archivos subidos:", files);
  };

  const handleRemove = (file: File) => {
    setfiles((prevFiles) => prevFiles.filter((f) => f !== file));
  };

  return (
    <>
    <div
      className="border-2 border-dashed border-gray-300 pt-4 rounded-lg flex flex-col items-center justify-center h-40"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <p className="text-center text-gray-500">
        Arrastra y suelta los cupones aquí
      </p>
    </div>
    <button 
      onClick={handleUpload} 
      className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
    >
      Subir cupones
    </button>
    </>
  );
};

export default CuponsUpload;
