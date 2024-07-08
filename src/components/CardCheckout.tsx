import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import blueFoldedShirt from "../images/blueFoldedShirt.svg";
import brownSweatshirt from "../images/brownSweatshirt.svg";
import blueShirt from "../images/blueShirt.svg";
import { FiMinus} from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";
import { useState } from "react";

const CardCheckout = () => {
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
    <div>
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
                  fontSize={"24px"}
                >
                  <FiMinus />
                </Text>
                {cartNum[index]}
                <Text
                  _hover={{ cursor: "pointer" }}
                  onClick={() => increaseCartNum(index)} borderRadius={"50%"} border={"1px solid #555555"} w={"24px"} h={"24px"} textAlign={"center"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <IoIosAdd />
                </Text>
              </Flex>
              <Text color={"#FF5E00"} fontSize={"15px"} lineHeight={"24px"}>$120</Text>
            </Flex>
          </SimpleGrid>
        ))}
      </Flex>
    </div>
  )
}

export default CardCheckout
