import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../transferir.jpg";
import { styled } from "styled-components";
import { ButtonContainer } from "./Button";



class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm px-sm-5">
                <Link to ="/">
                    <img src={logo} alt="loja" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/"  className="nav-link">
                           <h3>BS Eletro</h3> 
                        </Link>

                    </li>
                </ul>


                <Link to="/cart"  className="ml-auto">
                    
                    <ButtonContainer>
                        <span className="mr-2"> 
                        <i className="fas fa-cart-plus" />
                        </span>
                       
                        Meu Carrinho
                    </ButtonContainer>
                </Link>

            </NavWrapper>
        
        
          
            
        );
    }
}

export default Navbar;


const NavWrapper = styled.nav`
background: var(--mainlightPurple);
.nav-link{
    color:var(--mainPurple) !important;
    font-size: 1.2rem;
    text-transform: capitalize;
}

`;



