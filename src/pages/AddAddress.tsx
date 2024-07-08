import { Box, Flex, Image, Input, Link, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import diamondLine from "../images/3.svg";

const AddAddress = () => {
  return (
    <Box pb={"1.5em"}>
      <Header />
      <Flex flexDir={"column"} alignItems={"center"}>
        <Text
          fontSize={"18px"}
          fontWeight={500}
          lineHeight={"40px"}
          letterSpacing={"6px"}
          textAlign={"center"}
        >
          ADD SHIPPING ADDRESS
        </Text>
        <Image src={diamondLine} />
      </Flex>
      <form>
        <Flex flexDir={"column"} m={"2em 0 4em 0"} p={"0 1.5em"} gap={"2em"}>
        <Flex>
          <Box>
            <Box color={"#888888"}>
            <label>First name</label>
            </Box>
            <Input border={"none"} borderBottom={"1px solid #888888"}  _focus={{ outline: "none", borderBottom: "1px solid #888888" }}
                _hover={{ outline: "none", borderBottom: "1px solid #888888" }} />
          </Box>
          <Box ml={"auto"}>
          <Box color={"#888888"}>
            <label>Last name</label>
            </Box>
            <Input border={"none"} borderBottom={"1px solid #888888"}  _focus={{ outline: "none", borderBottom: "1px solid #888888" }}
                _hover={{ outline: "none", borderBottom: "1px solid #888888" }}/>
          </Box>
        </Flex>
        <Box>
        <Box color={"#888888"}>
          <label>Address</label>
          </Box>
          <Input border={"none"} borderBottom={"1px solid #888888"}  _focus={{ outline: "none", borderBottom: "1px solid #888888" }}
                _hover={{ outline: "none", borderBottom: "1px solid #888888" }}/>
        </Box>
        <Box>
        <Box color={"#888888"}>
          <label>City</label>
          </Box>
          <Input border={"none"} borderBottom={"1px solid #888888"}  _focus={{ outline: "none", borderBottom: "1px solid #888888" }}
                _hover={{ outline: "none", borderBottom: "1px solid #888888" }}/>
        </Box>
        <Flex>
          <Box>
          <Box color={"#888888"}>
            <label>State</label>
            </Box>
            <Input border={"none"} borderBottom={"1px solid #888888"}  _focus={{ outline: "none", borderBottom: "1px solid #888888" }}
                _hover={{ outline: "none", borderBottom: "1px solid #888888" }}/>
          </Box>
          <Box ml={"auto"}>
          <Box color={"#888888"}>
            <label>ZIP Code</label>
            </Box>
            <Input border={"none"} borderBottom={"1px solid #888888"}  _focus={{ outline: "none", borderBottom: "1px solid #888888" }}
                _hover={{ outline: "none", borderBottom: "1px solid #888888" }}/>
          </Box>
        </Flex>
        <Box>
        <Box color={"#888888"}>
          <label>Phone Number</label>
          </Box>
          <Input border={"none"} borderBottom={"1px solid #888888"}  _focus={{ outline: "none", borderBottom: "1px solid #888888" }}
                _hover={{ outline: "none", borderBottom: "1px solid #888888" }}/>
        </Box>
        </Flex>
      </form>
      <Link href="/checkout2"  _hover={{ textDecoration: "none" }} mt={"5em"}>
        <Box bg={"#FF5E00"} color={"#FCFCFC"} p={"1em"} _hover={{cursor: "pointer"} }>   
          <Text fontSize={"16px"} lineHeight={"26px"} letterSpacing={"1%"} textAlign={"center"}>ADD NOW</Text>
        </Box>
        </Link>
    </Box>
  );
};

export default AddAddress;
