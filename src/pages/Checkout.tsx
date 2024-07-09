import { Box, Flex, Image, Text } from "@chakra-ui/react";
import CardCheckout from "../components/CardCheckout";
import Header from "../components/Nav";
import diamondLine from "../images/3.svg";
import voucher from "../images/Voucher.svg";
import delivery from "../images/Door to Door Delivery.svg";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { Link as RouterLink } from "react-router-dom";
import { useCart } from "../Context/GlobalContext"; 

const Checkout = () => {
  const { cart, increaseCartItem, decreaseCartItem, removeFromCart, subtotal } = useCart();

  return (
    <Box pb={"1.5em"}>
      <Header />
      <Flex flexDir={"column"} alignItems={"center"}>
        <Text fontSize={"18px"} fontWeight={500} lineHeight={"40px"} letterSpacing={"6px"} textAlign={"center"}>
          CHECKOUT
        </Text>
        <Image src={diamondLine} />
      </Flex>
      {cart.length === 0 ? (
        <Text pl={"1.5em"} fontWeight={500} mt={"3em"}>
          There are no items in your cart currently.
        </Text>
      ) : (
        <CardCheckout 
          cart={cart} 
          increaseCartItem={increaseCartItem} 
          decreaseCartItem={decreaseCartItem} 
          removeFromCart={removeFromCart} 
        />
      )}
      <Box p={"0 1.5em"}>
        <Flex alignItems={"center"} borderTop={"1px solid #D9D9D9"} borderBottom={"1px solid #D9D9D9"} p={"1em 0"} gap={"1em"}>
          <Image src={voucher} />
          <Text lineHeight={"16px"}>Add promo code</Text>
        </Flex>
        <Flex alignItems={"center"} borderBottom={"1px solid #D9D9D9"} p={"1em 0"}>
          <Flex alignItems={"center"} gap={"1em"}>
            <Image src={delivery} />
            <Text lineHeight={"16px"}>Delivery</Text>
          </Flex>
          <Text ml={"auto"} lineHeight={"16px"}>Free</Text>
        </Flex>
      </Box>
      <Flex p={"1em 1.5em"}>
        <Text lineHeight={"34.5px"} letterSpacing={"3px"}>EST. TOTAL</Text>
        <Text ml={"auto"} lineHeight={"34.5px"} letterSpacing={"3px"} color={"#FF5E00"}>
          ${subtotal.toFixed(2)}
        </Text>
      </Flex>
      <RouterLink to="/checkout2">
        <Box bg={"#FF5E00"} color={"#FCFCFC"} p={"1em"} _hover={{ cursor: "pointer" }}>
          <Flex alignItems={"center"} justifyContent={"space-between"} w={"30%"} m={"0 auto"}>
            <LiaShoppingBagSolid color="#FCFCFC" size={"20px"} />
            <Text fontSize={"16px"} lineHeight={"26px"} letterSpacing={"1%"}>
              CHECKOUT
            </Text>
          </Flex>
        </Box>
      </RouterLink>
    </Box>
  );
};

export default Checkout;
