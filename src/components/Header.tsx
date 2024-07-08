import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";

const Header = () => {
  return (
    <Box padding={"1em 1em 1.5em 1em"}>
    <header>
      <Flex width={"100%"} alignItems={"center"} justifyContent={"space-between"} _hover={{cursor: "pointer"}}>
      <HiMiniBars3CenterLeft size={"24px"}/>
      <Box fontSize={"20px"} color={"#FF5E00"} textAlign={"center"}>
        <Heading as={"h3"}>HOO!</Heading>
        <Heading as={"h3"}>Men's Fashion</Heading>
      </Box>
      <Flex alignItems={"center"} justifyContent={"space-between"} width={"18%"}>
        <Box _hover={{cursor: "pointer"}}>
      <CiSearch size={"24px"} fontWeight={800}/>
        </Box>
        <Box _hover={{cursor: "pointer"}}>
       <Link href="cart"><LiaShoppingBagSolid size={"24px"}/></Link> 
        </Box>
      </Flex>
        </Flex>
    </header>
    </Box>
  )
}

export default Header
