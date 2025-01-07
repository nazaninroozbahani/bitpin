import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Markets from "./pages/markets";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: true,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-8 min-h-screen">
        <Markets />
      </div>
    </QueryClientProvider>
  );
}

export default App;
