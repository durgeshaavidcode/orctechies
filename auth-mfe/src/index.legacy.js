import React from 'react';
import ReactDOM from 'react-dom/client';

export default function AuthApp() {
  return <div>Auth Microfrontend</div>;
}

const rootElement = document.getElementById('_oratechies-root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<AuthApp />);
}
