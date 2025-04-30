import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Products from "./components/Products/Products.tsx";

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Products />
        </QueryClientProvider>
    );
};

export default App;
