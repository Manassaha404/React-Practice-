import TodoPage from "./features/ProductPage";
import ReactQueryProvider from "./provider/ReactQueryProvider";

function App() {
  return (
    // We wrap our app with the ReactQueryProvider to make the query
    // client available throughout the component tree. This allows us to use
    // React Query's hooks, such as useQuery and useMutation, in any component
    // that is a descendant of the provider.
    <ReactQueryProvider >
      <TodoPage />
    </ReactQueryProvider>
  );
}

export default App;
