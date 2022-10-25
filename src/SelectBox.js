import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "./act";

function SelectBox(){
    const options = useSelector(state=>state);
    const dispatch = useDispatch();
    const [defaultValue,setDefaultValue] = useState(options.current.name);
    let ready="";
    useEffect(()=>{
        setDefaultValue(options.current.name);
    })
    if(options.options.length)
    ready = options.options.map((e,i)=><option key={i} value={e.name}>{e.name}</option>);
    //console.log(options.length?options.map((e,i)=>`<option key=${i}>${e.name}</option>`):"","options");    
    return (
            <select defaultValue={defaultValue} onChange={(e)=>{dispatch(Product(options.type,e.target.value))}}>
                {<option>select</option>}
                {ready}           
            </select>
        );
}

export default SelectBox;