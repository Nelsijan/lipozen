import React, { useEffect } from 'react';

export function VideoPlayer() {
  useEffect(() => {
    // Carregar o script dinamicamente
    const script = document.createElement('script');
    script.src = "https://scripts.converteai.net/67dfd7df-f27b-48d8-8b7f-d4a0f42524e4/players/6754219a8b066aacdb1f57a2/player.js";
    script.async = true;
    document.head.appendChild(script);

    // Limpar o script quando o componente for desmontado
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div id="vid_6754219a8b066aacdb1f57a2" style={{ position: 'relative', width: '100%', padding: '177.3399014778325% 0 0' }}>
        <img
          id="thumb_6754219a8b066aacdb1f57a2"
          src="https://images.converteai.net/67dfd7df-f27b-48d8-8b7f-d4a0f42524e4/players/6754219a8b066aacdb1f57a2/thumbnail.jpg"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
          alt="thumbnail"
        />
        <div
          id="backdrop_6754219a8b066aacdb1f57a2"
          style={{
            WebkitBackdropFilter: 'blur(5px)',
            backdropFilter: 'blur(5px)',
            position: 'absolute',
            top: 0,
            height: '100%',
            width: '100%',
          }}
        />
      </div>
    </div>
  );
}
