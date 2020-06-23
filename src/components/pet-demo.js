import React, { useEffect, useState } from 'react';

import './pet-demo.scss';

const SCREEN_CONFIG = {
  x: 0,
  y: 0,
  width: 64,
  height: 32,
};

function getRandomCoordinate(min, max, current) {
  const roundedMin = Math.ceil(min),
        roundedMax = Math.floor(max),
        randomNum = Math.floor(Math.random() * (roundedMax - roundedMin + 1)) + roundedMin;
  return current > randomNum ? current - 1 : current + 1;
}

export default function PetDemo() {
  const [fill, setFill] = useState('grub-one'),
        [position, setPosition] = useState({
          x: SCREEN_CONFIG.x + 18,
          y: SCREEN_CONFIG.y,
        });
        
  const toggleSprite = () => {
    setFill(currentFill => {
      if (currentFill.includes('one')) return currentFill.replace('one', 'two');
      if (currentFill.includes('two')) return currentFill.replace('two', 'one');
    });
  };

  const move = () => {
    setPosition(currentPosition => {
      const newX = getRandomCoordinate(0, SCREEN_CONFIG.width - SCREEN_CONFIG.height, currentPosition.x),
            newY = getRandomCoordinate(SCREEN_CONFIG.y - 1, SCREEN_CONFIG.y + 1, currentPosition.y);
      return { x: newX, y: newY };
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      toggleSprite();
      move();
    }, 1000);
    return () => clearInterval(interval);
  });

  const viewBox = `${SCREEN_CONFIG.x} ${SCREEN_CONFIG.y} ${SCREEN_CONFIG.width} ${SCREEN_CONFIG.height}`;

  return (
    <svg
      className="pet-demo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      height="200"
    >
      <defs>
        <filter id="body-shadow" x="0" y="0" width="200%" height="200%">
          <feOffset result="offOut" in="SourceGraphic" dx="4" dy="4" />
          <feColorMatrix result="matrixOut" in="offOut" type="matrix"
          values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.5 0" />
          <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="2" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>

        <filter id="pixel-shadow" x="0" y="0" width="200%" height="200%">
          <feOffset result="offOut" in="SourceAlpha" dx="0.2" dy="0.2" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="0.09" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>

        <filter id="button-shadow" x="0" y="0" width="200%" height="200%">
          <feOffset result="offOut" in="SourceAlpha" dx="0.3" dy="0.3" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="0.25" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>

        <filter id="sprite-shadow" x="0" y="0" width="200%" height="200%">
          <feOffset result="offOut" in="SourceGraphic" dx="0.1" dy="0.1" />
          <feColorMatrix result="matrixOut" in="offOut" type="matrix"
          values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.5 0" />
          <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="0.05" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>

        <filter id="display-shadow" x="0" y="0" width="200%" height="200%">
          <feOffset dx="0" dy="0" />
          <feGaussianBlur stdDeviation="0.5" result="offset-blur" />
          <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
          <feFlood floodColor="#000" floodOpacity="0.8" result="color" />
          <feComposite operator="in" in="color" in2="inverse" result="shadow" />
          <feComposite operator="over" in="shadow" in2="SourceGraphic" />
        </filter>

        <filter id="case-shadow" x="0" y="0" width="200%" height="200%">
          <feOffset dx="0" dy="0" />
          <feGaussianBlur stdDeviation="0.07" result="offset-blur" />
        </filter>

        <linearGradient id="body-color" x1="0%" y1="0%" x2="50%" y2="50%">
          <stop offset="0%" style={{ stopColor: 'rgb(252,252,252)', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'rgb(100,120,120)', stopOpacity: 0.8 }} />
        </linearGradient>

        <linearGradient id="screen-color" x1="0%" y1="0%" x2="30%" y2="10%">
          <stop offset="0%" style={{ stopColor: 'rgb(252,252,252)', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'rgb(151,165,150)', stopOpacity: 1 }} />
        </linearGradient>

        <linearGradient id="screen-shine" x1="0%" y1="0%" x2="30%" y2="10%">
          <stop offset="0%" style={{ stopColor: 'rgb(252,252,252)', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'rgb(151,165,150)', stopOpacity: 0 }} />
        </linearGradient>

        <clipPath id="screen-clip">
          <rect {...SCREEN_CONFIG} />
        </clipPath>

        <pattern id="egg-one" height="1" width="1" patternUnits="objectBoundingBox" patternContentUnits="userSpaceOnUse">
          <rect className="pet-demo__pixel" fill="currentColor" x="19" y="14" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="20" y="14" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="21" y="14" width="1" height="1" filter="url(#pixel-shadow)" />

          <rect className="pet-demo__pixel" fill="currentColor" x="18" y="15" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="22" y="15" width="1" height="1" filter="url(#pixel-shadow)" />

          <rect className="pet-demo__pixel" fill="currentColor" x="17" y="16" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="23" y="16" width="1" height="1" filter="url(#pixel-shadow)" />

          <rect className="pet-demo__pixel" fill="currentColor" x="16" y="17" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="24" y="17" width="1" height="1" filter="url(#pixel-shadow)" />

          <rect className="pet-demo__pixel" fill="currentColor" x="15" y="18" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="25" y="18" width="1" height="1" filter="url(#pixel-shadow)" />

          <rect className="pet-demo__pixel" fill="currentColor" x="14" y="19" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="26" y="19" width="1" height="1" filter="url(#pixel-shadow)" />

          <rect className="pet-demo__pixel" fill="currentColor" x="14" y="20" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="26" y="20" width="1" height="1" filter="url(#pixel-shadow)" />

          <rect className="pet-demo__pixel" fill="currentColor" x="13" y="21" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="27" y="21" width="1" height="1" filter="url(#pixel-shadow)" />

          <rect className="pet-demo__pixel" fill="currentColor" x="13" y="22" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="27" y="22" width="1" height="1" filter="url(#pixel-shadow)" />

          <rect className="pet-demo__pixel" fill="currentColor" x="12" y="23" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="28" y="23" width="1" height="1" filter="url(#pixel-shadow)" />

          <rect className="pet-demo__pixel" fill="currentColor" x="12" y="24" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="28" y="24" width="1" height="1" filter="url(#pixel-shadow)" />

          <rect className="pet-demo__pixel" fill="currentColor" x="11" y="25" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="29" y="25" width="1" height="1" filter="url(#pixel-shadow)" />

          <rect className="pet-demo__pixel" fill="currentColor" x="11" y="26" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="29" y="26" width="1" height="1" filter="url(#pixel-shadow)" />

          <rect className="pet-demo__pixel" fill="currentColor" x="11" y="27" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="28" y="27" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="29" y="27" width="1" height="1" filter="url(#pixel-shadow)" />

          <rect className="pet-demo__pixel" fill="currentColor" x="10" y="28" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="29" y="28" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="30" y="28" width="1" height="1" filter="url(#pixel-shadow)" />

          <rect className="pet-demo__pixel" fill="currentColor" x="10" y="29" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="28" y="29" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="30" y="29" width="1" height="1" filter="url(#pixel-shadow)" />

          <rect className="pet-demo__pixel" fill="currentColor" x="10" y="30" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="26" y="30" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="29" y="30" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="30" y="30" width="1" height="1" filter="url(#pixel-shadow)" />

          <rect className="pet-demo__pixel" fill="currentColor" x="10" y="31" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="28" y="31" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="30" y="31" width="1" height="1" filter="url(#pixel-shadow)" />

          <rect className="pet-demo__pixel" fill="currentColor" x="10" y="32" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="25" y="32" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="27" y="32" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="29" y="32" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="30" y="32" width="1" height="1" filter="url(#pixel-shadow)" />

          <rect className="pet-demo__pixel" fill="currentColor" x="11" y="33" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="23" y="33" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="28" y="33" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="29" y="33" width="1" height="1" filter="url(#pixel-shadow)" />

          <rect className="pet-demo__pixel" fill="currentColor" x="11" y="34" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="13" y="34" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="25" y="34" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="27" y="34" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="29" y="34" width="1" height="1" filter="url(#pixel-shadow)" />

          <rect className="pet-demo__pixel" fill="currentColor" x="12" y="35" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="14" y="35" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="19" y="35" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="22" y="35" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="24" y="35" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="26" y="35" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="28" y="35" width="1" height="1" filter="url(#pixel-shadow)" />

          <rect className="pet-demo__pixel" fill="currentColor" x="13" y="36" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="16" y="36" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="23" y="36" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="25" y="36" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="27" y="36" width="1" height="1" filter="url(#pixel-shadow)" />

          <rect className="pet-demo__pixel" fill="currentColor" x="14" y="37" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="15" y="37" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="18" y="37" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="20" y="37" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="22" y="37" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="24" y="37" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="25" y="37" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="26" y="37" width="1" height="1" filter="url(#pixel-shadow)" />

          <rect className="pet-demo__pixel" fill="currentColor" x="16" y="38" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="17" y="38" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="19" y="38" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="21" y="38" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="23" y="38" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="24" y="38" width="1" height="1" filter="url(#pixel-shadow)" />

          <rect className="pet-demo__pixel" fill="currentColor" x="18" y="39" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="19" y="39" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="20" y="39" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="21" y="39" width="1" height="1" filter="url(#pixel-shadow)" />
          <rect className="pet-demo__pixel" fill="currentColor" x="22" y="39" width="1" height="1" filter="url(#pixel-shadow)" />
        </pattern>

        <pattern id="grub-one" height="1" width="1" patternUnits="objectBoundingBox" patternContentUnits="userSpaceOnUse">
          <path d="M12 3h1v1h-1z"/>
          <path d="M13 3h1v1h-1z"/>
          <path d="M14 3h1v1h-1z"/>
          <path d="M15 3h1v1h-1z"/>
          <path d="M16 3h1v1h-1z"/>
          <path d="M11 4h1v1h-1z"/>
          <path d="M12 4h1v1h-1z"/>
          <path d="M13 4h1v1h-1z"/>
          <path d="M14 4h1v1h-1z"/>
          <path d="M17 4h1v1h-1z"/>
          <path d="M10 5h1v1h-1z"/>
          <path d="M11 5h1v1h-1z"/>
          <path d="M12 5h1v1h-1z"/>
          <path d="M13 5h1v1h-1z"/>
          <path d="M18 5h1v1h-1z"/>
          <path d="M10 6h1v1h-1z"/>
          <path d="M12 6h1v1h-1z"/>
          <path d="M19 6h1v1h-1z"/>
          <path d="M9 7h1v1H9z"/>
          <path d="M10 7h1v1h-1z"/>
          <path d="M11 7h1v1h-1z"/>
          <path d="M19 7h1v1h-1z"/>
          <path d="M10 8h1v1h-1z"/>
          <path d="M15 8h1v1h-1z"/>
          <path d="M20 8h1v1h-1z"/>
          <path d="M8 9h1v1H8z"/>
          <path d="M11 9h1v1h-1z"/>
          <path d="M21 9h1v1h-1z"/>
          <path d="M9 10h1v1H9z"/>
          <path d="M11 10h1v1h-1z"/>
          <path d="M12 10h1v1h-1z"/>
          <path d="M13 10h1v1h-1z"/>
          <path d="M17 10h1v1h-1z"/>
          <path d="M22 10h1v1h-1z"/>
          <path d="M10 11h1v1h-1z"/>
          <path d="M11 11h1v1h-1z"/>
          <path d="M12 11h1v1h-1z"/>
          <path d="M22 11h1v1h-1z"/>
          <path d="M8 12h1v1H8z"/>
          <path d="M9 12h1v1H9z"/>
          <path d="M11 12h1v1h-1z"/>
          <path d="M13 12h1v1h-1z"/>
          <path d="M14 12h1v1h-1z"/>
          <path d="M19 12h1v1h-1z"/>
          <path d="M23 12h1v1h-1z"/>
          <path d="M7 13h1v1H7z"/>
          <path d="M9 13h1v1H9z"/>
          <path d="M10 13h1v1h-1z"/>
          <path d="M12 13h1v1h-1z"/>
          <path d="M13 13h1v1h-1z"/>
          <path d="M14 13h1v1h-1z"/>
          <path d="M16 13h1v1h-1z"/>
          <path d="M24 13h1v1h-1z"/>
          <path d="M6 14h1v1H6z"/>
          <path d="M8 14h1v1H8z"/>
          <path d="M10 14h1v1h-1z"/>
          <path d="M11 14h1v1h-1z"/>
          <path d="M15 14h1v1h-1z"/>
          <path d="M16 14h1v1h-1z"/>
          <path d="M24 14h1v1h-1z"/>
          <path d="M5 15h1v1H5z"/>
          <path d="M7 15h1v1H7z"/>
          <path d="M9 15h1v1H9z"/>
          <path d="M11 15h1v1h-1z"/>
          <path d="M13 15h1v1h-1z"/>
          <path d="M14 15h1v1h-1z"/>
          <path d="M15 15h1v1h-1z"/>
          <path d="M16 15h1v1h-1z"/>
          <path d="M20 15h1v1h-1z"/>
          <path d="M25 15h1v1h-1z"/>
          <path d="M4 16h1v1H4z"/>
          <path d="M6 16h1v1H6z"/>
          <path d="M8 16h1v1H8z"/>
          <path d="M10 16h1v1h-1z"/>
          <path d="M11 16h1v1h-1z"/>
          <path d="M17 16h1v1h-1z"/>
          <path d="M25 16h1v1h-1z"/>
          <path d="M4 17h1v1H4z"/>
          <path d="M5 17h1v1H5z"/>
          <path d="M7 17h1v1H7z"/>
          <path d="M9 17h1v1H9z"/>
          <path d="M11 17h1v1h-1z"/>
          <path d="M17 17h1v1h-1z"/>
          <path d="M25 17h1v1h-1z"/>
          <path d="M4 18h1v1H4z"/>
          <path d="M6 18h1v1H6z"/>
          <path d="M8 18h1v1H8z"/>
          <path d="M11 18h1v1h-1z"/>
          <path d="M18 18h1v1h-1z"/>
          <path d="M21 18h1v1h-1z"/>
          <path d="M26 18h1v1h-1z"/>
          <path d="M4 19h1v1H4z"/>
          <path d="M7 19h1v1H7z"/>
          <path d="M9 19h1v1H9z"/>
          <path d="M12 19h1v1h-1z"/>
          <path d="M18 19h1v1h-1z"/>
          <path d="M26 19h1v1h-1z"/>
          <path d="M5 20h1v1H5z"/>
          <path d="M12 20h1v1h-1z"/>
          <path d="M18 20h1v1h-1z"/>
          <path d="M26 20h1v1h-1z"/>
          <path d="M5 21h1v1H5z"/>
          <path d="M13 21h1v1h-1z"/>
          <path d="M17 21h1v1h-1z"/>
          <path d="M21 21h1v1h-1z"/>
          <path d="M25 21h1v1h-1z"/>
          <path d="M5 22h1v1H5z"/>
          <path d="M14 22h1v1h-1z"/>
          <path d="M15 22h1v1h-1z"/>
          <path d="M16 22h1v1h-1z"/>
          <path d="M25 22h1v1h-1z"/>
          <path d="M6 23h1v1H6z"/>
          <path d="M19 23h1v1h-1z"/>
          <path d="M24 23h1v1h-1z"/>
          <path d="M6 24h1v1H6z"/>
          <path d="M13 24h1v1h-1z"/>
          <path d="M24 24h1v1h-1z"/>
          <path d="M7 25h1v1H7z"/>
          <path d="M16 25h1v1h-1z"/>
          <path d="M23 25h1v1h-1z"/>
          <path d="M8 26h1v1H8z"/>
          <path d="M22 26h1v1h-1z"/>
          <path d="M9 27h1v1H9z"/>
          <path d="M10 27h1v1h-1z"/>
          <path d="M20 27h1v1h-1z"/>
          <path d="M21 27h1v1h-1z"/>
          <path d="M11 28h1v1h-1z"/>
          <path d="M12 28h1v1h-1z"/>
          <path d="M13 28h1v1h-1z"/>
          <path d="M18 28h1v1h-1z"/>
          <path d="M19 28h1v1h-1z"/>
          <path d="M14 29h1v1h-1z"/>
          <path d="M15 29h1v1h-1z"/>
          <path d="M16 29h1v1h-1z"/>
          <path d="M17 29h1v1h-1z"/>
        </pattern>

        <pattern id="grub-two" height="1" width="1" patternUnits="objectBoundingBox" patternContentUnits="userSpaceOnUse">
          <g>
            <path d="M15 2h1v1h-1z"/>
            <path d="M16 2h1v1h-1z"/>
            <path d="M17 2h1v1h-1z"/>
            <path d="M18 2h1v1h-1z"/>
            <path d="M19 2h1v1h-1z"/>
            <path d="M14 3h1v1h-1z"/>
            <path d="M15 3h1v1h-1z"/>
            <path d="M16 3h1v1h-1z"/>
            <path d="M17 3h1v1h-1z"/>
            <path d="M20 3h1v1h-1z"/>
            <path d="M13 4h1v1h-1z"/>
            <path d="M14 4h1v1h-1z"/>
            <path d="M15 4h1v1h-1z"/>
            <path d="M16 4h1v1h-1z"/>
            <path d="M21 4h1v1h-1z"/>
            <path d="M13 5h1v1h-1z"/>
            <path d="M15 5h1v1h-1z"/>
            <path d="M22 5h1v1h-1z"/>
            <path d="M12 6h1v1h-1z"/>
            <path d="M13 6h1v1h-1z"/>
            <path d="M14 6h1v1h-1z"/>
            <path d="M22 6h1v1h-1z"/>
            <path d="M13 7h1v1h-1z"/>
            <path d="M18 7h1v1h-1z"/>
            <path d="M23 7h1v1h-1z"/>
            <path d="M11 8h1v1h-1z"/>
            <path d="M14 8h1v1h-1z"/>
            <path d="M23 8h1v1h-1z"/>
            <path d="M12 9h1v1h-1z"/>
            <path d="M14 9h1v1h-1z"/>
            <path d="M15 9h1v1h-1z"/>
            <path d="M16 9h1v1h-1z"/>
            <path d="M20 9h1v1h-1z"/>
            <path d="M24 9h1v1h-1z"/>
            <path d="M13 10h1v1h-1z"/>
            <path d="M14 10h1v1h-1z"/>
            <path d="M15 10h1v1h-1z"/>
            <path d="M24 10h1v1h-1z"/>
            <path d="M12 11h1v1h-1z"/>
            <path d="M14 11h1v1h-1z"/>
            <path d="M16 11h1v1h-1z"/>
            <path d="M17 11h1v1h-1z"/>
            <path d="M25 11h1v1h-1z"/>
            <path d="M8 12h1v1H8z"/>
            <path d="M9 12h1v1H9z"/>
            <path d="M13 12h1v1h-1z"/>
            <path d="M14 12h1v1h-1z"/>
            <path d="M15 12h1v1h-1z"/>
            <path d="M16 12h1v1h-1z"/>
            <path d="M17 12h1v1h-1z"/>
            <path d="M21 12h1v1h-1z"/>
            <path d="M25 12h1v1h-1z"/>
            <path d="M7 13h1v1H7z"/>
            <path d="M9 13h1v1H9z"/>
            <path d="M10 13h1v1h-1z"/>
            <path d="M15 13h1v1h-1z"/>
            <path d="M16 13h1v1h-1z"/>
            <path d="M17 13h1v1h-1z"/>
            <path d="M18 13h1v1h-1z"/>
            <path d="M25 13h1v1h-1z"/>
            <path d="M6 14h1v1H6z"/>
            <path d="M8 14h1v1H8z"/>
            <path d="M10 14h1v1h-1z"/>
            <path d="M11 14h1v1h-1z"/>
            <path d="M14 14h1v1h-1z"/>
            <path d="M17 14h1v1h-1z"/>
            <path d="M18 14h1v1h-1z"/>
            <path d="M25 14h1v1h-1z"/>
            <path d="M5 15h1v1H5z"/>
            <path d="M7 15h1v1H7z"/>
            <path d="M9 15h1v1H9z"/>
            <path d="M11 15h1v1h-1z"/>
            <path d="M15 15h1v1h-1z"/>
            <path d="M16 15h1v1h-1z"/>
            <path d="M17 15h1v1h-1z"/>
            <path d="M18 15h1v1h-1z"/>
            <path d="M22 15h1v1h-1z"/>
            <path d="M26 15h1v1h-1z"/>
            <path d="M4 16h1v1H4z"/>
            <path d="M6 16h1v1H6z"/>
            <path d="M8 16h1v1H8z"/>
            <path d="M10 16h1v1h-1z"/>
            <path d="M11 16h1v1h-1z"/>
            <path d="M18 16h1v1h-1z"/>
            <path d="M26 16h1v1h-1z"/>
            <path d="M4 17h1v1H4z"/>
            <path d="M5 17h1v1H5z"/>
            <path d="M7 17h1v1H7z"/>
            <path d="M9 17h1v1H9z"/>
            <path d="M11 17h1v1h-1z"/>
            <path d="M18 17h1v1h-1z"/>
            <path d="M26 17h1v1h-1z"/>
            <path d="M4 18h1v1H4z"/>
            <path d="M6 18h1v1H6z"/>
            <path d="M8 18h1v1H8z"/>
            <path d="M11 18h1v1h-1z"/>
            <path d="M18 18h1v1h-1z"/>
            <path d="M22 18h1v1h-1z"/>
            <path d="M26 18h1v1h-1z"/>
            <path d="M4 19h1v1H4z"/>
            <path d="M7 19h1v1H7z"/>
            <path d="M9 19h1v1H9z"/>
            <path d="M12 19h1v1h-1z"/>
            <path d="M18 19h1v1h-1z"/>
            <path d="M26 19h1v1h-1z"/>
            <path d="M5 20h1v1H5z"/>
            <path d="M12 20h1v1h-1z"/>
            <path d="M18 20h1v1h-1z"/>
            <path d="M26 20h1v1h-1z"/>
            <path d="M5 21h1v1H5z"/>
            <path d="M13 21h1v1h-1z"/>
            <path d="M17 21h1v1h-1z"/>
            <path d="M21 21h1v1h-1z"/>
            <path d="M25 21h1v1h-1z"/>
            <path d="M5 22h1v1H5z"/>
            <path d="M14 22h1v1h-1z"/>
            <path d="M15 22h1v1h-1z"/>
            <path d="M16 22h1v1h-1z"/>
            <path d="M25 22h1v1h-1z"/>
            <path d="M6 23h1v1H6z"/>
            <path d="M19 23h1v1h-1z"/>
            <path d="M24 23h1v1h-1z"/>
            <path d="M6 24h1v1H6z"/>
            <path d="M13 24h1v1h-1z"/>
            <path d="M24 24h1v1h-1z"/>
            <path d="M7 25h1v1H7z"/>
            <path d="M16 25h1v1h-1z"/>
            <path d="M23 25h1v1h-1z"/>
            <path d="M8 26h1v1H8z"/>
            <path d="M22 26h1v1h-1z"/>
            <path d="M9 27h1v1H9z"/>
            <path d="M10 27h1v1h-1z"/>
            <path d="M20 27h1v1h-1z"/>
            <path d="M21 27h1v1h-1z"/>
            <path d="M11 28h1v1h-1z"/>
            <path d="M12 28h1v1h-1z"/>
            <path d="M13 28h1v1h-1z"/>
            <path d="M18 28h1v1h-1z"/>
            <path d="M19 28h1v1h-1z"/>
            <path d="M14 29h1v1h-1z"/>
            <path d="M15 29h1v1h-1z"/>
            <path d="M16 29h1v1h-1z"/>
            <path d="M17 29h1v1h-1z"/>
          </g>
        </pattern>

        <pattern id="pixel-grid" width="1" height="1" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
          <rect x="-0.05" y="-0.05" width="1" height="1" fillOpacity="0.03" />
        </pattern>
      </defs>

      <g className="pet-demo__screen" filter="url(#display-shadow)">
        <rect className="pet-demo__display" fill="url(#screen-color)" {...SCREEN_CONFIG} />
        <rect clipPath="url(#screen-color)" fill="url(#pixel-grid)" {...SCREEN_CONFIG} />

        <g className="pet-demo__pixels" clipPath="url(#screen-clip)" filter="url(#sprite-shadow)">
          <rect x={position.x} y={position.y} width={29.90} height={29.90} fill={`url(#${fill})`} fillOpacity="0.8" />
        </g>

        <rect {...SCREEN_CONFIG} fill="url(#screen-shine)" />
      </g>
    </svg>
  );
}
