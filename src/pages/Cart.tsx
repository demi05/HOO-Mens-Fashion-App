import { Box, Flex, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { IoIosClose } from "react-icons/io";
import { LiaShoppingBagSolid } from "react-icons/lia";
import cartIcon from "../images/material-symbols-light_shopping-cart-outline.svg";
import CardCheckout from "../components/CardCheckout";
import { Link as RouterLink } from "react-router-dom";
import { useCart } from "../Context/GlobalContext";
import Header from "../components/Nav";
import Footer from "../components/Footer";

const Cart = () => {
  const { cart, subtotal, increaseCartItem, decreaseCartItem, removeFromCart } = useCart();

  return (
    <Box p={"1.5em 0"}>
      <Header />
      <SimpleGrid gridTemplateColumns={{ sm: "1fr", md: "repeat(2, 2fr)" }} gap={"2em"} p={"0 1.5em"}>
        <Box boxShadow={{ sm: "none", md: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }} alignItems={"start"}>
          <Box p={"0 1.5em"}>
            <Link href="/" display={{ md: "none" }}>
              <IoIosClose size={"30px"} />
            </Link>
            <Text lineHeight={"40px"} fontSize={"18px"} letterSpacing={"4px"} fontWeight={500}>
              CART
            </Text>
          </Box>
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
        </Box>
        <Box boxShadow={{ sm: "none", md: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }} p={"1em 1.5em 2em 1.5em"} alignSelf={"flex-start"}>
          <Box p={"0 1.5em"} display={{ md: "none" }}>
            <Text borderTop={"1px solid #D9D9D9"}></Text>
          </Box>
          <Text lineHeight={"40px"} fontSize={"18px"} letterSpacing={"4px"} fontWeight={500} display={{ sm: "none", md: "block" }}>
            CART SUMMARY
          </Text>
          <Flex mb={"1.5em"} p={{ sm: "1.5em 1.5em 0 1.5em", md: "1.5em 0 0 0" }}>
            <Text fontSize={"14px"} color={"#333333"} lineHeight={"20px"} letterSpacing={"2px"}>
              SUB TOTAL
            </Text>
            <Text fontSize={"24px"} color={"#FF5E00"} lineHeight={"20px"} letterSpacing={"2px"} ml={"auto"}>
              ${subtotal}
            </Text>
          </Flex>
          <Text color={"#888888"} fontSize={"14px"} lineHeight={"24px"} mb={"1.5em"} p={{ sm: "0 1.5em", md: "0" }}>
            *shipping charges, taxes and discount codes are calculated at checkout.
          </Text>
          <RouterLink to="/checkout">
            <Box bg={"#FF5E00"} color={"#FCFCFC"} p={"1em"} _hover={{ cursor: "pointer" }}>
              <Flex alignItems={"center"} justifyContent={"space-between"} w={"40%"} m={"0 auto"}>
                <LiaShoppingBagSolid color="#FCFCFC" size={"20px"} />
                <Text fontSize={"16px"} lineHeight={"26px"} letterSpacing={"1%"}>
                  BUY NOW
                </Text>
              </Flex>
            </Box>
          </RouterLink>
          <RouterLink to="/">
            <Box borderTop={"1px solid #FF5E00"} borderBottom={"1px solid #FF5E00"} mt={"1em"} p={"1em"} _hover={{ cursor: "pointer", border: "none", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}>
              <Flex alignItems={"center"} justifyContent={"space-between"} w={{ sm: "50%", md: "70%" }} m={"0 auto"}>
                <Image src={cartIcon} w={"24px"} h={"24px"} />
                <Text fontSize={"16px"} lineHeight={"26px"} letterSpacing={"1%"} color={"#FF5E00"}>
                  CONTINUE SHOPPING
                </Text>
              </Flex>
            </Box>
          </RouterLink>
        </Box>
      </SimpleGrid>
      <Flex alignItems={"center"} justifyContent={"center"} w={"100%"} mt={"3em"}>
        <Footer />
      </Flex>
    </Box>
  );
};

export default Cart;
