import {useState} from 'react'
import {moneyFormat} from '../helpers';


function Header({total , money})
{
    return(
        <>
                { total>0 && money-total !=0 && (
                    <>
                        <div className='header'>Harcayabileceğiniz <span> {moneyFormat( money - total)} </span> tl paranız kaldı!!!</div>
                    </>

                )} 
                { total===0 && (
                    <>
                        <div className='header'>Harcamak için <span> {moneyFormat(money)} </span> tl paranız var!!!</div>
                    </>

                )} 
                { money - total===0 && (
                    <>
                        <div className='header'>Paran bitti !!!!!!!! </div>
                    </>

                )} 
                <style jsx>{`
                .header {
                    position: sticky;
                    top: 0;
                    background: linear-gradient(to bottom, #20b820,#14be2a);
                    height: 60 px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    font-size: 24px;
                    letter-spacing: 1 px;
                }
                .header span{
                    margin:0 10px;
                    font-weight:bold;

                }
                `}</style>
        </>
    )
}

export default Header;

