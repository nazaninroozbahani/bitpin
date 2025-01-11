import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Markets from "./pages/markets";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Market from "./pages/market";

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
        <BrowserRouter>
          <Routes>
            <Route
              index
              element={<Navigate to="/markets" replace />}
            />
            <Route path="markets">
              <Route index element={<Markets />} />
              <Route path=":id" element={<Market />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
