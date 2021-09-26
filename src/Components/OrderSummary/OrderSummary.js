import React from 'react'
import style from '../../assets/css/local.module.css';
import ProgressComponent from '../ProgressComponent/ProgressComponent';

function OrderSummary() {
    return (
        <div className={style.Summary}>
            <div className={style.SummaryDis}>
             <div className={style.SummaryContent}>
                 <ProgressComponent/>
             </div>
            </div>
        </div>
    )
}

export default OrderSummary
