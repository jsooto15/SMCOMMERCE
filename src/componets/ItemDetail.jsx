import React from 'react'
import { useParams } from 'react-router-dom';
import storeItems from "../data/products.json";
import { Item } from "./Item";

function ItemDetail(){
const isDetail = true
const {productId} = useParams()
const thisProduct = storeItems.find (prod => prod.id ==  productId)

return (
<div className="item-detail">
<Item key={thisProduct.id} {...thisProduct} />
</div>
)

}

export default ItemDetail