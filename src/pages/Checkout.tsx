import { Flex, Image, Text } from "@chakra-ui/react";
import CardCheckout from "../components/CardCheckout";
import Header from "../components/Header";
import diamondLine from "../images/3.svg"

const Chekout = () => {
  return (
    <div>
      <Header />
      <Flex flexDir={"column"} alignItems={"center"}>
      <Text fontSize={"18px"} fontWeight={500} lineHeight={"40px"} letterSpacing={"6px"} textAlign={"center"}>CHECKOUT</Text>
      <Image src={diamondLine} />
      </Flex>
      <CardCheckout />
    </div>
  )
}

export default Chekout
