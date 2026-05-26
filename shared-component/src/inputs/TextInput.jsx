import React from 'react';

export default function TextInput({ label, placeholder, type = 'text', value, onChange }) {
  return (
    <div className="flex flex-col gap-1 w-full text-left">
      {label && <label className="text-xs font-medium text-gray-600">{label}</label>}
      <input 
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500 w-full"
      />
    </div>
  );
}