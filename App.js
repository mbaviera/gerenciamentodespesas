import React from 'react';
import {StatusBar, View} from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';
import {AuthProvider} from './src/providers/auth';

export default function App() {
  return (
    <>
      <AuthProvider>
        <StatusBar backgroundColor="#5db57d" />
        <AppNavigation />
      </AuthProvider>
    </>
  );
}
