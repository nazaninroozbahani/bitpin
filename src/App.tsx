import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Layout from "./components/layout";
import Market from "./pages/market";
import MArkets from "./pages/markets";
import MarketsHome from "./pages/markets-home";

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
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route index element={<Navigate to="/markets" replace />} />
            <Route path="markets" element={<MArkets />}>
              <Route index element={<MarketsHome />} />
              <Route path=":id" element={<Market />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
