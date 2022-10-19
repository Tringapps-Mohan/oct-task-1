import { createStore } from 'redux';
import './App.css';
import Card from './Card';
import Product from './Product';
import { Provider } from 'react-redux';
import data from './data.json';
import { useEffect, useState } from 'react';
function App() {
  // const [state,setState] = useState({options:[],type:""});
  const [options,setOptions] = useState([]);
  const [ProductType,setProductType] = useState("");
  let v = localStorage.getItem("oct-task-1");
  const [cards,setCards] = useState(v?JSON.parse(v):{});
  function showCart(type){
    setOptions(data.Phones.find(e=>e.type == type).options);
    setProductType(type);
  }

  function selectingProduct(){
      if(ProductType=="Realme")
      return <Product options={options} type={ProductType} Name = "Realme C2" />
      else if(ProductType=="Samsung")
      return <Product options={options} type={ProductType} Name = "Galaxy" />
      else if(ProductType=="Intex")
      return <Product options={options} type={ProductType} Name = "Intex Cloud 4G" />
      else
      return ""
  }

  useEffect(()=>{
  },[options,ProductType,cards]);

  return (
    <>
      <div className='suppliersContainer'>
        <button onClick={()=>showCart("Realme")}>Realme</button>
        <button onClick={()=>showCart("Samsung")}>Samsung</button>
        <button onClick={()=>showCart("Intex")}>Intex</button>
      </div>
      <div className='cardsContainer'>
        <div className='card'>
        {Object.values(cards).filter(e=>e.type === "Realme").map(e=><Card name={e.name} quantity={e.quantity} price={e.price} total={e.total}/>)}
        </div>
        <div className='card'>
        {Object.values(cards).filter(e=>e.type === "Samsung").map(e=><Card name={e.name} quantity={e.quantity} price={e.price} total={e.total}/>)}
        </div>
        <div className='card'>
        {Object.values(cards).filter(e=>e.type === "Intex").map(e=><Card name={e.name} quantity={e.quantity} price={e.price} total={e.total}/>)}
        </div>
      </div>
      <div>
      {/* {
        ProductType=="Realme"?
        <Product options={options} type={ProductType} Name = "Realme C2" />
        :<>
        {
          ProductType=="Samsung"?<Product options={options} type={ProductType} Name = "Galaxy" />
          :<>{
            ProductType=="Intex"?<Product options={options} type={ProductType} Name = "Intex Cloud 4G" />:null
          }</>
        }
        </>
        
      } */}
      {
        selectingProduct()
      }
      </div>
    </>
  );
}

export default App;
