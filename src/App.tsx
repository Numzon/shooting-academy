import RouterProvider from './routes/RouteProvider';
import { queryClient, QueryClientProvider } from './lib/react-query';
import { Toaster } from 'sonner';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider />
      <Toaster richColors />
    </QueryClientProvider>
  );
}

export default App;
