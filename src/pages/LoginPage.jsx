import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [selectedAccount, setSelectedAccount] = useState(null);
  
  const accounts = [
    {
      id: 1,
      email: 'user1@example.com',
      avatar: 'https://via.placeholder.com/50',
      name: 'Aswin Kumar'
    },
    {
      id: 2,
      email: 'user2@example.com',
      avatar: 'https://via.placeholder.com/50',
      name: 'Fida Fathima N'
    },

    {
      id: 3,
      email: 'user3@example.com',
      avatar: 'https://via.placeholder.com/50',
      name: 'Ashish George'
    },
    {
      id: 4,
      email: 'user4@example.com',
      avatar: 'https://via.placeholder.com/50',
      name: 'A Nishok Perumal'
    },
  ];

  const handleLogin = () => {
    if (selectedAccount) {
      // In a real app, you'd handle authentication here
      // For now, we'll just simulate login by storing user info in localStorage
      localStorage.setItem('user', JSON.stringify(selectedAccount));
      navigate('/home');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-primary">
      <div className="bg-white/5 rounded-xl p-8 w-full max-w-md backdrop-blur-sm">
        <h2 className="text-3xl text-accent mb-8 text-center">Login</h2>
        <div className="space-y-4">
          {accounts.map(account => (
            <div 
              key={account.id}
              className={`flex items-center p-4 rounded-lg cursor-pointer transition-all duration-300
                ${selectedAccount?.id === account.id 
                  ? 'bg-accent/20 border-2 border-accent' 
                  : 'bg-white/10 hover:bg-white/20'}`}
              onClick={() => setSelectedAccount(account)}
            >
              <img 
                src={account.avatar} 
                alt="Profile" 
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="flex flex-col">
                <span className="text-white">{account.name}</span>
                <span className="text-secondary text-sm">{account.email}</span>
              </div>
            </div>
          ))}
        </div>
        <button 
          className={`btn w-full mt-6 ${
            selectedAccount 
              ? 'btn-primary' 
              : 'bg-secondary/50 cursor-not-allowed'
          }`}
          onClick={handleLogin}
          disabled={!selectedAccount}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;