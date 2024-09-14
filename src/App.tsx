import RouterProvider from './routes/RouteProvider';
import { queryClient, QueryClientProvider } from './lib/react-query';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider />
    </QueryClientProvider>
  );
}

export default App;
