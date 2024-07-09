import { Text, Flex, Box, Image, Heading } from "@chakra-ui/react";
import { FaCaretDown } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import list from "../images/Listview.svg";
import filter from "../images/Filter.svg";

const Search = () => {
  const brands = ["Zara", "Yerima", "Verisus", "OML", "Ogoscit"];
  return (
    <Flex flexDir={"column"} gap={"1.5em"} padding={"0 1em "} w={{base: "100%", md: "100%", lg:"100%", xl: "60%"}} bg={"#fff"}>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        display={{ base: "flex", md: "none" }}
      >
        <Text fontSize={"14px"}>GENTS APPAREL</Text>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"25%"}
        >
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"40%"}
          >
            <Text fontSize={"13px"}>New</Text>
            <FaCaretDown size={"16.07px"} />
          </Flex>
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"40%"}
          >
            <Box>
              <Image src={list} />
            </Box>
            <Box>
              <Image src={filter} />
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        alignItems={{ base: "center", md: "flex-start" }}
        justifyContent={"space-between"}
        width={"40%"}
        flexDir={{ base: "row", md: "column" }}
        gap={"1em"}
        boxShadow={{
          base: "none",
          md: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
        p={"1em"} w={"100%"} borderRadius={{base: "none", md: "0.5rem"}}
      >
        <Box>
          <Heading
            as={"h4"}
            display={{ base: "none", md: "block" }}
            fontSize={"16px"}
            lineHeight={"24px"}
            mb={"1em"}
          >
            FASHION
          </Heading>
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            border={"1px solid #DEDEDE"}
            borderRadius={"1em"}
            p={"0.2em 0.5em"}
          >
            <Text fontSize={"14px"}>Men</Text>
            <IoIosClose size={"16.07px"} />
          </Flex>
        </Box>
        <Box>
          <Heading
            as={"h4"}
            display={{ base: "none", md: "block" }}
            fontSize={"16px"}
            lineHeight={"24px"}
            mb={"1em"}
          >
            CATEGORY
          </Heading>
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            border={"1px solid #DEDEDE"}
            borderRadius={"1em"}
            mb={{ base: "none", md: "0.5em" }}
            p={"0.2em 0.5em"}
          >
            <Text fontSize={"14px"}>All apparel</Text>
            <IoIosClose size={"16.07px"} />
          </Flex>
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            display={{ base: "none", md: "flex" }}
            border={"1px solid #DEDEDE"}
            borderRadius={"1em"}
            p={"0.2em 0.5em"}
          >
            <Text fontSize={"14px"}>Gents Apparel</Text>
            <IoIosClose size={"16.07px"} />
          </Flex>
        </Box>

        <Flex flexDir={"column"}>
          <Heading
            as={"h4"}
            display={{ base: "none", md: "block" }}
            fontSize={"16px"}
            lineHeight={"24px"}
            mb={"1em"}
          >
            BRAND
          </Heading>
          {brands.map((brand, index) => (
            <Flex
              key={index}
              alignItems={"center"}
              gap={"0.5em"}
              display={{ base: "none", md: "flex" }}
            >
              <input type="checkbox" />
              <Text>{brand}</Text>
            </Flex>
          ))}
        </Flex>
        <Heading
          as={"h4"}
          display={{ base: "none", md: "block" }}
          fontSize={"16px"}
          lineHeight={"24px"}
        >
          PRICE
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Search;
