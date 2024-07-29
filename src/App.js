import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';
import Lanes from './Componentes/Lanes';

function App() {

  const lanes = [
    {
      nome: 'Top',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Jungle',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Mid',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'AdCarry',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
    {
      nome: 'Suporte',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
  ]

  const [jogadores, setJogadores] = useState([])

  const novoJogador = (jogador) => {
    console.log(jogador)
    setJogadores([...jogadores, jogador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario lanes={lanes.map(lane => lane.nome)} aoJogadorCadastrado={jogador => novoJogador(jogador)}/>

      {lanes.map(lane => <Lanes 
      key={lane.nome} 
      nome={lane.nome} 
      corPrimaria={lane.corPrimaria} 
      corSecundaria={lane.corSecundaria}/>)}
      jogadores={jogadores}
      
    </div>
  );
}

export default App;