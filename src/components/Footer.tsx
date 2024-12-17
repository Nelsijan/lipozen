import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center text-sm">
          <p className="mb-4">
            The information provided on this site does not replace a medical consultation.
            Always consult your doctor before starting any method or supplement.
          </p>
          <p>© 2024 HealthNews. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
