import styled from 'styled-components'


export const ContainerHeader = styled.header`
    display: flex;
    width: 100%;
    min-height: 100px;
    max-width: 100%;
    overflow: hidden;
    justify-content: space-between;
    align-items: center;
    padding: 16px 3rem;
    box-sizing: border-box;

    @media (max-width: 1000px) {
        gap: 20px;
        padding: 16px 2rem;
    }
`

export const Titulo = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 40px;
`

export const Logo = styled.img`
    width: 100px;

    @media (max-width: 1000px) {
        width: 60px;
    }
`

export const TotalProdutos = styled.div`
    position: relative;
    cursor: pointer;
    
    box-icon{
        width: 35px;
        height: 35px;
    }
    
    .item_total{
        display: flex;
        position: absolute;
        top: -0.4rem;
        right: -0.5rem;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        color: white;
        padding: 0rem;
        font-size: 1.1rem;
        font-weight: 700;
        background-color: crimson;
    }
`

export const ContainerCart = styled.div`
    padding: 20px;
    width: 400px;
    border: 1px solid black;
    right: 65px;
    top: 70px;
    border: 2px solid #1e2158;
    border-radius: 4px;
    background-color: white;
    position: fixed;

    p{
        text-align: center;
    }

    @media (max-width: 1000px) {
        right: 45px;
        top: 50px;
        width: 80%;
        font-size: 14px;
    }
`

export const CartBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;

    .cartImg{
        width: 50px;
        height: 50px;
    }

    .titleProduct{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3px;
        width: 180px;
    }

    .addRemoveBtn{
        display: flex;
        gap: 10px;
    }
    
    .btnAddItem{
        width: 20px;
        font-weight: bold;
        font-size: 16px;
        color: #1ed760;
        border-radius: 50%;
        border: 1px solid #1ed760;
        background: none;
        cursor: pointer;
    }

    .btnRemoveItem{
        width: 20px;
        height: 20px;
        font-weight: bold;
        font-size: 16px;
        color: #f94c57;
        border-radius: 50%;
        border: 1px solid #f94c57;
        background: none;
        cursor: pointer;
    }
`

export const Lixeira = styled.div`
    cursor: pointer;
    margin-left: 10px;
`

export const ValorTotal = styled.div`
    margin-top: 10px;
    text-align: right;
    padding-right: 10px;
    font-weight: bold;
    font-size: 18px;

    @media (max-width: 1000px) {
        font-size: 16px;
    }
`

export const CarrinhoVazio = styled.div`
    text-align: center;
`
