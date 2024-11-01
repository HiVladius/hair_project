
const Company = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Datos generales</h1>
      <div className="space-y-4">
        <h2>Descripcion de la empresa</h2>
      </div>

      <div className="mt-8">
      <p>Horarios: <strong> Lunes a Sabado</strong> de 09:00 a 19:00 horas</p>
      </div>

      <div className="mt-8">
      <p>Ubicacion: <strong> Calle 1234, Colonia Centro, Ciudad de Mexico</strong></p>
      </div>
    </>
  );
};

export default Company;