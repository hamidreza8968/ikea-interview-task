import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Products from './pages/products/products.tsx';

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Products />
        </QueryClientProvider>
    );
};

export default App;
