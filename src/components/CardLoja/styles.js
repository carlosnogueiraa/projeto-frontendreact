import styled from "styled-components"

export const ContainerMain = styled.div`
    width: 100%;
`

export const ContainerOrdem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 50px;

    select {
        padding: 6px;
        border-radius: 4px;
        background-color: #f2f2f2;
        width: 200px;
    }

    .produtosQtd{
        font-weight: bold;
    }

    @media (max-width: 1000px) {
        width: 100%;
        margin-top: 20px;

        select {
        padding: 6px;
        border-radius: 4px;
        background-color: #f2f2f2;
        width: 100px;
        }
    }
`

export const ContainerCard = styled.ul`
    padding: 2rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, auto));
    grid-gap: 20px;
    `

export const Card = styled.li`
    display: inline-block;
    list-style: none;
    width: 250px;
    height: 380px;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
    box-shadow: rgba(0, 0, 0, 0.15) 7px 5px 20px 1px;
    border-radius: 10px;

    .imgProduct{
        border-radius: 10px 10px 0px 0px;
        width: 250px;
        height: 250px;
        border-bottom: 1px solid transparent;
        border-image: linear-gradient(to right, #1e2158, #cb4582);
        border-image-slice: 1;
    }
`

export const ProdutoStatus = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 250px;
    height: 100px;
    justify-content: center;

    h3 {
        margin-bottom: 10px;
    }

    p {
        margin-bottom: 10px;
    }
    

    button {
        cursor: pointer;

        align-self: center;
        color: white;
        font-weight: bold;
        border: none;
        border-radius: 10px;
        padding: 10px;
        transition: 0.2s;
        background-color: #1e2158;

        :hover{
            background-color: #cb4582;
            box-shadow: 0px 5px 10px rgba(203, 69, 130, 0.4);
            transform: translateY(-4px);
        }
    }
`

export const SemProduto = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    padding: 4rem;
`