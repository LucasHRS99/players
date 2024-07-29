import Jogador from '../Jogador'
import './Lanes.css'

export const Lanes = (props) => {
    return (
        <section className='lane' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>
                {props.nome}
            </h3>
            {props.jogadores.map(jogador => <Jogador nome={jogador.nome} lane={jogador.lane} imagem={jogador.imagem}/>)}
        </section>
    )
}