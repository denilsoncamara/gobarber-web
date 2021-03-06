import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import App from '../App';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  );
};

export default AppProvider;
