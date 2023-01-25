import React from "react";
import { Container, ContainerInputs, InputsMinMax, InputBusca } from "./styles";
import { useState } from "react";
import { CardLoja } from "../CardLoja"

export const ContainerLoja = ({ listaProdutos, addToCart}) => {

    const [pesquisa, setPesquisa] = useState("")
    const [ordem, setOrdem] = useState("")
    const [valorMin, setValorMin] = useState(0)
    const [valorMax, setValorMax] = useState(1000)

    const handleSearch = (e) => {
        setPesquisa(e.target.value)
    }

    const handleOrdem = (e) => {
        setOrdem(e.target.value)
    }

    const handleValorMin = (e) => {
        setValorMin(e.target.value)
    }

    const handleValorMax = (e) => {
        setValorMax(e.target.value)
    }

    return (
        <Container>
            <ContainerInputs>
                <InputBusca>
                    <p>Busca por nome</p>
                    <input
                        type="text"
                        placeholder="Buscar"
                        onChange={handleSearch}
                        value={pesquisa}
                    />
                </InputBusca>
                <InputsMinMax>
                    <p>Valor Mínimo</p>
                    <input
                        type="number"
                        placeholder="Digite um valor"
                        onChange={handleValorMin}
                        value={valorMin}
                    />

                    <p>Valor Máximo</p>
                    <input
                        type="number"
                        placeholder="Digite um valor"
                        onChange={handleValorMax}
                        value={valorMax}
                    />
                </InputsMinMax>
            </ContainerInputs>

            <CardLoja
                listaProdutos={listaProdutos}
                pesquisa={pesquisa}
                ordem={ordem}
                valorMin={valorMin}
                valorMax={valorMax}
                addToCart={addToCart}
                handleOrdem={handleOrdem}
            />
        </Container>
    )
}