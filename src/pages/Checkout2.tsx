import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import diamondLine from "../images/3.svg";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoIosAdd } from "react-icons/io";
import { RxCaretDown } from "react-icons/rx";

const Checkout2 = () => {
  return (
    <Flex flexDir={"column"} minHeight={"100vh"} pb={"1.5em"}>
      <Header />
      <Flex flexDir={"column"} alignItems={"center"}>
        <Text
          fontSize={"18px"}
          fontWeight={500}
          lineHeight={"40px"}
          letterSpacing={"6px"}
          textAlign={"center"}
        >
          CHECKOUT
        </Text>
        <Image src={diamondLine} />
      </Flex>
      <Flex flexDir={"column"} gap={"2em"} p={"1.5em 1.5em 0 1.5em"}>
        <Flex flexDir={"column"} gap={"1em"}>
          <Text color={"#888888"} lineHeight={"16px"} letterSpacing={"1px"}>
            SHIPPING ADDRESS
          </Text>
          <Flex
            bg={"rgba(255, 94, 0, 10%)"}
            alignItems={"center"}
            p={"1em"}
            borderRadius={"2rem"}
          >
            <Text>New shipping address</Text>
            <Link ml={"auto"} _hover={{cursor: "pointer", textDecoration: "none"}}>
            <IoIosAdd size={"20px"} />
            </Link>
          </Flex>
        </Flex>
        <Flex flexDir={"column"} gap={"1em"}>
          <Text color={"#888888"} lineHeight={"16px"} letterSpacing={"1px"}>
            SHIPPING METHOD
          </Text>
          <Flex
            bg={"rgba(255, 94, 0, 10%)"}
            alignItems={"center"}
            p={"1em"}
            borderRadius={"2rem"}
          >
            <Text>Pickup at store</Text>
            <Link ml={"auto"} _hover={{cursor: "pointer", textDecoration: "none"}}>
            <Flex alignItems={"center"} gap={"1.5em"}>
              <Text>FREE</Text>
              <RxCaretDown size={"20px"} />
            </Flex>
            </Link>
          </Flex>
        </Flex>
        <Flex flexDir={"column"} gap={"1em"}>
          <Text color={"#888888"} lineHeight={"16px"} letterSpacing={"1px"}>
            PAYMENT METHOD
          </Text>
          <Flex
            bg={"rgba(255, 94, 0, 10%)"}
            alignItems={"center"}
            p={"1em"}
            borderRadius={"2rem"}
          >
            <Text>Select payment method</Text>
            <Link ml={"auto"} _hover={{cursor: "pointer", textDecoration: "none"}}>
            <RxCaretDown size={"20px"} />
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Box mt={"auto"}>
      <Flex p={"1em 1.5em"}>
        <Text lineHeight={"34.5px"} letterSpacing={"3px"}>
          TOTAL
        </Text>
        <Text
          ml={"auto"}
          lineHeight={"34.5px"}
          letterSpacing={"3px"}
          color={"#FF5E00"}
        >
          $360
        </Text>
      </Flex>
      <Link href="/addaddress" _hover={{ textDecoration: "none" }}>
        <Box
          bg={"#FF5E00"}
          color={"#FCFCFC"}
          p={"1em"}
          _hover={{ cursor: "pointer" }}
        >
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            w={"30%"}
            m={"0 auto"}
          >
            <LiaShoppingBagSolid color="#FCFCFC" size={"20px"} />
            <Text fontSize={"16px"} lineHeight={"26px"} letterSpacing={"1%"}>
              PLACE ORDER
            </Text>
          </Flex>
        </Box>
      </Link>
      </Box>
    </Flex>
  );
};

export default Checkout2;
