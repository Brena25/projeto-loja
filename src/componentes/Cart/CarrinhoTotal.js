import React from "react";
import { Link } from "react-router-dom";
import CarrinhoItem from "./CarrinhoItem";



export default function CarrinhoTotal({ value }) {
    const { cartSubTotal, cartTotal } = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-5m-5 ml-md-auto col -5m-8 text-capitalize text-bright" >
                        <Link to="/">
                            <button className="btn-outiline-black text-uppercase mb-3 px-5 text-purple">
                                Loja 
                            </button>
                        </Link>
                    </div>
                    <div class="text-purple col -5m-8 " id="footer-font">
                    <b class="pl-md-5  ">TOTAL R$<span class="pl-md-5" id="valorTotalCompra"></span></b>
                </div>
                </div>
            </div>

        
        </React.Fragment>

        

    );
}

















