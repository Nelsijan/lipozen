import React from 'react';
import { ViewerCounter } from '../components/ViewerCounter';
import { ExpirationNotice } from '../components/ExpirationNotice';
import { VideoPlayer } from '../components/VideoPlayer';

export function VSLPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
 
          
          <ViewerCounter />
          <ExpirationNotice />
          
          <VideoPlayer />
        </div>
      </main>
    </div>
  );
}