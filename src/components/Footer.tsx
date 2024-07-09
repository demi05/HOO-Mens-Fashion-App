import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import diamondLine from "../images/8.svg"

const Footer = () => {
  return (
    <Flex flexDir={"column"} bg={"#fff"} mt={"2em"} pt={"2em"}>
    <Flex flexDir={{base: "column", md: "column-reverse"}} alignItems={"center"} gap={"2em"} >
      
    <Flex justifyContent={"space-between"}  margin={{base: "0 auto"}} color={"#FF5E00"} w={{base: "40%", md: "20%"}} mr={"auto"} >
        <FaTwitter size={"24px"}/>
        <FaInstagram size={"24px"} />
        <FaYoutube size={"24px"} />
    </Flex>
    <Image src={diamondLine} display={{base: "block", md: "none"}} />
    <Flex flexDir={"column"} gap={"0.7em"} textAlign={"center"}>
        <Text>support@hoo-mensfashion.com</Text>
        <Text>+234 805 273 6016</Text>
        <Text>08:00 - 22:00 - Everyday</Text>
    </Flex>
    <Image src={diamondLine} display={{base: "block", md: "none"}} />
    <Flex justifyContent={"space-between"}  margin={"0 auto"} fontWeight={600} w={{base: "70%", md: "30%"}}>
        <Link>About</Link>
        <Link>Contact</Link>
        <Link>Blog</Link>
    </Flex>
    </Flex>
    <Box  w={"100%"} padding={"0.5em"}>
    <Text textAlign={"center"} fontWeight={500}>Copyright© HOO Men! All Rights Reserved.</Text>
    </Box>
    </Flex>
  )
}

export default Footer
