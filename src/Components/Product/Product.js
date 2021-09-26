import React from 'react'
import ProductTitle from '../ProducTitle/ProductTitle';
import ProductDis from '../ProductDis/ProductDis'
import { Container } from '../StyledComponent/Styled.Components';
import ProductInfo from '../ProductInfo/ProductInfo';


function Product() {

    return (
         <Container>
            <ProductTitle />
            <ProductDis />
            <ProductInfo/>
         </Container>
    )
}

export default Product
