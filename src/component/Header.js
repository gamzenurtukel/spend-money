import React from 'react';

function Header({ money, total }) {
    return (
        <>
            <div className="header">
                {total > 0 && money-total !== 0 &&
                    <div>
                        Harcayacak<span className="span">${money - total}</span>paranız kaldı! 
                    </div>
                }
                {total === 0 &&
                    <div>
                        Harcayacak<span className="span">${money - total}</span>paranız var!
                    </div>
                }
                {money-total === 0 &&
                    <div>
                        Paranız bitti!!!
                    </div>
                }
                <style jsx="true">{`
                .header{
                    display:flex;
                    justify-content:center;
                    background-color:#0779E6;
                    color:#f0ffff;
                    padding-top:10px;
                    padding-bottom:10px;
                    position:fixed;
                    width:100%;
                    height:30px;
                    z-index: 1000; 
                    top: 0;                 
                    left: 0;                     
                    font-size:17px;
                    letter-spacing:1px; 
                                                     
                }   
                .header div span{
                    font-weight:bold;
                    margin:0 10px;
                    font-size:19px;
                }             
            `}</style>
            </div>
        </>
    );
}
export default Header;