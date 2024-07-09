import React from "react";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Input,
} from "@chakra-ui/react";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box padding={"1em 1em 1.5em 1em"} bg={"#fff"}>
      <Flex alignItems={"center"} justifyContent={"space-between"} flexDirection={{ base: "row", md: "row" }}>
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            bg={"transparent"}
            icon={<HiMiniBars3CenterLeft size={"24px"} />}
            onClick={onOpen}
            aria-label={"Open Menu"}
          />
        </Box>
        <Box
          fontSize={"20px"}
          color={"#FF5E00"}
          textAlign={{ base: "center", md: "center" }}
          flex={{ base: "1", md: "none" }}
        >
          <Heading as={"h3"}>HOO!</Heading>
          <Heading as={"h3"}>Men's Fashion</Heading>
        </Box>
        <Flex
          display={{ base: "none", md: "flex" }}
          alignItems={"center"}
          justifyContent={"center"}
          width={"100%"}
          mx={"auto"}
        >
          <RouterLink to="/">
            <Text mx={"1em"}>Shop</Text>
          </RouterLink>
          <RouterLink to="/">
            <Text mx={"1em"}>Stories</Text>
          </RouterLink>
          <RouterLink to="/">
            <Text mx={"1em"}>About</Text>
          </RouterLink>
          <RouterLink to="/">
            <Text mx={"1em"}>Blog</Text>
          </RouterLink>
          <RouterLink to="/">
            <Text mx={"1em"}>Contact</Text>
          </RouterLink>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Box position={"relative"} ml={"2em"} _hover={{ cursor: "pointer" }}>
              <CiSearch size={"24px"} fontWeight={800} />
              <Input
                type="text"
                placeholder="Search..."
                position={"absolute"}
                top={0}
                left={"100%"}
                ml={2}
                width={"0"}
                _focus={{ width: "200px", border: "1px solid #888" }}
                transition={"width 0.3s ease"}
                visibility={"hidden"}
                _focusVisible={{ visibility: "visible" }}
              />
            </Box>
            <Flex alignItems={"center"} gap={"0.5em"} _hover={{ cursor: "pointer" }} flexDir={"row"}>
              <RouterLink to="/cart">
                <LiaShoppingBagSolid size={"24px"} />
                {/* <Text display={{ base: "none", md: "block" }} ml={2}>
                    Cart
                  </Text> */}
              </RouterLink>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          display={{ base: "flex", md: "none" }}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"18%"}
        >
          <Box _hover={{ cursor: "pointer" }}>
            <CiSearch size={"24px"} fontWeight={800} />
          </Box>
          <Box _hover={{ cursor: "pointer" }}>
            <RouterLink to="/cart">
              <LiaShoppingBagSolid size={"24px"} />
            </RouterLink>
          </Box>
        </Flex>
      </Flex>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Flex flexDir={"column"} alignItems={"center"} gap={"2em"} fontSize={"18px"}>
              <RouterLink to="/" onClick={onClose}>
                Shop
              </RouterLink>
              <RouterLink to="/" onClick={onClose}>
                Stories
              </RouterLink>
              <RouterLink to="/" onClick={onClose}>
                About
              </RouterLink>
              <RouterLink to="/" onClick={onClose}>
                Blog
              </RouterLink>
              <RouterLink to="/" onClick={onClose}>
                Contact
              </RouterLink>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
