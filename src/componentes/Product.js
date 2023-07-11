import React, { Component } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {ProdutoConsumer} from "../Context";
import PropTypes from "prop-types";





export default class Product extends Component {
    render() {
        const{id, title, img, price, inCart} = this.props.product;
        return (
            <ProdutoWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
               <div className="card">

                <ProdutoConsumer>
                {value =>(<div className="img-container p-5" onClick={()=>value.handleDetalhe(id)}>
                    <Link to="/details">
                        <img src={img} alt="product" className="card-img-top"/>
                    </Link>
                    <button className="cart-btn" disabled={inCart? true : 
                        false} onClick={()=>{value.addTOCarrinho(id); value.openModal(id);
                    }}>
                    {inCart ?(
                        <p className="text-capitalize mb-8" disabled>
                            {""}
                            Ja existe
                             </p>
                    ) : (
                        <i className="fas fa-cart-plus"/>
                    )}
                    </button>
                </div>)}
                </ProdutoConsumer>


                <div className="card-footer d-flex justify-content-between">
                    <p className="align-self-center mb-0">
                        {title}
                    </p>
                    <h5 className="text-purple font-italic mb-0">
                        <span className="mr-1">R$</span>
                        {price}
                    </h5>


                </div>
               </div>
            </ProdutoWrapper>
        );
    }
}

Product.propType={
    product:PropTypes.shape({

        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool,
       
    }).isRequired
   
};

const ProdutoWrapper = styled.div`
.card{
    border-color:transparent;
    transition:all 1s linear;
}
.card-footer{
    background:transparente;
    border-top:transparente;
    transition:all 1s linear;
}
&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow:px 2px 5px 0px rgba(0,0,0,0.2);

    }
    .card-footer{
        background:rgba(247,247,247);

    }
}
.img-container{
    position: relative;
    overflw:hidden;
}
.card-img-top{
    transition:all 1s linear;

}
.img-container:hover .card-img-top{
    transform:scale(1.2);
}

.cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding:0.2rem 0.4rem;
    background: var(--mainPink);
  
    border:none;
    font-size:0.8rem;
    border-radius:0.5rem 0 0 0;
    transition:all 1s linear;
   

}
.cart-btn:hover {
    background-color: var(--lightGreen);
    cursor:pointer;
}


`;