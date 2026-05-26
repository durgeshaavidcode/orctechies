import React from 'react';

export default function Button({ children, onClick, variant = 'primary' }) {
  const baseStyle = "px-4 py-2 rounded font-semibold text-sm transition-all";
  const styles = variant === 'primary' 
    ? `${baseStyle} bg-blue-600 text-white hover:bg-blue-700`
    : `${baseStyle} border border-gray-300 text-gray-700 hover:bg-gray-50`;

  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
}