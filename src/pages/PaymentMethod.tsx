import { Box, Flex, Input, Button } from "@chakra-ui/react";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Nav";
import { useCart } from "../Context/GlobalContext";

const PaymentMethod = () => {
  const [formData, setFormData] = useState({
    nameOnCard: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvv: "",
  });

  const navigate = useNavigate();
  const { setPaymentMethod } = useCart();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setPaymentMethod(formData);
    navigate("/checkout");
  };

  return (
    <Box>
      <Header />
      <Box>
        <form onSubmit={handleSubmit}>
          <Flex flexDir={"column"} m={"2em 0 4em 0"} p={"0 1.5em"} gap={"2em"}>
            <Box>
              <Input
                name="nameOnCard"
                placeholder="Name on card"
                value={formData.nameOnCard}
                onChange={handleChange}
                border={"none"}
                borderBottom={"1px solid #888888"}
                _focus={{ outline: "none", borderBottom: "1px solid #888888" }}
                _hover={{ outline: "none", borderBottom: "1px solid #888888" }}
              />
            </Box>
            <Box>
              <Input
                name="cardNumber"
                placeholder="Card number"
                value={formData.cardNumber}
                onChange={handleChange}
                border={"none"}
                borderBottom={"1px solid #888888"}
                _focus={{ outline: "none", borderBottom: "1px solid #888888" }}
                _hover={{ outline: "none", borderBottom: "1px solid #888888" }}
              />
            </Box>
            <Flex gap={"2em"}>
              <Box>
                <Input
                  name="expMonth"
                  placeholder="Exp Month"
                  value={formData.expMonth}
                  onChange={handleChange}
                  border={"none"}
                  borderBottom={"1px solid #888888"}
                  _focus={{ outline: "none", borderBottom: "1px solid #888888" }}
                  _hover={{ outline: "none", borderBottom: "1px solid #888888" }}
                />
              </Box>
              <Box>
                <Input
                  name="expYear"
                  placeholder="Exp Year"
                  value={formData.expYear}
                  onChange={handleChange}
                  border={"none"}
                  borderBottom={"1px solid #888888"}
                  _focus={{ outline: "none", borderBottom: "1px solid #888888" }}
                  _hover={{ outline: "none", borderBottom: "1px solid #888888" }}
                />
              </Box>
            </Flex>
            <Box>
              <Input
                name="cvv"
                placeholder="CVV"
                value={formData.cvv}
                onChange={handleChange}
                border={"none"}
                borderBottom={"1px solid #888888"}
                _focus={{ outline: "none", borderBottom: "1px solid #888888" }}
                _hover={{ outline: "none", borderBottom: "1px solid #888888" }}
              />
            </Box>
            <Button type="submit" bg={"#FF5E00"} color={"#FCFCFC"} p={"1em"} _hover={{ cursor: "pointer" }}>
              Add Card
            </Button>
          </Flex>
        </form>
      </Box>
      <Footer />
    </Box>
  );
};

export default PaymentMethod;
