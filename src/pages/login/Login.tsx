import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User,  EyeOff, Eye } from "lucide-react";
import logo from "../../assets/image.png";
import logo2 from "../../assets/beauty.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Lógica para verificar las credenciales del usuario (reemplaza con tu propia lógica)
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      // Almacena el rol del usuario en el almacenamiento local
      localStorage.setItem("userRole", data.role);
      // Redirige al usuario a la página principal
      navigate("/dashboard");
    } else {
      // Muestra un mensaje de error
      alert("Credenciales inválidas");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        
        <div className="transition-all duration-500 ease-in-out">
        <img
          src={username === "" && password === "" ? logo : logo2}
          alt="Logo"
          className={`w-60 mx-auto mb-8 image-transition ${username === "" && password === "" ? '' : 'image-transition-hidden'}`}
        />
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-2"
            >
              Nombre de usuario:
            </label>
            <div className="relative">
              <input
                type="text"
                id="username"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-10"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <User className="absolute left-3 top-3 text-gray-500" />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Contraseña:
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {showPassword ? (
                <EyeOff
                  className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <Eye
                  className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
          </div>
          {/* ... (botón de login) */}
        </form>
      </div>
    </div>
  );
};

export default Login;
