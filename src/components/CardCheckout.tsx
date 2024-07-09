import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { FiMinus } from "react-icons/fi";
import { IoIosAdd, IoIosClose } from "react-icons/io";
import { CartItem } from "../Context/GlobalContext";

type CardCheckoutProps = {
  cart: CartItem[];
  increaseCartItem: (itemId: number) => void;
  decreaseCartItem: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
};

const CardCheckout = ({ cart, increaseCartItem, decreaseCartItem, removeFromCart }: CardCheckoutProps) => {
  return (
    <div>
      <Flex flexDir={"column"} mt={"1em"} p={"0 1.5em 2em 1.5em"} gap={"2em"}>
        {cart.map((item, index) => (
          <SimpleGrid
            key={index}
            gridTemplateColumns={"repeat(3, 2fr)"}
            gap={"2em"} alignItems={"flex-start"}
          >
            <Box>
              <Image width={"100%"} src={item.image} />
            </Box>
            <Flex flexDir={"column"} gap={"1em"} alignItems={"flex-start"}>
              <Text lineHeight={"20px"} fontSize={"14px"} letterSpacing={"2px"} fontWeight={500}>
                {item.name}
              </Text>
              <Text lineHeight={"18px"} fontSize={"12px"}>
                {item.description}
              </Text>
              <Flex justifyContent={"space-between"} w={"80%"}>
                <Text
                  _hover={{ cursor: "pointer" }}
                  onClick={() => decreaseCartItem(item.id)}
                  borderRadius={"50%"}
                  border={"1px solid #555555"}
                  w={"24px"}
                  h={"24px"}
                  textAlign={"center"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  fontSize={"24px"}
                >
                  <FiMinus />
                </Text>
                {item.quantity}
                <Text
                  _hover={{ cursor: "pointer" }}
                  onClick={() => increaseCartItem(item.id)}
                  borderRadius={"50%"}
                  border={"1px solid #555555"}
                  w={"24px"}
                  h={"24px"}
                  textAlign={"center"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  fontSize={"24px"}
                >
                  <IoIosAdd />
                </Text>
              </Flex>
            </Flex>
            <Flex
              flexDir={ "column" }
              alignItems={"flex-end"}
              justifyContent={{ base: "space-between", md: "space-between" }}
              width={{ base: "100%", md: "auto" }}
            >
              <Text color={"#FF5E00"} fontSize={"20px"} lineHeight={"24px"}>
                ${item.price}
              </Text>
              <Flex
                onClick={() => removeFromCart(item.id)}
                alignItems={"center"}
                bg={"transparent"}
                _hover={{ cursor: "pointer", p: "0.5em" }}
              >
                <IoIosClose color="#FF5E00" size={"24px"} />
              </Flex>
            </Flex>
          </SimpleGrid>
        ))}
      </Flex>
    </div>
  );
};

export default CardCheckout;
