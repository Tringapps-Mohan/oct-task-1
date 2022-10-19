import React from "react";
import { useState,useEffect } from "react";
import data from './data.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Product({options,type,Name}) {
    const [flag,setFlag] = useState(true);
    const [quantity,setQuantity] = useState(0);
    const [price,setPrice] = useState(10);
    const [total,setTotal] = useState(0);
    const [name,setName] = useState(Name);
    const [products,setProducts] = useState({});
    const [counter,setCounter] = useState(1);
    const [productType,setProductType] = useState(type);
    function calcState(e){
        // console.log(e.target.name,e.target.value);
        switch(e.target.name){
            case "quantity":setQuantity(parseInt(e.target.value));break;
            case "productName":setName(e.target.value);break;
        }
    }

    function add(){
        setProducts({...products,[`${counter}`]:{name,price,total,quantity,type}});
        setCounter(counter+1);
    }

    function storeProducts(e){
        e.preventDefault();
        let storedProducts = localStorage.getItem("oct-task-1");
        if(!storedProducts){
            storedProducts = "[]";
        }

        localStorage.setItem("oct-task-1",JSON.stringify([...JSON.parse(storedProducts),...Object.values(products)]));
        setProducts({});
        toast("Products Added!");
    }

    function deleteThis(key){
        
        let a = {...products};
        console.log(a);
        delete a[key];
        console.log(a);
        setProducts(a);
    }

    useEffect(()=>{
        setTotal(price*quantity);
        console.log(type,options,name,flag);
        if(flag){
            setPrice(options.find(e=>e.name === Name).price);
            setFlag(false);
            console.log(type,options,name,flag);
        }else{
            setPrice(options.find(e=>e.name === name).price);
        }
        
    },[quantity,price,total,name,products,productType,options,type]);

    return (
        <form onSubmit={storeProducts}>
            <fieldset>
                <legend>Form</legend>
                <div>
                    <select onChange={calcState} name="productName" >
                    {options.map(e=><option>{e.name}</option>)}
                    </select>
                    <input type="number" placeholder="Quantity" name="quantity" onChange={calcState} value={quantity}/>
                    <input type="number" placeholder="Price" name="price" value={price} readOnly/>
                    <input type="number" placeholder="Total Amount" name="total" value={total} readOnly />
                    <input type="button" defaultValue="+" onClick={add}/>
                </div>
                <div>
                    <input type="submit" value="Submit" />
                    <input type="button" value="Cancel" onClick={()=>setProducts({})} />
                </div>
            </fieldset>
            <fieldset>
                <legend>Products</legend>
                <div>
                    {Object.entries(products).map((e)=><div key={e[0]}>
                        <input defaultValue={e[1].name} />
                        <input defaultValue={e[1].quantity}/>
                        <input defaultValue={e[1].price}/>
                        <input defaultValue={e[1].total}/>
                        <input type="button" value="-" onClick={()=>deleteThis(e[0])}/>
                    </div>)}
                </div>
            </fieldset>
            <ToastContainer/>
        </form>
    )
}

export default Product;