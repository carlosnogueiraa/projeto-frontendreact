import React, { useState, useEffect } from "react";
import {
    Logo,
    ContainerHeader,
    TotalProdutos,
    Titulo,
    CartBox,
    ContainerCart,
    ValorTotal,
    Lixeira
} from './styles'
import logo from '../../assets/images/logo.png'

export const Header = ({ size, cart, setCart }) => {

    const [preco, setPreco] = useState(0)
    const [mostraCarrinho, setMostraCarrinho] = useState(false)

    const handlePreco = () => {
        let valor = 0
        cart.map((produto) => {
            valor += produto.qtd * produto.value
        })
        setPreco(valor)
    }

    useEffect(() => {
        handlePreco()
    })

    const handleItem = (item, operacao) => {
        let i = -1
        cart.forEach((data, indice) => {
            if (data.id === item.id)
                i = indice
        })
        const arrItem = cart
        arrItem[i].qtd += operacao
        if (arrItem[i].qtd === 0)
            arrItem[i].qtd = 1
        setCart([...arrItem])
    }

    const removeProduct = (id) => {
        const arr = cart.filter((produto) => {
            if(produto.id === id){
                produto.qtd = 1
            }
            if(produto.id !== id){
                return produto
            }
        })
        setCart(arr)
        console.log(arr)
        // handlePreco()
    }

    return (
        <ContainerHeader>
            <a href="#">
                <div className="logo">
                    <Logo src={logo} alt="" />
                </div>
            </a>
            <Titulo>AstroLab</Titulo>
            <TotalProdutos onClick={() => setMostraCarrinho(!mostraCarrinho)} className="cart">
                <box-icon name="cart"></box-icon>
                <span className="item_total">{size}</span>
            </TotalProdutos>
            {mostraCarrinho &&
                <ContainerCart>
                    {cart.map((produto) => (
                        <CartBox className="cartBox" key={produto.id}>
                                <img src={produto.imageUrl} className="cartImg" alt="" />
                            <div className="titleProduct">
                                <p>{produto.name}</p>
                                <div>R$ {produto.value},00</div>
                            </div>
                            <div className="addRemoveBtn">
                                <button className="btnRemoveItem" onClick={() => handleItem(produto, -1)}> - </button>
                                <p>{produto.qtd}</p>
                                <button className="btnAddItem" onClick={() => handleItem(produto, +1)}> + </button>
                            </div>
                            <Lixeira>
                                <box-icon className="btnRemoveProduct" name="trash" onClick={() => removeProduct(produto.id)}></box-icon>
                            </Lixeira>
                        </CartBox>
                    ))}
                    {cart.length ?
                        <ValorTotal>
                            <div>Valor Total: R$ {preco},00</div>
                        </ValorTotal>
                        :
                        <p>Nenhum produto adicionado</p>
                    }
                </ContainerCart>
            }
        </ContainerHeader >
    )
}