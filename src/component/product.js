import React, { useCallback } from 'react';


function Product({ props, cart, setCart, total, money }) {

    const cartItem = cart.find(item => item.id == props.id)

    const addCart = () => {
        const checkCart = cart.find(item => item.id === props.id)
        if (checkCart) {
            checkCart.amount += 1
            setCart([...cart.filter(item => item.id !== props.id), checkCart])
        }
        else {
            setCart([...cart, {
                id: props.id,
                amount: 1
            }])
        }
    };
    const removeCart = () => {
        const checkCart = cart.find(item => item.id === props.id)
        const cartCurrent = cart.filter(item => item.id !== props.id)
        checkCart.amount -= 1
        if (checkCart.amount == -1) {
            setCart = ([...cartCurrent])
        } else {
            setCart([...cartCurrent, checkCart])
        }
    };
    return (
        <>
            <div className="product">
                <img className="img" src={props.image} />
                <hr size="2"/>
                <h4>{props.title}</h4>
                <div className="price">${props.price}</div>
                <br/>
                <div className="action">
                    <button disabled={total + props.price > money} onClick={addCart} className="buton1">ekle</button>
                    <span className="amount">{cartItem && cartItem.amount || 0}</span>
                    <button disabled={!cartItem} onClick={removeCart} className="buton1">çıkar</button>
                </div>
                <style jsx="true">{`
            .product{
                padding:10px 10px 10px 35px;
                background: #fff;
                border:2px solid #ddd; 
                margin-bottom:15px;
                margin-top:20px;
                border-radius:7px;           
               
               

            }
            
            .product img{
                width: 250px;
                height: 250px;
                text-align:center;
                display: block; 
                margin: auto;
            }
            .product h4{
                text-align:center;
                font-size:19px;
            }  
            .product div.price{
                font-weight: bold;
                font-family:Segoe UI;
                margin-left:10px;
                
            }  
            .product div.action button{
                display:inline-block;
                justify-content:center;
                align-items:center;                
                padding:5px;
                margin:5px;
                width:80px;                
                border-radius:1px;
                background-color:#FFFFFF;
                color:#0779E6;
                border: 2px solid #0779E6;
                -webkit-transition-duration: 0.4s;
                transition-duration: 0.4s;                
               
            } 
            .product div.action button:hover{
                background-color:#0779E6;
                border-color:#0779E6;
                color:#f0ffff; 
                box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
            }
            .product div span{
                padding:2px 5px 5px 5px;
                margin:3px;
                border: 1px solid #F1EAEA;
                display:flex-box;
                justify-content:center;
                align-items:center;
            }  
            
            `}</style>
            </div>
        </>
    );
};
export default Product;