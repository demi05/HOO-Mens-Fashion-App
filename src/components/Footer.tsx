import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import diamondLine from "../images/8.svg"
// import diamondLine2 from "../images/10.svg"

const Footer = () => {
    const settings = {
        dots:false,
        infinite: true,
        speed: 0,
        slidesToShow: 5,
        slidesToScroll: 1,
      };
      const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <Flex flexDir={"column"} alignItems={"center"} gap={"2em"}>
       <Flex alignItems={"center"} justifyContent={"center"}>
        <Box width="241.05px" margin="0 auto">
      <Slider {...settings}>
        {numbers.map((number, index) => (
          <Box key={index} p={"0.2em"} textAlign="center">
            <Flex justifyContent="center" alignItems="center" bg={index === 0? "#FF5E00": "#f4eeee"} color={index === 0? "#f4eeee": "#FF5E00"} w={"32px"} h={"32px"} _hover={{cursor: "pointer"}}>
              <Text fontSize="16px">{number}</Text>
            </Flex>
          </Box>
        ))}
      </Slider>
      </Box>
        <MdKeyboardArrowRight color={"#FF5E00"}/>
    </Flex>
    <Flex justifyContent={"space-between"} width={"40%"} margin={"0 auto"} color={"#FF5E00"}>
        <FaTwitter size={"24px"}/>
        <FaInstagram size={"24px"} />
        <FaYoutube size={"24px"} />
    </Flex>
    <Image src={diamondLine} />
    <Flex flexDir={"column"} gap={"0.7em"} textAlign={"center"}>
        <Text>support@hoo-mensfashion.com</Text>
        <Text>+234 805 273 6016</Text>
        <Text>08:00 - 22:00 - Everyday</Text>
    </Flex>
    <Image src={diamondLine} />
    <Flex justifyContent={"space-between"} width={"70%"} margin={"0 auto"} fontWeight={600}>
        <Link>About</Link>
        <Link>Contact</Link>
        <Link>Blog</Link>
    </Flex>
    <Box bg={"#f4eeee"} w={"100%"} padding={"0.5em"}>
    <Text textAlign={"center"}>Copyright© HOO Men! All Rights Reserved.</Text>
    </Box>
    </Flex>
  )
}

export default Footer
