import RouterProvider from './routes/RouteProvider';
import { queryClient, QueryClientProvider } from './lib/react-query';
import { Toaster } from 'sonner';
import AuthenicateContextProvider from './contexts/AuthenticateContext';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthenicateContextProvider>
        <RouterProvider />
        <Toaster richColors />
      </AuthenicateContextProvider>
    </QueryClientProvider>
  );
}

export default App;
