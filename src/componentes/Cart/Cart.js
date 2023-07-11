import React, { Component } from "react";
import Title from "../Title";
import VazioCart from "./VazioCart";
import { ProdutoConsumer } from "../../Context";
import cartColunas from "./cartColunas";
import CarrinhoList from "./CarrinhoList";
import CarrinhoTotal from "./CarrinhoTotal.js";




export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProdutoConsumer>
                    {value =>{
                        const {cart} = value;
                        if(cart.length>0){
                            return(
                                <React.Fragment>
                                 <Title name="Seu" title=" Carrinho" />
                                 <cartColunas />
                                 <CarrinhoList value={value}/>
                                 <CarrinhoTotal value={value}/>
                                </React.Fragment>

                            );
                        }else{
                            return <VazioCart/>;

                        }
                    }}
                </ProdutoConsumer>

            </section>

        );
    }
}


