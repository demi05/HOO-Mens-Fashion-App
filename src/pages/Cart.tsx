import React, { useState } from "react";
import { Box, Flex, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { IoIosClose } from "react-icons/io";
import blueFoldedShirt from "../images/blueFoldedShirt.svg";
import brownSweatshirt from "../images/brownSweatshirt.svg";
import blueShirt from "../images/blueShirt.svg";
import { LiaShoppingBagSolid } from "react-icons/lia";
import cart from "../images/material-symbols-light_shopping-cart-outline.svg"

const Cart = () => {
  const [cartNum, setCartNum] = useState<number[]>([1, 1, 1]);

  const increaseCartNum = (index: number) => {
    const newCartNum = [...cartNum];
    newCartNum[index] += 1;
    setCartNum(newCartNum);
  };

  const decreaseCartNum = (index: number) => {
    const newCartNum = [...cartNum];
    if (newCartNum[index] > 0) {
      newCartNum[index] -= 1;
      setCartNum(newCartNum);
    }
  };

  const images = [blueFoldedShirt, brownSweatshirt, blueShirt];
  const cartData = [
    { name: "LAME", description: "reversible angle shirt [NAVY]" },
    { name: "5252 by o!oi", description: "2024 convertible shirt [NAVY]" },
    { name: "21WN", description: "2024 convertible shirt [NAVY]" },
  ];

  return (
    <Box p={"1.5em 0"}>
      <Box p={"0 1.5em"}>
      <Link href="/">
      <IoIosClose size={"30px"}/>
      </Link>
      <Text lineHeight={"40px"} fontSize={"18px"} letterSpacing={"4px"}>CART</Text>
      </Box>
      <Flex flexDir={"column"} mt={"1em"} p={"0 1.5em 2em 1.5em"} gap={"2em"}>
        {cartData.map((data, index) => (
          <SimpleGrid key={index} gridTemplateColumns={"repeat(2, 2fr)"} gap={"2em"}>
            <Box>
            <Image width={"100%"} src={images[index]} />
            </Box>
            <Flex flexDir={"column"} gap={"1em"}>
              <Text lineHeight={"20px"} fontSize={"14px"} letterSpacing={"2px"} fontWeight={500}>{data.name}</Text>
              <Text lineHeight={"18px"} fontSize={"12px"}>{data.description}</Text>
              <Flex justifyContent={"space-between"} w={"50%"}>
                <Text
                  _hover={{ cursor: "pointer" }}
                  onClick={() => decreaseCartNum(index)} borderRadius={"50%"} border={"1px solid #555555"} w={"24px"} h={"24px"} textAlign={"center"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  -
                </Text>
                {cartNum[index]}
                <Text
                  _hover={{ cursor: "pointer" }}
                  onClick={() => increaseCartNum(index)} borderRadius={"50%"} border={"1px solid #555555"} w={"24px"} h={"24px"} textAlign={"center"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  +
                </Text>
              </Flex>
              <Text color={"#FF5E00"} fontSize={"15px"} lineHeight={"24px"}>$120</Text>
            </Flex>
          </SimpleGrid>
        ))}
      </Flex>
      <Box p={"0 1.5em"}>
        <Text borderTop={"1px solid #D9D9D9"}></Text>
        </Box>
      <Flex mb={"1.5em"} p={"1.5em 1.5em 0 1.5em"}>
        <Text fontSize={"14px"} color={"#333333"} lineHeight={"20px"} letterSpacing={"2px"}>SUB TOTAL</Text>
        <Text fontSize={"16px"} color={"#FF5E00"} lineHeight={"20px"} letterSpacing={"2px"} ml={"auto"}>$360</Text>
      </Flex>
        <Text color={"#888888"} fontSize={"14px"} lineHeight={"24px"} mb={"1.5em"} p={"0 1.5em"}>*shipping charges, taxes and discount codes  are calculated at checkout. </Text>
        <Link href="/checkout">
        <Box bg={"#FF5E00"} color={"#FCFCFC"} p={"1em"} _hover={{cursor: "pointer"} }>
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"30%"}m={"0 auto"}>
          <LiaShoppingBagSolid color="#FCFCFC" size={"20px"}/>
          <Text fontSize={"16px"} lineHeight={"26px"} letterSpacing={"1%"}>BUY NOW</Text>
        </Flex>
        </Box>
        </Link>
        <Link href="/">
        <Box borderTop={"1px solid #FF5E00"} borderBottom={"1px solid #FF5E00"} mt={"1em"} p={"1em"} _hover={{cursor: "pointer", border: "none"}}>
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
