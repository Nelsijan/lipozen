import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center text-sm">
          <p className="mb-4">
            As informações fornecidas neste site não substituem uma consulta médica.
            Consulte sempre seu médico antes de iniciar qualquer método ou suplemento.
          </p>
          <p>© 2024 HealthNews. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}