import React from 'react'
import { Flex, Spacer } from '@chakra-ui/react'
import CartWidget from './CartWidget'
import {
  Box,
  Heading,
  Container, 
  Button, 
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
 
} from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons'
const NavBar = () => {
  return (
    <>   
     <Container>  
  <Flex justifyContent="right" gap="1">
  <Box   p='10' w="400px" h="100"> 
  <Heading >SM COMMERCE</Heading>
  </Box>
  <Spacer />
  <Box p="75" w="200px" h="100">
   <Menu>
  <MenuButton 
  as={Button} siza="lg" variant="outline"rightIcon={<ChevronDownIcon />}>
    Menu
  </MenuButton>
  <MenuList>
    <MenuItem>Catalogo</MenuItem>
    <MenuItem>About</MenuItem>
    <MenuItem>Metodos de pago</MenuItem>
  </MenuList>
</Menu>
  </Box>
  <Box p='75' w="300px" h="100">
   <CartWidget/> 
  </Box>
</Flex>
</Container>
    </>

  )
}

export default NavBar
