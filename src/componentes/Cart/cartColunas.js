import React from "react";

export default function cartColunas() {
    return(
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Produto</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Nome Produto</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Preço</p>
                </div>
                <div className=" col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Quantidade</p>
                </div>
                <div className=" col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Deletar</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Total</p>
                </div>
            </div>


        </div>



    );
};