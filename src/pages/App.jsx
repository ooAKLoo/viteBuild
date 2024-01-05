import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import { QueryClient, QueryClientProvider } from 'react-query';

const App = () => {
  const queryClient = new QueryClient();

  console.log('App component is being rendered');

  console.log('Before Router');
  return (
    <QueryClientProvider client={queryClient}>
      <MainPage />
    </QueryClientProvider>
  );
  
  console.log('After Router');
  
};

export default App;
