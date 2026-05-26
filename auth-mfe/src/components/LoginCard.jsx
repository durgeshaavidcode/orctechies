import React, { useState } from 'react';
import { Button, TextInput } from 'shared-ui';

export default function LoginCard() {
  const [email, setEmail] = useState('');
  
  return (
    <div className="p-6 max-w-sm w-full bg-white rounded-lg border border-gray-200 shadow-md text-center">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Sign Inin</h3>
      <div className="flex flex-col gap-4 mb-6">
        <TextInput 
          label="Email Address" 
          placeholder="you@orctechies.com" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <TextInput label="Password" type="password" placeholder="••••••••" />
      </div>
      <div className="flex gap-2 justify-end">
        <Button variant="outline">Cancel</Button>
        <Button variant="primary" onClick={() => alert(`Logging in: ${email}`)}>Proceed</Button>
      </div>
    </div>
  );
}