import {
  Box,
  Flex,
  Heading,
  Link,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
} from "@chakra-ui/react";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box padding={"1em 1em 1.5em 1em"}>
      <header>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDirection={{ base: "row", md: "row" }}
        >
          <Flex alignItems={"center"} flex={"1"} gap={"2em"} border={"1px solid red"} w={"10%"}>
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
              mr={{ base: "auto", md: "1em" }}
            >
              <Heading as={"h3"}>HOO!</Heading>
              <Heading as={"h3"}>Men's Fashion</Heading>
            </Box>
          </Flex>
          <Flex
            display={{ base: "none", md: "flex" }}
            alignItems={"center"}
            justifyContent={"center"}
            width={"70%"}
            mx={"auto"}
          >
            <Link href="/shop" mx={"1em"}>Shop</Link>
            <Link href="/stories" mx={"1em"}>Stories</Link>
            <Link href="/about" mx={"1em"}>About</Link>
            <Link href="/blog" mx={"1em"}>Blog</Link>
            <Link href="/contact" mx={"1em"}>Contact</Link>
            <Flex alignItems={"center"} justifyContent={"space-between"} ml={"2em"}>
              <Box position={"relative"} _hover={{ cursor: "pointer" }}>
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
              <Flex
                alignItems={"center"}
                gap={"0.5em"}
                _hover={{ cursor: "pointer" }}
                ml={"2em"}
              >
                <Link href="/cart">
                  <LiaShoppingBagSolid size={"24px"} />
                  {/* <Text display={{ base: "none", md: "inline" }} ml={2}>
                    Cart
                  </Text> */}
                </Link>
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
              <Link href="/cart">
                <LiaShoppingBagSolid size={"24px"} />
              </Link>
            </Box>
          </Flex>
        </Flex>
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Flex
                flexDir={"column"}
                alignItems={"center"}
                gap={"2em"}
                fontSize={"18px"}
              >
                <Link href="/shop" onClick={onClose}>
                  Shop
                </Link>
                <Link href="/stories" onClick={onClose}>
                  Stories
                </Link>
                <Link href="/about" onClick={onClose}>
                  About
                </Link>
                <Link href="/blog" onClick={onClose}>
                  Blog
                </Link>
                <Link href="/contact" onClick={onClose}>
                  Contact
                </Link>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </header>
    </Box>
  );
};

export default Header;
