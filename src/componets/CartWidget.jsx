import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
const CartWidget = () => {
  return (
    <div className="cart">
     <Button size='lg' variant="outline" >
    <span class="material-symbols-outlined">shopping_cart</span>
    <span>3</span>
     </Button>
    </div>
    )
}

export default CartWidget
