import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useCart } from "../Context/GlobalContext";
import Header from "../components/Nav";
import Footer from "../components/Footer";
import {Link as RouterLink} from "react-router-dom"
import Deal from "../components/Deal";

const ProductListing = () => {
  const { addToCart, productDetails } = useCart();

  const handleAddToCart = () => {
    if (productDetails) {
      addToCart(productDetails);
    }
  };

  return (
    <Box>
      <Header />
      <Deal />
      <SimpleGrid gridTemplateColumns={{ sm: "1fr", md: "repeat(2, 2fr)" }} gap="2em" p="1.5em">
        <Box w={{base: "90%", sm: "70%", md: "70%", lg: "50%"}} >
          <Image src={productDetails?.image} alt={productDetails?.name}  w= "100%"  />
        </Box>
        <Box color={"#555555"}>
          <Text fontSize="36px" lineHeight={"44px"} fontWeight={600} mb="1em" color={"#000"}>
            {productDetails?.name}
          </Text>
          <Text fontSize="18px" fontWeight={500} color="#FF5E00" mb="1em">
            ${productDetails?.price}
          </Text>
          <Text>
            Made from pure cotton to suit the worst of conditions, you can''t simply go wrong wearing our one of a kind
            {productDetails?.description}. Made for premium men.
          </Text>
          <Text fontSize="sm" mt="1em">
            Size
          </Text>
          <Flex gap={"0.5em"}>
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <Box key={size} border="1px solid #6A6A6A" borderRadius="md" p="0.2em 0.5em" mt="0.5em">
                {size}
              </Box>
            ))}
          </Flex>
          <Text mt="1em">Can be shipped if ordered within the next 03:45 hours</Text>
          <RouterLink to={"/cart"}>
          <Button mt="1em" colorScheme="blue" onClick={handleAddToCart} bg={"rgba(255, 94,0, 80%)"} color={"#FFF"} _hover={{bg: "#FF5E00"}} w={"100%"}>
            Add to Cart
          </Button>
          </RouterLink>
          <Flex mt="1em" fontSize={"small"}>
            <Text mr="1em">Free standard shipping</Text>
            <Text>Free Returns</Text>
          </Flex>
        </Box>
      </SimpleGrid>
      <Footer />
    </Box>
  );
};

export default ProductListing;
