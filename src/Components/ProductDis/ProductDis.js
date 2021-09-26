import React,{useState} from 'react'
import watch1 from '../../assets/images/watch1.jpg';
import watch2 from '../../assets/images/watch2.jpg';
import {StoreImageWrap, Image,StoredImage} from '../StyledComponent/Styled.Components';
import style from '../../assets/css/local.module.css';

function ProductDis() {

    const [Product1, SetProduct1] = useState(true);

    const [Product2, SetProduct2] = useState(false);


    const HandleProduct1 = () => {
        
        SetProduct1(!Product1)
        SetProduct2(false)
       

    }

    const HandleProduct2 = () => {
        
        SetProduct2(!Product2)
        SetProduct1(false);

    }


    return (
        <div>
            <div className={style.ProductItem_Wrap}>
                <Image src={Product1 ? watch1:Product2?watch2:watch2}/>
            </div>
            <StoreImageWrap>
                <StoredImage src={watch1} alt="" onClick={HandleProduct1}/>
                <StoredImage src={watch2} alt="" onClick={HandleProduct2}/>
            </StoreImageWrap>
        </div>
    )
}

export default ProductDis
