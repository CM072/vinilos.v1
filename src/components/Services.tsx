import { Link } from 'react-router-dom';
import { services } from '../data/services';

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Nuestros Servicios</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Ofrecemos una amplia gama de soluciones en rotulación y vinilos para satisfacer todas tus necesidades de comunicación visual
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="relative">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="bg-blue-50 p-3 rounded-lg mb-4">
                  <p className="text-lg font-semibold text-blue-600">
                    Desde {service.basePrice}€ / {service.priceUnit}
                  </p>
                </div>
                <Link 
                  to={`/servicios/${service.id}`}
                  className="mt-4 text-blue-600 hover:text-blue-800 font-semibold flex items-center"
                >
                  Saber más
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}