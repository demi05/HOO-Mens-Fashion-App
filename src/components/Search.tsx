import { Text, Flex, Box, Image } from "@chakra-ui/react";
import { FaCaretDown } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import list from "../images/Listview.svg"
import filter from "../images/Filter.svg"

const Search = () => {
  return (
      <Flex flexDir={"column"} gap={"1.5em"} padding={"0 1em "}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>       
      <Text fontSize={"14px"}>GENTS APPAREL</Text>
      <Flex alignItems={"center"} justifyContent={"space-between"} width={"25%"}>
        <Flex alignItems={"center"} justifyContent={"space-between"} width={"40%"}>
            <Text fontSize={"13px"}>New</Text>
            <FaCaretDown size={"16.07px"}/>
        </Flex>
        <Flex alignItems={"center"} justifyContent={"space-between"} width={"40%"}>
            <Box>
                <Image src={list} />
            </Box>
            <Box>
                <Image src={filter}/>
            </Box>
        </Flex>
        </Flex>
    </Flex>
    <Flex alignItems={"center"} justifyContent={"space-between"} width={"40%"}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Text fontSize={"14px"}>Men</Text>
            <IoIosClose size={"16.07px"}/>
        </Flex>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Text fontSize={"14px"}>All apparel</Text>
            <IoIosClose size={"16.07px"} />
        </Flex>
    </Flex>
    </Flex>
  )
}

export default Search
