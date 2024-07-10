import { Box, Flex, Image, Link, Select, Text } from "@chakra-ui/react";
import Header from "../components/Nav";
import diamondLine from "../images/3.svg";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoIosAdd } from "react-icons/io";
import { RxCaretDown } from "react-icons/rx";
import { Link as RouterLink } from "react-router-dom";
import { useCart } from "../Context/GlobalContext";

const Checkout2 = () => {
  const { address, subtotal, paymentMethod } = useCart();

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
          {address ? (
            <Flex flexDir={"column"}  p={"1em"} gap={"0.6em"} color={"#555555"} lineHeight={"22px"}>
              <Text fontWeight={500} fontSize={"18px"} color={"#000"}>{`${address.firstName} ${address.lastName}`}</Text>
              <Text>{address.address}</Text>
              <Text>{`${address.city}, ${address.state} ${address.zipCode}`}</Text>
              <Text>{address.phoneNumber}</Text>
            </Flex>
          ) : <></>}
              <RouterLink to="/addaddress">
            <Flex
              bg={"rgba(255, 94, 0, 10%)"}
              alignItems={"center"}
              p={"1em"}
              borderRadius={"2rem"}
            >
              <Text>New shipping address</Text>
              <Link
                ml={"auto"}
              >            
                  <IoIosAdd size={"20px"} />
              </Link>
            </Flex>
                </RouterLink>
        </Flex>
        <Flex flexDir={"column"} gap={"1em"}>
          <Text color={"#888888"} lineHeight={"16px"} letterSpacing={"1px"}>
            SHIPPING METHOD
          </Text>
          <Flex
            bg={"rgba(255, 94, 0, 10%)"}
            alignItems={"center"}
            borderRadius={"2rem"}
          >
            <Select placeholder="Pickup at store" border={"none"} borderRadius={"2rem"} p={"0.5em"} _hover={{cursor: "pointer"}} _focus={{border: "none", outline:"none"}}>
              <option>Delivery</option>
            </Select>
            {/* <Text>FREE</Text> */}
          </Flex>
        </Flex>
        <Flex flexDir={"column"} gap={"1em"}>
          <Text color={"#888888"} lineHeight={"16px"} letterSpacing={"1px"}>
            PAYMENT METHOD
          </Text>
          <RouterLink to={"/paymentmethod"} >
          {paymentMethod ? (
            <Flex flexDir={"column"} p={"1em"} gap={"0.6em"} color={"#555555"} lineHeight={"22px"}>
              <Text fontWeight={500} fontSize={"18px"} color={"#000"}>{paymentMethod.nameOnCard}</Text>
              <Text>{paymentMethod.cardNumber}</Text>
              <Text>{`${paymentMethod.expMonth}/${paymentMethod.expYear}`}</Text>
            </Flex>
          ): <></>}
          <Flex
            bg={"rgba(255, 94, 0, 10%)"}
            alignItems={"center"}
            p={"1em"}
            borderRadius={"2rem"}
          >
            <Text>Select payment method</Text>
            <Box ml={"auto"} >
              <RxCaretDown size={"20px"} />
            </Box>
          </Flex>
            </RouterLink>
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
            ${subtotal}
          </Text>
        </Flex>
        <RouterLink to={"/success"}>
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
        </RouterLink>
      </Box>
    </Flex>
  );
};

export default Checkout2;
