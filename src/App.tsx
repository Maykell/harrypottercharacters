import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Characters from './screens/Characters/CharactersScreen';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Characters />
    </QueryClientProvider>
  );
}
