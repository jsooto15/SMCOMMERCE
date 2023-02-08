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
const navbar = () => {
  return (
    <>   
  <Container>  
  <Flex alignItems="center" gap="2">
  <Box p='10' w="300px" h="100">
  <Heading size="md">SM COMMERCE</Heading>
  </Box>
  <Spacer />
  <Box>
   <Menu>
  <MenuButton 
  as={Button} siza="lg" variant="outline"rightIcon={<ChevronDownIcon />}>
    Menu
  </MenuButton>
  <MenuList>
    <MenuItem>Pasarela de pago</MenuItem>
    <MenuItem>About</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
  </Box>
  <Box p='10' w="300px" h="100">
   <CartWidget/> 
  </Box>
</Flex>
</Container>
</>

  )
}

export default navbar
