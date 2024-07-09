import { Flex, Heading, Text } from "@chakra-ui/react";

const Deal = () => {
  return (
    <Flex color={"#fff"} bg={"#ED0606"} p={"1em 1.5em"} alignItems={"center"} display={{base: "none", md: "flex"}}>
      <Heading as={"h3"} fontSize={"32"}>DEALS OF THE DAY</Heading>
      <Text ml={"auto"} fontSize={"20px"} fontWeight={500}>Up to 75% off</Text>
    </Flex>
  )
}

export default Deal
