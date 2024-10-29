

# Sistema de Gestión para Salones de Belleza

Este proyecto es una aplicación web para gestionar citas en salones de belleza, desarrollada con React y TypeScript. 
Utiliza Vite como herramienta de compilación y Tailwind CSS para los estilos.

## Funcionalidades

- **Programación de citas:** Permite a los clientes agendar citas seleccionando la fecha y hora deseada.
- **Formulario interactivo:** Los usuarios pueden ingresar su nombre, teléfono, correo electrónico y ubicación.
- **Integración con Google Maps:** Muestra un mapa con la ubicación seleccionada utilizando la API de Google Maps.
- **Interfaz moderna:** Diseño responsivo y atractivo gracias a Tailwind CSS.


## Tecnologías Utilizadas

- **React y React DOM:** Para la construcción de la interfaz de usuario.
- **TypeScript:** Proporciona tipado estático para un código más robusto.
- **Vite:** Herramienta de desarrollo rápida y ligera.
- **Tailwind CSS:** Framework CSS para estilos.
- **Lucide React:** Conjunto de iconos.
- **Date-fns:** Manejo y manipulación de fechas.
- **ESLint:** Linter para mantener la calidad del código.
- **@react-google-maps/api:** Integración con Google Maps.


### Instalación
Clona el repositorio:
```
git clone https://github.com/tu_usuario/tu_proyecto.git
cd tu_proyecto
```
### Instala las dependencias:

```
npm install
```

### Configura las variables de entorno:

```
VITE_GOOGLE_MAPS_API_KEY=tu_api_key
```

Crea un archivo .env en la raíz del proyecto y agrega tu clave de Google Maps:

### Inicia la aplicación en modo desarrollo:

```
npm run dev
```

La aplicación estará disponible en **http://localhost:5173.**

### Construcción para Producción
Para construir la aplicación para producción:

```
npm run build
```

Los archivos de producción estarán en la carpeta dist.

Contribuciones
Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para cualquier mejora o corrección.