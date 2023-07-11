import styled from "styled-components";


export const ButtonContainer = styled.button`

text-transform:capitalize;
font: 1.4rem;
background: transparent;
border:0.05rem solid var(--mainPurple);
color: var(--mainPurple);
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background: #f08080; 
    color: var(--mainPurple);

}
&:focus{
    outline: none;
}


`;




