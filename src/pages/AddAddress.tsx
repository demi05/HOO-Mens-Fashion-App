import { Box, Flex, Image, Input, Text } from "@chakra-ui/react";
import Header from "../components/Nav";
import diamondLine from "../images/3.svg";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/GlobalContext";

const AddAddress = () => {
  const { setAddress } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setAddress(formData);
    navigate("/checkout2");
  };

  return (
    <Box pb={"1.5em"}>
      <Header />
      <Flex flexDir={"column"} alignItems={"center"}>
        <Text
          fontSize={"18px"}
          fontWeight={500}
          lineHeight={"40px"}
          letterSpacing={"6px"}
          textAlign={"center"}
        >
          ADD SHIPPING ADDRESS
        </Text>
        <Image src={diamondLine} />
      </Flex>
      <form>
        <Flex flexDir={"column"} m={"2em 0 4em 0"} p={"0 1.5em"} gap={"2em"}>
          <Flex>
            <Box>
              <Box color={"#888888"}>
                <label>First name</label>
              </Box>
              <Input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                border={"none"}
                borderBottom={"1px solid #888888"}
                _focus={{ outline: "none", borderBottom: "1px solid #888888" }}
                _hover={{ outline: "none", borderBottom: "1px solid #888888" }}
              />
            </Box>
            <Box ml={"auto"}>
              <Box color={"#888888"}>
                <label>Last name</label>
              </Box>
              <Input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                border={"none"}
                borderBottom={"1px solid #888888"}
                _focus={{ outline: "none", borderBottom: "1px solid #888888" }}
                _hover={{ outline: "none", borderBottom: "1px solid #888888" }}
              />
            </Box>
          </Flex>
          <Box>
            <Box color={"#888888"}>
              <label>Address</label>
            </Box>
            <Input
              name="address"
              value={formData.address}
              onChange={handleChange}
              border={"none"}
              borderBottom={"1px solid #888888"}
              _focus={{ outline: "none", borderBottom: "1px solid #888888" }}
              _hover={{ outline: "none", borderBottom: "1px solid #888888" }}
            />
          </Box>
          <Box>
            <Box color={"#888888"}>
              <label>City</label>
            </Box>
            <Input
              name="city"
              value={formData.city}
              onChange={handleChange}
              border={"none"}
              borderBottom={"1px solid #888888"}
              _focus={{ outline: "none", borderBottom: "1px solid #888888" }}
              _hover={{ outline: "none", borderBottom: "1px solid #888888" }}
            />
          </Box>
          <Flex>
            <Box>
              <Box color={"#888888"}>
                <label>State</label>
              </Box>
              <Input
                name="state"
                value={formData.state}
                onChange={handleChange}
                border={"none"}
                borderBottom={"1px solid #888888"}
                _focus={{ outline: "none", borderBottom: "1px solid #888888" }}
                _hover={{ outline: "none", borderBottom: "1px solid #888888" }}
              />
            </Box>
            <Box ml={"auto"}>
              <Box color={"#888888"}>
                <label>ZIP Code</label>
              </Box>
              <Input
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                border={"none"}
                borderBottom={"1px solid #888888"}
                _focus={{ outline: "none", borderBottom: "1px solid #888888" }}
                _hover={{ outline: "none", borderBottom: "1px solid #888888" }}
              />
            </Box>
          </Flex>
          <Box>
            <Box color={"#888888"}>
              <label>Phone Number</label>
            </Box>
            <Input
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              border={"none"}
              borderBottom={"1px solid #888888"}
              _focus={{ outline: "none", borderBottom: "1px solid #888888" }}
              _hover={{ outline: "none", borderBottom: "1px solid #888888" }}
            />
          </Box>
        </Flex>
        <Box bg={"#FF5E00"} color={"#FCFCFC"} p={"1em"} _hover={{cursor: "pointer", color:"#FF5E00", bg: "#FCFCFC", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }} onClick={handleSubmit}>
          <Text fontSize={"16px"} lineHeight={"26px"} letterSpacing={"1%"} textAlign={"center"}>
            ADD NOW
          </Text>
        </Box>
      </form>
    </Box>
  );
};

export default AddAddress;
