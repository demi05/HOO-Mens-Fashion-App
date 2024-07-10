import { createContext, useContext, useState, ReactNode, useEffect } from "react";

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
  subtotal: number;
  productDetails: CartItem | null;
  setProductDetails: (item: CartItem | null) => void;
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

  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setSubtotal(total);
  }, [cart]);

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

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseCartItem,
        decreaseCartItem,
        removeFromCart,
        subtotal,
        productDetails,
        setProductDetails,
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
