import './App.css';
import Header from './component/Header';
import { useEffect, useState } from 'react';
import products from './products.json';
import Product from './component/product';

function App() {

  const [money, setMoney] = useState(1000);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const resetCart = () => {
    setCart([]);
  };

  useEffect(() => {
    setTotal(cart.reduce((acc, item) => {
      return acc + (item.amount * (products.find(product => product.id === item.id).price))
    }, 0)
    )
  }, [cart]);


  return (
    <>
      <div className="app">
        <Header total={total} money={money} />

        {products.map(product => (
          <Product key={product.id} total={total} money={money} cart={cart} setCart={setCart} props={product} />
        ))}



        <style jsx="true">{`
                .app{
                  display:flex;                  
                  flex-flow:row wrap;
                  justify-content:space-between;
                  align-items:center;                  
                  padding:50px 30px 30px 30px;       
                                

                }
                .buton3{
                  padding:10px;
                  border-radius:5px;
                  border-color:#0779E6;
                  background-color:#0779E6;
                  color:#f0ffff;
                  font-size:15px;                  
                  align:center;
                  margin:0px 10px 25px 970px;
                  float:center;
                  display:flex;
                  flex-direction:row;
                  justify-content:center;
                }
                .buton3:hover{
                  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
                  opacity:0.9;
                }                                
        `}</style>
      </div>
      <button className="buton3" onClick={resetCart}> sepeti sıfırla</button>
    </>
  );
}

export default App;


