import React from "react";

export default function CarrinhoItem({item,value}) {
    const {id,title,img,price,total,count}=item;
    const {incremento,descremento,removerItem}=value;

    return (
        <div className="row my-1 text-capitalize text-center">
            <div className="col-10 mx-buto col-lg-2">
                <img src={img} style={{ width: "5rem", height: "5rem" }}
                    className="img-fluid"
                    alt="product"/>

            </div>
            <div className="col-10 mx-buto col-lg-2">
                <span className="d-lg-none">Produto :</span>
                {title}
            </div>

            <div className="col-10 mx-buto col-lg-2">
                <span className="d-lg-none">Preco : R$</span>
                R$ {price}

            </div>

            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={() =>
                            descremento(id)}>
                            -
                        </span>
                        <span className="btn btn-black mx-1">{count}</span>
                        <span className="btn btn-black mx-1" onClick={() =>
                            incremento(id)}>
                            +

                        </span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-buto col-lg-2">
                <div className="cart-icon" onClick={() => removerItem(id)}>
                    <i className="fas fa-trash" />
                </div>
n
            </div>

            <div className="col-10 mx-buto col-lg-2">
                <strong>R$ {total} </strong>


            </div>
        </div>   

    );
}
