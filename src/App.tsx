import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios/:id" element={<ServiceDetail />} />
      </Routes>
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Vinilos Rápidos. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;