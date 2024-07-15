import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
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
      <Flex flexDir={"column"} alignItems={"center"} mb={"2em"}>
        <Text fontSize={"18px"} fontWeight={500} lineHeight={"40px"} letterSpacing={"6px"} textAlign={"center"}>
          CHECKOUT
        </Text>
        <Image src={diamondLine} />
      </Flex>
      <SimpleGrid gridTemplateColumns={{base: "1fr",md:"repeat(2, 2fr)"}} gap={"2em"} p={"0 1.5em"}>
        <Box boxShadow={{ sm: "none", md: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }} alignItems={"start"} > 
      {cart.length === 0 ? (
        <Text pl={"1.5em"} fontWeight={500} mt={"3em"}>
          There are no items to checkout.
        </Text>
      ) : (
        <CardCheckout 
          cart={cart} 
          increaseCartItem={increaseCartItem} 
          decreaseCartItem={decreaseCartItem} 
          removeFromCart={removeFromCart} 
        />
      )}
      </Box>
      <Box boxShadow={{ sm: "none", md: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }} p={"1em 1.5em 2em 1.5em"} alignSelf={"flex-start"}>
      <Box p={"0 1.5em"}>
        <Flex alignItems={"center"} borderTop={{base:"1px solid #D9D9D9", md: "none"}} borderBottom={"1px solid #D9D9D9"} p={"1em 0"} gap={"1em"}>
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
          ${subtotal} 
        </Text>
      </Flex>
      <RouterLink to="/checkout2"> 
        <Box bg={"#FF5E00"} color={"#FCFCFC"} p={"1em"} _hover={{ cursor: "pointer" }}>
          <Flex alignItems={"center"} justifyContent={"space-between"} w={{base:"30%", md: "50%"}} m={"0 auto"}>
            <LiaShoppingBagSolid color="#FCFCFC" size={"20px"} />
            <Text fontSize={"16px"} lineHeight={"26px"} letterSpacing={"1%"}>
              CHECKOUT
            </Text>
          </Flex>
        </Box>
      </RouterLink>
      </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Checkout;
