



const Tinte = () => {
  return (
    <div className="h-full">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Tinte</h1>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src="path/to/image1.jpg" alt="Cupon 1" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">Cupon 1</h2>
          <p className="text-gray-600">Descripción del cupon 1</p>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src="path/to/image2.jpg" alt="Cupon 2" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">Cupon 2</h2>
          <p className="text-gray-600">Descripción del cupon 2</p>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src="path/to/image3.jpg" alt="Cupon 3" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">Cupon 3</h2>
          <p className="text-gray-600">Descripción del cupon 3</p>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src="path/to/image4.jpg" alt="Cupon 4" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">Cupon 4</h2>
          <p className="text-gray-600">Descripción del cupon 4</p>
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default Tinte;
