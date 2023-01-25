import React, { useState, useEffect } from "react";
import { Header } from "../Header";
import { ContainerLoja } from "../ContainerLoja"
import listaProdutos from "../../listaProdutos/listaProdutos.json"
import {Aviso, Container} from "./styles"
import "boxicons"

const localStorageCart = JSON.parse(localStorage.getItem("cart"))

export const Main = () => {
    
    const [cart, setCart] = useState(localStorage.getItem("cart") !== null ? localStorageCart : [])
    const [aviso, setAviso] = useState(false)

    const addToCart = (produto) => {
        let itemExiste = false
        cart.forEach((item) => {
            if(item.id === produto.id)
            itemExiste = true
        })
        if(itemExiste) {
            setAviso(true)
            setTimeout(() => {
                setAviso(false)
            }, 2000);
            return
        }
        setCart([...cart, produto])
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    return (
        <Container>
            <Header
                size={cart.length}
                cart={cart}
                setCart={setCart}
            />
            <ContainerLoja 
                listaProdutos={listaProdutos} 
                addToCart={addToCart}
            />
            {aviso && <Aviso className="aviso">Item já adicionado ao carrinho</Aviso>}
        </Container>
    )
}
