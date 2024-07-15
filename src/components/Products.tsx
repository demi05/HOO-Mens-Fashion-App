import { Box, Flex, Heading, Image, SimpleGrid, Text, Spinner } from "@chakra-ui/react";
import { CiHeart } from "react-icons/ci";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useCart } from "../Context/GlobalContext";
import { Link as RouterLink } from "react-router-dom";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
};

const Products = () => {
  const { setProductDetails, products, fetchProducts } = useCart();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        fetchProducts(1, 12);
      } catch (error) {
        setError("Error fetching products");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchProducts]);

  const handleProductClick = (product: Product) => {
    setProductDetails(product);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 0,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Box padding={{ base: "0 1em ", md: "1.5em" }} boxShadow={{ base: "none", md: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }} borderRadius={{ base: "none", md: "0.5rem" }} bg={"#fff"}>
      <Flex alignItems={"center"} borderBottom={"1px solid #A6A6A6"} gap={"2em"} pb={"1em"} mb={"1.5em"} display={{ base: "none", md: "flex" }}>
        <Heading as={"h4"} fontSize={"16px"} lineHeight={"24px"}>
          FRONTLINE OFFICIAL STORE
        </Heading>
        <Text lineHeight={"18px"} color={"#555"}>(820 matches found)</Text>
      </Flex>
      {loading ? (
        <Flex justify="center" align="center" height="100vh">
          <Spinner size="xl" />
        </Flex>
      ) : error ? (
        <Flex justify="center" align="center" height="100vh">
          <Text>{error}</Text>
        </Flex>
      ) : (
        <SimpleGrid gridTemplateColumns={{ base: "repeat(2, 2fr)", md: "repeat(4, 2fr)" }} margin={{ base: "1.5em 0 4em 0", md: "0 0 4em 0" }} gap={"1em"}>
          {products && products.map((product) => (
            <RouterLink to={"./productlisting"} onClick={() => handleProductClick(product)} key={product.id}>
              <Flex flexDir={"column"} textAlign={"left"} w={{ md: "120px", lg: "180px", xl: "240px" }} _hover={{ cursor: "pointer" }}>
                <Flex flexDir={"column"}>
                  <Image src={product.image} alt={`Product ${product.id}`} />
                  <Box marginLeft={"auto"}>
                    <CiHeart color="#FF5E00" />
                  </Box>
                </Flex>
                <Text fontSize={"12px"} fontWeight={600}>{product.name}</Text>
                <Text fontSize={"12px"}>{product.description}</Text>
                <Text fontSize={"15px"} color={"#FF5E00"}>${product.price}</Text>
              </Flex>
            </RouterLink>
          ))}
        </SimpleGrid>
      )}
      <Flex alignItems={"center"} justifyContent={"center"} mb={"1.5em"}>
        <Box width="241.05px" margin="0 auto">
          <Slider {...settings}>
            {numbers.map((number, index) => (
              <Box key={index} p={"0.2em"} textAlign="center">
                <Flex justifyContent="center" alignItems="center" bg={index === 0 ? "#FF5E00" : "#f4eeee"} color={index === 0 ? "#f4eeee" : "#FF5E00"} w={"32px"} h={"32px"} _hover={{ cursor: "pointer" }}>
                  <Text fontSize="16px">{number}</Text>
                </Flex>
              </Box>
            ))}
          </Slider>
        </Box>
        <MdKeyboardArrowRight color={"#FF5E00"} />
      </Flex>
    </Box>
  );
};

export default Products;
