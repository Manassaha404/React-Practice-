import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addProduct, fetchProducts } from "../../api/products";
import Product from "../components/Product";

const ProductPage = () => {
  const queryClient = useQueryClient();
  // We use the useQuery hook to fetch the products data. The queryFn is set to fetchProducts,
  // which is the function that makes the API call to get the products data. The queryKey is set to ["products"],
  // which is a unique identifier for this query. This allows React Query to cache the data and manage it efficiently.
  const { data, isLoading, isError } = useQuery({
    queryFn: fetchProducts,
    queryKey: ["products"],
    staleTime: 0, // staleTime determines how long your fetched data is considered "fresh" before it goes "stale" (out of date).
    // When data is considered fresh, React Query will not trigger any background network requests.
    // If a component mounts and asks for that same data, React Query will instantly hand
    // it the cached data without ever bothering your server.
    gcTime: 0, // gcTime (garbage collection time) determines how long unused data stays in the cache before it is garbage collected.
  });

  // We use the useMutation hook to handle adding a new product. The mutationFn is set to addProduct,
  const { mutateAsync: addProductAsync } = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["products"] });
      // invalidateQueries is a method provided by the useQueryClient hook that allows you
      // to mark specific queries as "invalid" or "stale".
      // When a query is invalidated, React Query will automatically refetch the data the next time that
      // query is accessed. This is useful for ensuring that your UI always displays the most up-to-date
      // data after a mutation or any other action that changes the underlying data. In this case, after
      // successfully adding a new product, we invalidate the "products" query to trigger a refetch and update the
      // product list in the UI.
    },
  });
  if (isLoading || !data) {
    return <p>loading...</p>;
  }
  if (isError) {
    return <p>error...</p>;
  }
  return (
    <>
      <div>
        <button
          onClick={() =>
            addProductAsync({
              name: "New Product",
              category: "Category",
              price: 19.99,
              inStock: true,
            })
          }
        >
          Add Product
        </button>
      </div>
      <div>
        {data?.map((p) => (
          <Product key={p.id} product={p} />
        ))}
      </div>
    </>
  );
};
export default ProductPage;
