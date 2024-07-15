import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import axios from "axios";

export type CartItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
};

export type Address = {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
};

export type PaymentMethod = {
  nameOnCard: string;
  cardNumber: string;
  expMonth: string;
  expYear: string;
  cvv: string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  increaseCartItem: (itemId: number) => void;
  decreaseCartItem: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
  subtotal: number;
  productDetails: CartItem | null;
  setProductDetails: (item: CartItem | null) => void;
  products: CartItem[];
  fetchProducts: (page: number, size: number) => void;
  fetchProductDetails: (productId: number) => void;
  address: Address | null; 
  setAddress: (address: Address) => void; 
  paymentMethod: PaymentMethod | null;
  setPaymentMethod: (paymentMethod: PaymentMethod) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [productDetails, setProductDetails] = useState<CartItem | null>(null);
  const [address, setAddress] = useState<Address | null>(null); 
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null);
  const [products, setProducts] = useState<CartItem[]>([]);

  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setSubtotal(total);
  }, [cart]);

  const fetchProducts = async (page: number = 1, size: number = 12) => {
    try {
      const response = await axios.get(`https://timbu-get-all-products.reavdev.workers.dev/`, {
        params: {
          organization_id: "9a3f8ef8d73248dcb9e1c475e1d6ea4c",
          reverse_sort: false,
          page: page,
          size,
          Appid: "OQBQLIXUQGC2A6S",
          Apikey: "eef148a9c86e4ad5800ff9eed427d6e520240715110520781437"
        }
      });
      setProducts(response.data.items);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchProductDetails = async (productId: number) => {
    try {
      const response = await axios.get(`https://api.timbu.cloud/products/${productId}`, {
        params: {
          organization_id: "9a3f8ef8d73248dcb9e1c475e1d6ea4c",
          APP_ID: "OQBQLIXUQGC2A6S",
          API_KEY: "eef148a9c86e4ad5800ff9eed427d6e520240715110520781437"
        }
      });
      setProductDetails(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const increaseCartItem = (itemId: number) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item))
    );
  };

  const decreaseCartItem = (itemId: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const removeFromCart = (itemId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseCartItem,
        decreaseCartItem,
        removeFromCart,
        clearCart,
        subtotal,
        productDetails,
        setProductDetails,
        products,
        fetchProducts,
        fetchProductDetails,
        address, 
        setAddress, 
        paymentMethod,
        setPaymentMethod,
        
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
