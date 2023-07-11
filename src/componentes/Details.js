import React, { Component } from "react";
import { ProdutoConsumer } from "../Context";
import { Link } from "react-router-dom";
import {ButtonContainer} from "./Button";

export default class Details extends Component {
    render() {
        return (
            <ProdutoConsumer >
                {value =>{
                    const {id, company, img, info, price, title, inCart}=
                    value.detalhesProduto;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted 
                                text-purple my-5">

                                    <h1>{title}</h1>

                                </div>

                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product"/>
                                </div>

                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h2>modelo:{title}</h2> 
                                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                    Fabricado por: <span className="text-uppercase">
                                    {company}
                                    </span>
                                    </h4> 
                                    <h4 className="text-danger">
                                   <strong>Preço : <span>R$ </span>
                                    {price}
                                    </strong>
                                    
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-8">
                                        Informações adicionais:
                                    </p>
                                    <p className="text-muted lead ">{info} </p>
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>
                                                Voltar
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer 
                                        cart 
                                        disabled={inCart?true:false}
                                        onClick={()=>{
                                        value.addTOCarrinho(id);
                                        value.openModal(id);


                                        }}
                                        >
                                          {inCart? "Já tem no carrinho":"Adicionar ao carrinho"}

                                        </ButtonContainer>
                                    </div>


                                </div>

                            </div>

                        </div>
                    );
                }}

               
            </ProdutoConsumer >
        );
    }
}


