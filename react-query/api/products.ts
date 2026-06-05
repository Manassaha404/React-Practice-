const productsMock = [
  { 
    id: 101, 
    name: "Wireless Mouse", 
    category: "Electronics",
    price: 29.99, 
    inStock: true 
  },
  { 
    id: 102, 
    name: "Mechanical Keyboard", 
    category: "Electronics",
    price: 89.99, 
    inStock: false 
  },
  { 
    id: 103, 
    name: "Desk Mat", 
    category: "Accessories",
    price: 15.50, 
    inStock: true 
  }
];

export const fetchProducts = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("fetch products");
    return productsMock;
}

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    inStock: boolean;
}
export const addProduct = async (product: Omit<Product, 'id'>) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const newProduct = { id: Date.now(), ...product };
    productsMock.push(newProduct);
    console.log("add product", newProduct);
    return newProduct;
}