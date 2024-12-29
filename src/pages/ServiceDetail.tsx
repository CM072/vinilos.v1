import { useParams } from 'react-router-dom';
import { services } from '../data/services';
import { Mail } from 'lucide-react';

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Servicio no encontrado</h1>
          <p className="text-gray-600">El servicio que buscas no está disponible.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="relative h-96">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <h1 className="absolute bottom-8 left-8 text-4xl font-bold text-white">
                {service.title}
              </h1>
            </div>
            
            <div className="p-8">
              <p className="text-xl text-gray-700 mb-8">
                {service.fullDescription}
              </p>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Características</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold mb-2">Precio de Referencia</h2>
                <p className="text-3xl font-bold text-blue-600">
                  {service.basePrice}€ <span className="text-lg text-gray-600">/ {service.priceUnit}</span>
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  *Precio base orientativo. El precio final puede variar según especificaciones del proyecto.
                </p>
              </div>

              <div className="text-center">
                <a
                  href={`mailto:vinilos@grupomanzanares.com?subject=Consulta sobre ${service.title}&body=Hola, me gustaría recibir más información sobre ${service.title}.`}
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
                >
                  <Mail className="mr-2" size={20} />
                  Solicitar Presupuesto
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}