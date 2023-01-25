import styled from "styled-components"

export const Container = styled.div`
    padding: 16px;
    display: flex;

    @media (max-width: 1000px){
        flex-direction: column;
        }
    `

export const ContainerInputs = styled.div`
    display: flex;
    width: 230px;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    background-color: lightgray;
    border: 1px solid gray;
    border-radius: 4px;
    font-weight: bold;
    font-size: 16px;


    @media (max-width: 1000px){
        flex-direction: column;
        width: 100%;
        height: 24vh;
        align-self: center;
        justify-content: center;
        font-size: 14px;
        }
`

export const InputBusca = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    gap: 8px;

    input {
        border-radius: 5px;
        padding: 8px;
    }

    @media (max-width: 1000px){
        align-items: center;
        width: 80%;
    }
`

export const InputsMinMax = styled.div`
    display: flex;
    width: 200px;
    flex-direction: column;
    gap: 8px;

    input {
        border-radius: 5px;
        padding: 8px;
    }

    @media (max-width: 1000px){
        flex-direction: row;
        width: 100%;

        input{
            padding: 2px;
            width: 60%;
        }
    }

`