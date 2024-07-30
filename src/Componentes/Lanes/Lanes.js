import Jogador from '../Jogador'
import './Lanes.css'

export const Lanes = (props) => {
    return (
        props.jogadores.length > 0 && 
        <section className='lane' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>
                {props.nome}
            </h3>
            <div className='jogadores'>
            {props.jogadores.map(jogador => <Jogador 
            corDeFundo={props.corPrimaria}
            key={jogador.nome} 
            nome={jogador.nome} 
            main={jogador.main}
            lane={jogador.lane} 
            imagem={jogador.imagem}/>)}
            </div>
        </section>
    )
}