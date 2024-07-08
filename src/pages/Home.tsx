import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import Search from "../components/Search";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Box>
      <Header/>
      <Search />
      <Products />
      <Footer />
    </Box>
  )
}

export default Home
