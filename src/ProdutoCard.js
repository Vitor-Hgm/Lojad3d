function ProdutoCard(props){

    return(
        <div>
            <h2>{props.produto}</h2>
            <p>Preço: {props.preco}</p>
            <p>Descrição: {props.descricao}</p>
            <p>Quantidade: {props.qtd}</p>
            <button>Ver detalhes do Produto</button>
        </div>
    )
}

export default ProdutoCard;
