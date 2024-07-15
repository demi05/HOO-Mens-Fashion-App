import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useCart } from "../Context/GlobalContext";
import Header from "../components/Nav";
import Footer from "../components/Footer";
import { Link as RouterLink } from "react-router-dom";

const Cart = () => {
  const { cart, increaseCartItem, decreaseCartItem, removeFromCart, clearCart, subtotal } = useCart();

  return (
    <Box>
      <Header />
      <Box p="2em">
        {cart.length === 0 ? (
          <Text>Your cart is empty</Text>
        ) : (
          cart.map((item) => (
            <Flex key={item.id} justifyContent="space-between" alignItems="center" mb="1em">
              <Image src={item.image} alt={item.name} boxSize="100px" />
              <Text>{item.name}</Text>
              <Text>${item.price}</Text>
              <Flex alignItems="center">
                <Button onClick={() => decreaseCartItem(item.id)}>-</Button>
                <Text mx="1em">{item.quantity}</Text>
                <Button onClick={() => increaseCartItem(item.id)}>+</Button>
              </Flex>
              <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
            </Flex>
          ))
        )}
        {cart.length > 0 && (
          <Box mt="2em">
            <Text>Subtotal: ${subtotal}</Text>
            <RouterLink to="/payment">
              <Button colorScheme="blue" mt="1em">Proceed to Payment</Button>
            </RouterLink>
            <Button colorScheme="red" mt="1em" onClick={clearCart}>Clear Cart</Button>
          </Box>
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default Cart;
