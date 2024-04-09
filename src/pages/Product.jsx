/*products page of the window*/
import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import all_product from '../components/Assets/all_product.js';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrum/Breadcrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay.jsx';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox.jsx';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts.jsx';

const Product = () => {
    /*const {all_product} = useContext(ShopContext);*/
    const {productId} = useParams();
    console.log(productId);
    const product = all_product.find((e) => e.id === Number(productId))
    return (
        <div>
            <Breadcrum product={product} />
            <ProductDisplay product = {product}/>
            <DescriptionBox/>
            <RelatedProducts/>
        </div>
    )
}

export default Product