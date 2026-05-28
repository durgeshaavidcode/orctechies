import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Button } from 'shared-ui'; // ◄ Common component used in host
import { loadRemote } from '@module-federation/runtime';

// Runtime Micro-frontend streaming
const LoginCard = React.lazy(() => import('auth_mfe/Auth'));
// const remoteModule = 'auth_mfe/LoginCard';
// const LoginCard = React.lazy(() => import(/* @vite-ignore */ `${remoteModule}`));
// const LoginCard = React.lazy(() => 
//   loadRemote('auth_mfe/LoginCard').then((module) => {
//     // If your component uses export default, return it cleanly
//     return module.default ? module : { default: module };
//   })
// );

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        {/* Navigation Bar */}
        <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-black text-blue-600">OraTechies MFE Shell</div>
          <div className="flex gap-4 items-center">
            <Link to="/" className="text-sm font-medium text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/auth" className="text-sm font-medium text-gray-600 hover:text-blue-600">Auth Portal</Link>
          </div>
        </nav>

        {/* Content Body */}
        <div className="flex-grow flex items-center justify-center p-6">
          <Routes>
            <Route path="/" element={
              <div className="text-center max-w-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome Landing Page</h2>
                <p className="text-gray-500 mb-4 text-sm">This is the local Host UI ecosystem. Below is a shared-ui workspace component module:</p>
                <Button variant="outline" onClick={() => alert('Host click working!')}>
                  Host Actions Trigger
                </Button>
              </div>
            } />
            
            <Route path="/auth/*" element={
              <Suspense fallback={<div className="text-gray-500 text-sm">Streaming remote container module...</div>}>
                <LoginCard />
              </Suspense>
            } />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}