import React from 'react'
import style from '../../assets/css/local.module.css';
import { MdWidgets } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';
import { FaStarHalf } from 'react-icons/fa';

function ProductTitle() {
    return (
        <div>
            <h3 className={`${style.title}`}>Watch <MdWidgets className={`${style.titleICon}`} /></h3>
            <h1 className={`${style.ProductName}`}>Blue</h1>
             <h1 className={`${style.ProductName}`}>Rebel</h1>
            <p className={`${style.PriceTitle}`}>$ 70.00</p>
            <div className={`${style.ReviewWrap}`}>
                <AiFillStar className={`${style.StarRev}`}/>
                <AiFillStar className={`${style.StarRev}`}/>
                <AiFillStar className={`${style.StarRev}`}/>
                <AiFillStar className={`${style.StarRev}`} />
                <FaStarHalf className={`${style.StarRev}`}/>
            </div>
            <p className={`${style.CustomarRv}`}>(20) add your review ${`>`}</p>
        </div>
    )
}

export default ProductTitle
