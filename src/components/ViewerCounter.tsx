import React, { useState, useEffect } from 'react';
import { getRandomViewerCount, formatNumber } from '../utils/viewerCounter';

export function ViewerCounter() {
  const [viewerCount, setViewerCount] = useState(getRandomViewerCount());

  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount(getRandomViewerCount());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md text-center mb-6">
      <p className="font-semibold">
        {formatNumber(viewerCount)} pessoas estão assistindo a esse vídeo agora
      </p>
    </div>
  );
}