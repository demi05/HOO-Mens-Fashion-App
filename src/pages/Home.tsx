import { Box, SimpleGrid } from "@chakra-ui/react";
import Header from "../components/Nav";
import Search from "../components/Search";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Deal from "../components/Deal";

const Home = () => {
  return (
    <Box >
      <Header/>
      <Deal />
      <SimpleGrid mt={"1.5em"} gridTemplateColumns={{base: "1fr", md: "repeat(2, 2fr)"}} justifyContent={"center"} gap={0}>
      <Search />
      <Products />
      </SimpleGrid>
      <Footer />
    </Box>
  )
}

export default Home
