import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import Header from "../components/Nav";
import Footer from "../components/Footer";
import successIcon from "../images/Vector (3).svg"; 
import { Link as RouterLink } from "react-router-dom";

const Success = () => {
  return (
    <Box>
      <Header />
      <Flex flexDir="column" alignItems="center" justifyContent="center" h="80vh">
        <Image src={successIcon} alt="Success" boxSize="150px" />
        <Text fontSize="2xl" fontWeight="bold" mt="4">Order Successful!</Text>
        <Text fontSize="lg" mt="2" textAlign="center">
          Thank you for your purchase. Your order has been placed successfully.
        </Text>
        <RouterLink to="/">
          <Button mt="4" bg="#FF5E00" color="#FCFCFC" _hover={{ bg: "#FF4500" }}>
            Continue Shopping
          </Button>
        </RouterLink>
      </Flex>
      <Footer />
    </Box>
  );
};

export default Success;
