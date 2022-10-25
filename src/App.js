import './App.css';
import Card from './Card';
import Product from './Product';
import data from './data.json';
import { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
function App() {
  const [options,setOptions] = useState([]);
  const [ProductType,setProductType] = useState("");
  const cards = useSelector(state=>state.storedContent);
  function showCart(type){
    setOptions(data.Phones.find(e=>e.type == type).options);
    setProductType(type);
  }

  useEffect(()=>{
  },[options,ProductType]);

  return (
    <>
      <div className='suppliersContainer'>
        <button onClick={()=>showCart("Realme")}>Realme</button>
        <button onClick={()=>showCart("Samsung")}>Samsung</button>
        <button onClick={()=>showCart("Intex")}>Intex</button>
      </div>
      <div className='cardsContainer'>
        <div className='card'>
        {Object.values(cards).filter(e=>e.type === "Realme").map((e,i)=><Card key={i} name={e.name} quantity={e.quantity} price={e.price} total={e.total}/>)}
        </div>
        <div className='card'>
        {Object.values(cards).filter(e=>e.type === "Samsung").map((e,i)=><Card key={i} name={e.name} quantity={e.quantity} price={e.price} total={e.total}/>)}
        </div>
        <div className='card'>
        {Object.values(cards).filter(e=>e.type === "Intex").map((e,i)=><Card key={i} name={e.name} quantity={e.quantity} price={e.price} total={e.total}/>)}
        </div>
      </div>
      <div>
      <div>
      {
        ProductType=="Realme"?
        <Product options={options} type={ProductType} Name = "Realme C2" />
        :""
      }
      {
        ProductType=="Samsung"?<Product options={options} type={ProductType} Name = "Galaxy" />:""
      }
      {
        ProductType=="Intex"?<Product options={options} type={ProductType} Name = "Intex Cloud 4G" />:""
      }
      </div>
      </div>
    </>
  );
}

export default App;
