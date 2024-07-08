import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import { IoIosClose } from "react-icons/io";
import { LiaShoppingBagSolid } from "react-icons/lia";
import cart from "../images/material-symbols-light_shopping-cart-outline.svg"
import CardCheckout from "../components/CardCheckout";

const Cart = () => {
  return (
    <Box p={"1.5em 0"}>
      <Box p={"0 1.5em"}>
      <Link href="/">
      <IoIosClose size={"30px"}/>
      </Link>
      <Text lineHeight={"40px"} fontSize={"18px"} letterSpacing={"4px"}>CART</Text>
      </Box>
      <CardCheckout />
      <Box p={"0 1.5em"}>
        <Text borderTop={"1px solid #D9D9D9"}></Text>
        </Box>
      <Flex mb={"1.5em"} p={"1.5em 1.5em 0 1.5em"}>
        <Text fontSize={"14px"} color={"#333333"} lineHeight={"20px"} letterSpacing={"2px"}>SUB TOTAL</Text>
        <Text fontSize={"16px"} color={"#FF5E00"} lineHeight={"20px"} letterSpacing={"2px"} ml={"auto"}>$360</Text>
      </Flex>
        <Text color={"#888888"} fontSize={"14px"} lineHeight={"24px"} mb={"1.5em"} p={"0 1.5em"}>*shipping charges, taxes and discount codes  are calculated at checkout. </Text>
        <Link href="/checkout"  _hover={{ textDecoration: "none" }}>
        <Box bg={"#FF5E00"} color={"#FCFCFC"} p={"1em"} _hover={{cursor: "pointer"} }>
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"30%"}m={"0 auto"}>
          <LiaShoppingBagSolid color="#FCFCFC" size={"20px"}/>
          <Text fontSize={"16px"} lineHeight={"26px"} letterSpacing={"1%"}>BUY NOW</Text>
        </Flex>
        </Box>
        </Link>
        <Link href="/"  _hover={{ textDecoration: "none" }}>
        <Box borderTop={"1px solid #FF5E00"} borderBottom={"1px solid #FF5E00"} mt={"1em"} p={"1em"} _hover={{cursor: "pointer", border: "none", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"50%"}m={"0 auto"}>
          <Image src={cart} w={"24px"} h={"24px"}/>
          <Text fontSize={"16px"} lineHeight={"26px"} letterSpacing={"1%"} color={"#FF5E00"}>CONTINUE SHOPPING</Text>
        </Flex>
        </Box> 
        </Link>
    </Box>
  );
};

export default Cart;
