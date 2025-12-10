// frontend/src/App.jsx
import { useEffect, useState } from 'react';

function App() {
  const [mensaje, setMensaje] = useState('Cargando...');

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    fetch(`${apiUrl}/api/saludo`)
      .then((res) => res.json())
      .then((data) => setMensaje(data.mensaje))
      .catch(() =>
        setMensaje('No se pudo conectar con el backend (solo frontend)')
      );
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Frontend Vite + React</h1>
      <p>Mensaje desde el backend:</p>
      <pre>{mensaje}</pre>
    </div>
  );
}

export default App;
