import React,{useContext,useState} from 'react'
import style from '../../assets/css/local.module.css';
import { GiShoppingCart } from 'react-icons/gi';
import ContextApi from '../../Context/ContextApi';
import OrderSummary from '../OrderSummary/OrderSummary';
import { IoCloseCircleOutline } from 'react-icons/io5';



function SellComponent() {

    const [SeeOrder, SetOrder] = useState(true);
    
    const context = useContext(ContextApi);


    const AactionSummary = () => {
        
        SetOrder(!SeeOrder);

    }

    return (
        <div>
              <div className={style.sell_Wrap}>
                {
                 SeeOrder ?
                 <GiShoppingCart className={style.SellIcon}
                        onClick={AactionSummary}
                 />
                 :<IoCloseCircleOutline className={style.SellIcon}
                 onClick={AactionSummary}/>
                }
                <span className={style.SellNumber}>{context.count}</span>
            </div>
            {SeeOrder ? null : <OrderSummary/>}
      </div>
    )
}

export default SellComponent
