import React from "react";
import CarrinhoItem from "./CarrinhoItem";

export default function CarrinhoList({value}) {
    const {cart} = value;

    return(
        <div className="container-fluid">
            {cart.map(item =>{
                return <CarrinhoItem key={item.id} item={item} value={value}/>;
            })}    
        </div>
        
    );

 
}