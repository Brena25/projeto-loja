import React, { Component } from "react";
import { lojaProdutos, detalhesProduto } from "./Data";
import CarrinhoItem from "./componentes/Cart/CarrinhoItem";


const ProdutoContext = React.createContext();

class ProdutoProvider extends Component {
    state = {
        products: lojaProdutos,
        detalhesProduto: detalhesProduto,
        cart: [],
        modalopen: false,
        modalProduto: detalhesProduto,
        cartSubTotal: 0,
        cartTotal: 0

    };
    componentDidMount() {
        this.setProducts();
    };

    handleDetalhe = id => {
        const product = this.pegarItem(id);
        this.setState(() => {
            return { detalhesProduto: product };
        });

    };

    addTOCarrinho = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.pegarItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return { products: tempProducts, cart: [...this.state.cart, product] };
        },
            () => {
                console.log(this.state);
            });
    };




    setProducts = () => {
        let tempProducts = [];
        lojaProdutos.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(() => {
            return { products: tempProducts };
        });
    };

    pegarItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    };

    openModal = id => {
        const product = this.pegarItem(id);
        this.setState(() => {
            return { modalProduto: product, modalopen: true }
        })
    };

    closeModal = () => {
        this.setState(() => {
            return { modalopen: false }
        })
    };

    incremento = (id) =>{
        

    };



    descremento = (id) => {



    };

    removerItem = (id) => {


    };

    clearCarrinho = (id) => {

    };



    render() {
        return (
            <ProdutoContext.Provider value={{
                ...this.state,
                handleDetalhe: this.handleDetalhe,
                addTOCarrinho: this.addTOCarrinho,
                openModal: this.openModal,
                closeModal: this.closeModal,
                incremento: this.incremento,
                descremento: this.descremento,
                removerItem: this.removerItem,
                clearCarrinho: this.clearCarrinho

            }}>
                {this.props.children}

            </ProdutoContext.Provider>
        )
    }
}

const ProdutoConsumer = ProdutoContext.Consumer;


export { ProdutoProvider, ProdutoConsumer };
