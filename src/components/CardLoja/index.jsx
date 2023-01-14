import { ContainerCard, Card, ProdutoStatus, SemProduto, ContainerMain, ContainerOrdem } from "./styles"

export const CardLoja = ({ listaProdutos, pesquisa, ordem, valorMin, valorMax, addToCart, handleOrdem }) => {

    const listaFiltrada = () => {
        return listaProdutos
            .filter((produto) => {
                return (
                    valorMin === 0 || produto.value >= valorMin
                )
            })
            .filter((produto) => {
                return (
                    valorMax === 0 || produto.value <= valorMax
                )
            })
            .filter((produto) => {
                return produto.name.toLowerCase().includes(pesquisa.toLowerCase())
            })
            .sort((a, b) => {
                if (ordem.toLowerCase() === "crescente") {
                    if (a.value < b.value) {
                        return -1
                    } else {
                        return true
                    }
                }
                if (ordem.toLowerCase() === "decrescente") {
                    if (a.value > b.value) {
                        return -1
                    } else {
                        return true
                    }
                }
            })
    }

    const novaListaFiltrada = listaFiltrada().map((produto) => {
        return (
            <Card key={produto.id}>
                <img src={produto.imageUrl} alt="" className="imgProduct" />
                <ProdutoStatus>
                    <h3>{produto.name}</h3>
                    <p>R$ {produto.value},00</p>
                    <button onClick={() => addToCart(produto)}>Adicionar ao carrinho</button>
                </ProdutoStatus>
            </Card>
        )
    })

    if (novaListaFiltrada.length === 0) {
        return (
            <SemProduto>
                <h2>Nenhum produto encontrado</h2>
            </SemProduto>
        )
    }

    return (
        <ContainerMain>
            <ContainerOrdem>
            <select onChange={handleOrdem} className="select">
                <option>Ordenar</option>
                <option value="Crescente">Crescente</option>
                <option value="Decrescente">Decrescente</option>
            </select>
            <p className="produtosQtd">Produtos: {novaListaFiltrada.length}</p>
            </ContainerOrdem>
            <ContainerCard>{novaListaFiltrada}</ContainerCard>
        </ContainerMain>
    )
}