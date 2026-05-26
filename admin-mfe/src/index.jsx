import React from 'react';
import ReactDOM from 'react-dom/client';

export default function AdminApp() {
  return <div>Admin Microfrontend</div>;
}

const rootElement = document.getElementById('_oratechies-root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<AdminApp />);
}
