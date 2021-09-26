/* eslint-disable no-dupe-keys */
import React,{useContext} from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { GiShare } from 'react-icons/gi';
import { ActionCard } from '../StyledComponent/Styled.Components';
import { P } from '../StyledComponent/Styled.Components';
import style from '../../assets/css/local.module.css';
import ContextApi from '../../Context/ContextApi';
import Swal from 'sweetalert2';


function ProductInfo() {

    const context = useContext(ContextApi);

    const OrderAction = () => {

        if (0>=Number(context.count)) {

            alert('Please Select Number of Order');
            return false;
        }
        else if (Number(context.count)>5) {
            alert('we can not accept more than 5 orders');
        }
        else {
            Swal.fire({
                title: 'Are you sure?',
                text: "Do you want to confirm this Order!",
                text: 'Total Summary',
                text: `Subtotal:    $${context.count * 70}`,
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#30D675',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Confirm it!'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Confirm!',
                    'Your Order is Successfully confirm.',
                    'success'
                  )
                }
              })
              
        }
      
    }

    return (
        <div>
         <div className={style.Product_Content}>
         <P>
            Oakley sunglasses boast a two-tone design with semi-rim wrap-around frame that gives a sporty look
            Designed for men<br/>
            TR90 Flexibility Material Frame<br/>
            Oakley O icon on the temple<br/>
            5 Different color Interchangeable lenses<br/>
            Material: Plastic<br/>
            Color: Multicolor<br/>
            Size: 17 x 12 x 5.1 cm<br/>
            Size: 7.5 x 4.8 x 2 inch<br/>
            Weight: 120 gm
            </P> 
          </div>
            <div className={style.UserInput_Number}>
                <AiOutlineArrowLeft className={style.ArrowIcon}
                onClick={()=>context.CountDispatch('Increment')}
                />
                 {`${context.count}`}
                <AiOutlineArrowRight className={style.ArrowIcon}
                 onClick={()=>context.CountDispatch('Decrement')}
                />
            </div>
            <div className={style.CardAction}>
                <ActionCard OrderAction={OrderAction}>
                    {'Add to Bag'}
                </ActionCard>
            </div>
            <div className={style.shareWrap}>
                <GiShare className={style.shareIcon}/>
            </div>
        </div>
    )
}

export default ProductInfo
