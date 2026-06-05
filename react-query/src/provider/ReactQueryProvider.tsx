import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//here how we create a query client and wrap our app with the provider to make the client available throughout the component tree
const queryClient = new QueryClient();

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    // The QueryClientProvider component is used to provide the query client to the React component tree.
    // It takes a client prop, which is the instance of the QueryClient we created earlier,
    // and wraps around the children components that need access to the query client.
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
