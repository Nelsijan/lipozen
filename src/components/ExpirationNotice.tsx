import React from 'react';
import { getFutureDate } from '../utils/dateUtils';

export function ExpirationNotice() {
  const expirationDate = getFutureDate(2); // 2 days from now

  return (
    <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-2 rounded-md text-center mb-6">
      <p className="font-semibold">
        Due to high demand, we guarantee the presentation only until: {expirationDate}
      </p>
    </div>
  );
}
