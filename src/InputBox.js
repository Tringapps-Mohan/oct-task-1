import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function InputBox(props){
    const state = useSelector(state=>state);
    const [price,setPrice] = useState(state.current.price);
    useEffect(()=>{
        setPrice(state.current.price);
        console.log(price);
    });
    if(props.readOnly){
        if(props.type == "total"){
            return <input placeholder={props.placeHolder} readOnly={props.readOnly} value={price*2}/>;
        }else{
            return <input placeholder={props.placeHolder} readOnly={props.readOnly} value={price}/>;
        }
    }else{
        return <input placeholder={props.placeHolder} readOnly={props.readOnly}/>;
    }
}

export default InputBox;