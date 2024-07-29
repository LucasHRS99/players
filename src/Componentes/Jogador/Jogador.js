import './Jogador.css'

export const Jogador = ({nome, imagem, lane}) => {
    return (
        <div className='jogador'>
            <div className='cabecalho'>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{lane}</h5>
            </div>
        </div>
    )
}