import React from 'react';
import { Newspaper } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Newspaper className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">HealthNews</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Health</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Well-being</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Nutrition</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
