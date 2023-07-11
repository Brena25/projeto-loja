import React, { Component } from "react";
import styled from "styled-components";
import { ProdutoConsumer } from "../Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";



export default class Modal extends Component {
    render() {
        return (
            <ProdutoConsumer>
                {(value) => {
                    const { modalopen, closeModal } = value;
                    const { img, title, price } = value.modalProduto;
                    if (!modalopen) {
                        return null;
                    } else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalizer">
                                            <h5>Produto adicionado com Sucesso no carrinho</h5>
                                            <img src={img} className="img-fluid" alt="product" />
                                            <h5>{title}</h5>
                                            <h5 className="text-muted">preço : R$ {price} </h5>
                                            <Link to="/">
                                                <ButtonContainer onClick={() => closeModal()}>
                                                    Loja
                                                </ButtonContainer>
                                            </Link>
                                            <Link to="/cart">
                                                <ButtonContainer onClick={() => closeModal()}>
                                                    Carrinho
                                                </ButtonContainer>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        );
                    }

                }}
            </ProdutoConsumer>
        );
    }
}

const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal{
    background: var(--mainWhite);

}

`;