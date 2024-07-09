import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { CiHeart } from "react-icons/ci";
import brownSweatshirt from "../images/brownSweatshirt.svg"
import blueShirt from "../images/blueShirt.svg"
import greenShirt from "../images/greenShirt.svg"
import plaidShirt from "../images/plaidShirt.svg"
import pufferJacket from "../images/pufferJacket.svg"
import blueFoldedShirt from "../images/blueFoldedShirt.svg"

const Products = () => {
    const images = [blueFoldedShirt, blueShirt, brownSweatshirt, pufferJacket, plaidShirt, greenShirt]
    const productData = [
        {description: "Angle shirt" },
        {description: "Reversible Angle shirt" },
        {description: "2024 Convertible Shirt" },
        {description: "Reversible Angora Cardigan" },
    ]
  return (
    <SimpleGrid gridTemplateColumns={"repeat(2, 2fr)"} margin={"1.5em 0 4em 0"} gap={"1em"} padding={"0 1em "}>
        {productData.map((product, index) => (
      <Flex flexDir={"column"} textAlign={"left"} >
        <Flex flexDir={"column"}>
            <Image src={images[index]}/>
            <Box marginLeft={"auto"}>
            <CiHeart color="#FF5E00"/>
            </Box>
        </Flex>
        <Text fontSize={"12px"} fontWeight={600}>{index % 2 === 0? "21WN": "lame"}</Text>
        <Text fontSize={"12px"}>{product.description}</Text>
        <Text fontSize={"15px"} color={"#FF5E00"}>$120</Text>
      </Flex>
        ))}
    </SimpleGrid>
  )
}

export default Products
